/*
 * Copyright 2016, TeamDev Ltd. All rights reserved.
 *
 * Redistribution and use in source and/or binary forms, with or without
 * modification, must retain the above copyright notice and the following
 * disclaimer.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

package org.spine3.server.entity;

import com.google.common.base.Function;
import com.google.common.base.Joiner;
import com.google.common.collect.ImmutableSet;
import com.google.protobuf.Descriptors;
import com.google.protobuf.Message;
import com.google.protobuf.Timestamp;
import org.spine3.server.reflect.Classes;

import javax.annotation.CheckReturnValue;
import javax.annotation.Nonnull;
import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.util.List;

import static com.google.api.client.util.Throwables.propagate;
import static com.google.common.base.Preconditions.checkNotNull;
import static com.google.common.collect.Iterables.transform;
import static com.google.common.collect.Lists.newLinkedList;
import static com.google.protobuf.util.TimeUtil.getCurrentTime;

/**
 * A server-side object with an identity.
 *
 * <p>An entity identifier can be of one of the following types:
 *   <ul>
 *      <li>String
 *      <li>Long
 *      <li>Integer
 *      <li>A class implementing {@link Message}
 *   </ul>
 *
 * <p>Consider using {@code Message}-based IDs if you want to have typed IDs in your code, and/or
 * if you need to have IDs with some structure inside. Examples of such structural IDs are:
 *   <ul>
 *      <li>EAN value used in bar codes
 *      <li>ISBN
 *      <li>Phone number
 *      <li>email address as a couple of local-part and domain
 *   </ul>
 *
 *
 * <p>A state of an entity is defined as a protobuf message and basic versioning attributes.
 * The entity keeps only its latest state and meta information associated with this state.
 *
 * @param <I> the type of the entity ID
 * @param <S> the type of the entity state
 * @author Alexander Yevsyikov
 * @author Alexander Litus
 */
public abstract class Entity<I, S extends Message> {

    /**
     * The index of the declaration of the generic parameter type {@code I} in this class.
     */
    private static final int ID_CLASS_GENERIC_INDEX = 0;

    /**
     * The index of the declaration of the generic parameter type {@code S} in this class.
     */
    private static final int STATE_CLASS_GENERIC_INDEX = 1;

    /**
     * Supported ID types except {@link Message}s.
     */
    private static final ImmutableSet<Class<?>> supportedSimpleIdTypes = ImmutableSet.<Class<?>>builder()
            .add(String.class)
            .add(Long.class)
            .add(Integer.class)
            .build();

    private final I id;

    private S state;

    private Timestamp whenModified;

    private int version;

    /**
     * Creates a new instance.
     *
     * @param id the ID for the new instance
     * @throws IllegalArgumentException if the ID is not of one of the supported types for identifiers
     */
    @SuppressWarnings("ConstructorNotProtectedInAbstractClass")
    public Entity(I id) {
        // We make the constructor public in the abstract class to avoid having protected constructors in derived
        // classes. We require that entity constructors be public as they are called by repositories.
        checkIdType(id);
        this.id = id;
    }

    /**
     * Obtains the default entity state.
     *
     * @return an empty instance of the state class
     */
    @CheckReturnValue
    protected S getDefaultState() {
        final Class<? extends Entity> entityClass = getClass();
        final DefaultStateRegistry registry = DefaultStateRegistry.getInstance();
        if (!registry.contains(entityClass)) {
            final S state = createDefaultState();
            registry.put(entityClass, state);
        }
        @SuppressWarnings("unchecked") // cast is safe because this type of messages is saved to the map
        final S defaultState = (S) registry.get(entityClass);
        return defaultState;
    }

    private S createDefaultState() {
        final Class<S> stateClass = Classes.getGenericParameterType(getClass(), STATE_CLASS_GENERIC_INDEX);
        try {
            final Constructor<S> constructor = stateClass.getDeclaredConstructor();
            constructor.setAccessible(true);
            final S state = constructor.newInstance();
            return state;
        } catch (NoSuchMethodException | InstantiationException | IllegalAccessException | InvocationTargetException e) {
            throw propagate(e);
        }
    }

    /**
     * Obtains the entity state.
     *
     * @return the current state object or the value produced by {@link #getDefaultState()} if the state wasn't set
     */
    @CheckReturnValue
    public S getState() {
        final S result = (state == null) ? getDefaultState() : state;
        return result;
    }

    /**
     * Validates the passed state.
     *
     * <p>Does nothing by default. Aggregates may override this method to
     * specify logic of validating initial or intermediate state.
     *
     * @param state a state object to replace the current state
     * @throws IllegalStateException if the state is not valid
     */
    @SuppressWarnings({"NoopMethodInAbstractClass", "UnusedParameters"})
    // Have this no-op method to prevent enforcing implementation in all sub-classes.
    protected void validate(S state) throws IllegalStateException {
        // Do nothing by default.
    }

