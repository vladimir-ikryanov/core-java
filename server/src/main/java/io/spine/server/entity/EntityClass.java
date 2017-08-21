/*
 * Copyright 2017, TeamDev Ltd. All rights reserved.
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

package io.spine.server.entity;

import com.google.protobuf.Message;
import io.spine.Identifier;
import io.spine.server.model.ModelClass;
import io.spine.server.model.ModelError;
import io.spine.type.ClassName;
import io.spine.type.KnownTypes;
import io.spine.type.TypeUrl;

import javax.annotation.Nullable;
import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;

import static com.google.common.base.Preconditions.checkNotNull;
import static java.lang.String.format;

/**
 * A class of entities.
 *
 * @param <E> the type of entities
 * @author Alexander Yevsyukov
 */
public class EntityClass<E extends Entity> extends ModelClass<E> {

    private static final long serialVersionUID = 0L;

    /** The class of entity IDs. */
    private final Class<?> idClass;

    /** The class of the entity state. */
    private final Class<? extends Message> stateClass;

    /** Type of the entity state. */
    private final TypeUrl entityStateType;

    /** The constructor for entities of this class. */
    @SuppressWarnings("TransientFieldNotInitialized") // Lazily initialized via accessor method.
    @Nullable
    private transient Constructor<E> entityConstructor;

    /** Creates new instance of the model class for the passed class of entities. */
    protected EntityClass(Class<? extends E> cls) {
        super(cls);
        final Class<?> idClass = getIdClass(cls);
        checkIdClass(idClass);
        this.idClass = idClass;
        this.stateClass = getStateClass(cls);
        final ClassName stateClassName = ClassName.of(stateClass);
        this.entityStateType = KnownTypes.getTypeUrl(stateClassName);
    }

    /**
     * Obtains the constructor for the passed entity class.
     *
     * <p>The entity class must have a constructor with the single parameter of type defined by
     * generic type {@code <I>}.
     *
     * @param entityClass the entity class
     * @param idClass     the class of entity identifiers
     * @param <E>         the entity type
     * @param <I>         the ID type
     * @return the constructor
     * @throws IllegalStateException if the entity class does not have the required constructor
     */
    private static <E extends Entity<I, ?>, I> Constructor<E> getConstructor(Class<E> entityClass,
                                                                             Class<I> idClass) {
        checkNotNull(entityClass);
        checkNotNull(idClass);

        try {
            @SuppressWarnings("JavaReflectionMemberAccess") // Required in the Entity definition.
            final Constructor<E> result = entityClass.getDeclaredConstructor(idClass);
            result.setAccessible(true);
            return result;
        } catch (NoSuchMethodException ignored) {
            throw noSuchConstructor(entityClass.getName(), idClass.getName());
        }
    }

    public <I> E createEntity(I id) {
        final Constructor<E> ctor = getConstructor();
        final E result = createEntity(ctor, id);
        return result;
    }

    private static IllegalStateException noSuchConstructor(String entityClass, String idClass) {
        final String errMsg = format(
                "%s class must declare a constructor with a single %s ID parameter.",
                entityClass, idClass
        );
        return new IllegalStateException(new NoSuchMethodException(errMsg));
    }

    /**
     * Retrieves the ID class of the entities of the given class.
     *
     * @param entityClass the entity class to inspect
     * @param <I>         the entity ID type
     * @return the entity ID class
     */
    private static <I> Class<I> getIdClass(Class<? extends Entity> entityClass) {
        checkNotNull(entityClass);
        @SuppressWarnings("unchecked") // The type is preserved by the Entity type declaration.
        final Class<I> result = (Class<I>) Entity.GenericParameter.ID.getArgumentIn(entityClass);
        return result;
    }

    /**
     * Retrieves the state class of the passed entity class.
     *
     * @param <S>         the entity state type
     * @param entityClass the entity class to inspect
     * @return the entity state class
     */
    static <S extends Message> Class<S> getStateClass(Class<? extends Entity> entityClass) {
        @SuppressWarnings("unchecked") // The type is preserved by the Entity type declaration.
        final Class<S> result = (Class<S>) Entity.GenericParameter.STATE.getArgumentIn(entityClass);
        return result;
    }

    /**
     * Creates a new entity and sets it to the default state.
     *
     * <p>If the created entity is {@link AbstractEntity} it is also
     * {@linkplain AbstractEntity#init() initialized}.
     */
    private static <I, E extends Entity<I, ?>> E createEntity(Constructor<E> ctor, I id) {
        checkNotNull(ctor);
        checkNotNull(id);
        try {
            final E result = ctor.newInstance(id);
            if (result instanceof AbstractEntity) {
                AbstractEntity abstractEntity = (AbstractEntity) result;
                abstractEntity.init();
            }
            return result;
        } catch (InvocationTargetException | InstantiationException | IllegalAccessException e) {
            throw new IllegalStateException(e);
        }
    }

    /**
     * Obtains constructor for the entities of this class.
     */
    public Constructor<E> getConstructor() {
        if (entityConstructor == null) {
            entityConstructor = findConstructor();
        }
        return entityConstructor;
    }

    @SuppressWarnings("unchecked")
    protected Constructor<E> findConstructor() {
        return (Constructor<E>) getConstructor(value(), getIdClass());
    }

    /**
     * Checks that this class of identifiers is supported by the framework.
     *
     * <p>The type of entity identifiers ({@code <I>}) cannot be bound because
     * it can be {@code Long}, {@code String}, {@code Integer}, and class implementing
     * {@code Message}.
     *
     * <p>We perform the check to to detect possible programming error
     * in declarations of entity and repository classes <em>until</em> we have
     * compile-time model check.
     *
     * @throws ModelError if unsupported ID class passed
     */
    private static <I> void checkIdClass(Class<I> idClass) throws ModelError {
        try {
            Identifier.checkSupported(idClass);
        } catch (IllegalArgumentException e) {
            throw new ModelError(e);
        }
    }

    /**
     * Obtains the class of IDs used by the entities of this class.
     */
    public final Class<?> getIdClass() {
        return idClass;
    }

    /**
     * Obtains the class of the state of entities of this class.
     */
    public final Class<? extends Message> getStateClass() {
        return stateClass;
    }

    /**
     * Obtains type URL of the state of entities of this class.
     */
    public final TypeUrl getStateType() {
        return entityStateType;
    }
}