    /**
     * Validates and sets the state.
     *
     * @param state the state object to set
     * @param version the entity version to set
     * @param whenLastModified the time of the last modification to set
     * @see #validate(S)
     */
    protected void setState(S state, int version, Timestamp whenLastModified) {
        validate(state);
        this.state = checkNotNull(state);
        setVersion(version, whenLastModified);
    }

    /**
     * Sets version information of the entity.
     *
     * @param version the version number of the entity
     * @param whenLastModified the time of the last modification of the entity
     */
    protected void setVersion(int version, Timestamp whenLastModified) {
        this.version = version;
        this.whenModified = checkNotNull(whenLastModified);
    }


    /**
     * Updates the state incrementing the version number and recording time of the modification.
     *
     * @param newState a new state to set
     */
    protected void incrementState(S newState) {
        setState(newState, incrementVersion(), getCurrentTime());
    }

    /**
     * Sets the object into the default state.
     *
     * <p>Results of this method call are:
     * <ul>
     *   <li>The state object is set to the value produced by {@link #getDefaultState()}.
     *   <li>The version number is set to zero.
     *   <li>The {@link #whenModified} field is set to the system time of the call.
     * </ul>
     * <p>The timestamp is set to current system time.
     */
    protected void setDefault() {
        setState(getDefaultState(), 0, getCurrentTime());
    }

    /**
     * @return current version number
     */
    public int getVersion() {
        return version;
    }

    /**
     * Advances the current version by one and records the time of the modification.
     *
     * @return new version number
     */
    protected int incrementVersion() {
        ++version;
        whenModified = getCurrentTime();
        return version;
    }

    @CheckReturnValue
    public I getId() {
        return id;
    }

    /**
     * Obtains the timestamp of the last modification.
     *
     * @return the timestamp instance or the value produced by {@link Timestamp#getDefaultInstance()} if the state wasn't set
     * @see #setState(Message, int, Timestamp)
     */
    @CheckReturnValue
    @Nonnull
    public Timestamp whenModified() {
        return (whenModified == null) ? Timestamp.getDefaultInstance() : whenModified;
    }

    /**
     * Retrieves the ID class of the entities of the given class using reflection.
     *
     * @param entityClass the class of entities to check
     * @return the entity ID class
     */
    public static <I> Class<I> getIdClass(Class<? extends Entity<I, ?>> entityClass) {
        final Class<I> idClass = Classes.getGenericParameterType(entityClass, ID_CLASS_GENERIC_INDEX);
        return idClass;
    }

    /**
     * Ensures that the type of the {@code entityId} is supported.
     *
     * @param entityId the ID of the entity to check
     * @throws IllegalArgumentException if the ID is not of one of the supported types
     */
    public static <I> void checkIdType(I entityId) {
        final Class<?> idClass = entityId.getClass();
        if (supportedSimpleIdTypes.contains(idClass)) {
            return;
        }
        final boolean isMessage = entityId instanceof Message;
        if (!isMessage){
            throw unsupportedIdType(idClass);
        }
    }

    /**
     * Returns the short name of the ID type.
     *
     * @return
     *  <ul>
     *      <li>Short Protobuf type name if the value is {@link Message}.
     *      <li>Simple class name of the value, otherwise.
     *  </ul>
     */
    public String getShortIdTypeName() {
        if (id instanceof Message) {
            //noinspection TypeMayBeWeakened
            final Message message = (Message) id;
            final Descriptors.Descriptor descriptor = message.getDescriptorForType();
            final String result = descriptor.getName();
            return result;
        } else {
            final String result = id.getClass().getSimpleName();
            return result;
        }
    }

    private static IllegalArgumentException unsupportedIdType(Class<?> idClass) {
        final String message = "Expected one of the following ID types: " + supportedTypesToString() +
                "; found: " + idClass.getName();
        throw new IllegalArgumentException(message);
    }

    private static String supportedTypesToString() {
        final List<Class<?>> supportedIdTypes = newLinkedList(supportedSimpleIdTypes);
        supportedIdTypes.add(Message.class); // add Message only for string representation
        final Iterable<String> classStrings = transform(supportedIdTypes, new Function<Class<?>, String>() {
            @Override
            @SuppressWarnings("NullableProblems") // OK in this case
            public String apply(Class<?> clazz) {
                return clazz.getSimpleName();
            }
        });
        final String result = Joiner.on(", ").join(classStrings);
        return result;
    }
}