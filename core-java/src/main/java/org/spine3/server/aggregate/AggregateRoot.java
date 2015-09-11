/*
 * Copyright 2015, TeamDev Ltd. All rights reserved.
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
package org.spine3.server.aggregate;

import com.google.common.annotations.VisibleForTesting;
import com.google.common.base.Function;
import com.google.common.base.Predicate;
import com.google.common.collect.*;
import com.google.protobuf.*;
import org.spine3.CommandClass;
import org.spine3.base.*;
import org.spine3.internal.MessageHandlerMethod;
import org.spine3.protobuf.Messages;
import org.spine3.server.Entity;
import org.spine3.server.Snapshot;
import org.spine3.server.SnapshotOrBuilder;
import org.spine3.server.aggregate.error.MissingEventApplierException;
import org.spine3.server.internal.CommandDispatcher;
import org.spine3.server.internal.CommandHandlerMethod;
import org.spine3.util.Events;

import javax.annotation.CheckReturnValue;
import javax.annotation.Nonnull;
import javax.annotation.Nullable;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Collections;
import java.util.List;
import java.util.Set;

import static com.google.common.base.Preconditions.checkNotNull;

/**
 * Abstract base for aggregate roots.
 *
 * @param <I> the type for ID of the aggregate root. Supported types are:
 *            <ul>
 *            <li>Classes implementing {@link Message}</li>
 *            <li>String</li>
 *            <li>Long</li>
 *            <li>Integer</li>
 *            </ul>
 *            Consider using {@code Message}-based IDs if you want to have typed IDs in your code, and/or
 *            if you need to have IDs with some structure inside. Examples of such structural IDs are:
 *            <ul>
 *            <li>EAN value used in bar codes</li>
 *            <li>ISBN</li>
 *            <li>Phone number</li>
 *            <li>email address as a couple of local-part and domain</li>
 *            </ul>
 * @param <S> the type of the state held by the root
 * @author Mikhail Melnik
 * @author Alexander Yevsyukov
 */
@SuppressWarnings({"ClassWithTooManyMethods", "AbstractClassNeverImplemented"})
public abstract class AggregateRoot<I, S extends Message> extends Entity<I, S> {

    /**
     * Cached value of the ID in the form of Any instance.
     */
    private final Any idAsAny;

    /**
     * Keeps initialization state of the aggregate root.
     */
    private volatile boolean initialized = false;

    /**
     * Internal dispatcher for command handling methods of this aggregate.
     */
    private CommandDispatcher internalDispatcher;

    /**
     * Dispatcher of applier methods of this aggregate.
     */
    private EventApplier.Map applier;

    /**
     * Events generated in the process of handling commands that were not yet committed.
     *
     * @see #commitEvents()
     */
    private final List<EventRecord> uncommittedEvents = Lists.newLinkedList();

    /**
     * Creates a new instance.
     *
     * @param id the ID for the new instance
     * @throws IllegalArgumentException if the ID is not of one of the supported types
     */
    protected AggregateRoot(I id) {
        super(id);

        //noinspection IfStatementWithTooManyBranches,ChainOfInstanceofChecks
        if (id instanceof Message) {
            Message message = (Message) id;
            this.idAsAny = Messages.toAny(message);
        } else if (id instanceof String) {
            String s = (String) id;
            this.idAsAny = Messages.toAny(StringValue.newBuilder().setValue(s).build());
        } else if (id instanceof Integer) {
            Integer intValue = (Integer) id;
            this.idAsAny = Messages.toAny(UInt32Value.newBuilder().setValue(intValue).build());
        } else if (id instanceof Long) {
            Long longValue = (Long) id;
            this.idAsAny = Messages.toAny(UInt64Value.newBuilder().setValue(longValue).build());
        } else {
            throw new IllegalArgumentException("ID of unsupported type encountered: " + id);
        }
    }

    /**
     * Returns set of the command types handled by a given aggregate root.
     *
     * @param clazz {@link Class} of the aggregate root
     * @return command types handled by aggregate root
     */
    @CheckReturnValue
    public static Set<CommandClass> getCommandClasses(Class<? extends AggregateRoot> clazz) {
        Set<Class<? extends Message>> types = getHandledMessageClasses(clazz, CommandHandlerMethod.isCommandHandlerPredicate);
        Iterable<CommandClass> transformed = Iterables.transform(types, new Function<Class<? extends Message>, CommandClass>() {
            @Nullable
            @Override
            public CommandClass apply(@Nullable Class<? extends Message> input) {
                if (input == null) {
                    return null;
                }
                return CommandClass.of(input);
            }
        });
        return ImmutableSet.copyOf(transformed);
    }

    /**
     * Returns event/command types handled by given AggregateRoot class.
     */
    @CheckReturnValue
    static Set<Class<? extends Message>> getHandledMessageClasses(Class<? extends AggregateRoot> clazz, Predicate<Method> methodPredicate) {

        Set<Class<? extends Message>> result = Sets.newHashSet();

        for (Method method : clazz.getDeclaredMethods()) {

            boolean methodMatches = methodPredicate.apply(method);

            if (methodMatches) {
                Class<? extends Message> firstParamType = MessageHandlerMethod.getFirstParamType(method);
                result.add(firstParamType);
            }
        }
        return result;
    }

    private void init() {
        if (!this.initialized) {
            initCommandDispatcher();
            initEventApplier();

            if (super.getState() == null) {
                setDefault();
            }

            this.initialized = true;
        }
    }

    /**
     * Returns the current state of the aggregate root.
     *
     * @return a non-null state object or default state instance
     */
    @Nonnull
    @Override
    public S getState() {
        init();
        final S state = super.getState();
        // An aggregate root when initialized may not have a null state because:
        // 1. Its initialization sets the state to default.
        // 2. Modifications are performed via command handlers or event appliers,
        //     which involves prior initialization.
        assert state != null;
        return state;
    }

    /**
     * Returns a non-null timestamp of the last modification.
     *
     * @return a non-null instance, which is the timestamp of the last modification or
     * the timestamp of the object creation of the root is in the default state
     */
    @Nonnull
    @Override
    public Timestamp whenLastModified() {
        init();
        final Timestamp lastModified = super.whenLastModified();
        // An aggregate root when initialized may not have a null modification timestamp because:
        // 1. Its initialization sets the timestamp.
        // 2. Modifications are performed via command handlers or event appliers,
        //     which involves prior initialization.
        assert lastModified != null;
        return lastModified;
    }

    private Any getIdAsAny() {
        return idAsAny;
    }

    private void initEventApplier() {
        applier = new EventApplier.Map(this);
    }

    private void initCommandDispatcher() {
        internalDispatcher = new CommandDispatcher();
        internalDispatcher.register(this);
    }

    /**
     * Dispatches commands, generates events and apply them to the aggregate root.
     *
     * @param command the command to be executed on aggregate root
     * @param context of the command
     * @throws InvocationTargetException is thrown if an exception occurs during command dispatching
     */
    @VisibleForTesting  // otherwise this method would have package access.
    protected final void dispatch(Message command, CommandContext context) throws InvocationTargetException {
        init();

        List<? extends Message> events = generateEvents(command, context);

        CommandId commandId = context.getCommandId();

        apply(events, commandId);
    }

    /**
     * Directs the passed command to the corresponding command handler method of the aggregate.
     *
     * @param command the command to be processed
     * @param context the context of the command
     * @return a list of the event messages that were produced as the result of handling the command
     * @throws InvocationTargetException if an exception occurs during command handling
     */
    private List<? extends Message> generateEvents(Message command, CommandContext context)
            throws InvocationTargetException {

        checkNotNull(command);
        checkNotNull(context);

        CommandHandlerMethod subscriber = internalDispatcher.getHandler(CommandClass.of(command));

        Object handlingResult = subscriber.invoke(command, context);

        //noinspection IfMayBeConditional
        if (List.class.isAssignableFrom(handlingResult.getClass())) {
            // Cast to list of messages as it is one of the return types we expect by methods we can call.
            //noinspection unchecked
            return (List<? extends Message>) handlingResult;
        } else {
            // Another type of result is single event (as Message).
            return Collections.singletonList((Message) handlingResult);
        }
    }

    /**
     * Plays passed events on the aggregate.
     *
     * @param records the list of the event records
     * @throws InvocationTargetException the exception is thrown if command dispatching fails inside
     */
    public void play(Iterable<EventRecord> records) throws InvocationTargetException {
        init();

        for (EventRecord record : records) {
            final Message event = Messages.fromAny(record.getEvent());
            apply(event);
        }
    }

    private void apply(Iterable<? extends Message> events, CommandId commandId) throws InvocationTargetException {
        for (Message event : events) {
            apply(event);

            int currentVersion = incrementVersion();
            final S state = getState();
            EventContext eventContext = createEventContext(commandId, event, state, currentVersion);
            EventRecord eventRecord = createEventRecord(event, eventContext);

            putUncommitted(eventRecord);
        }
    }

    /**
     * Applies an event to the aggregate root.
     * <p/>
     * If the event is {@link Snapshot} its state is copied. Otherwise, the event
     * is dispatched to corresponding applier method.
     *
     * @param event the event to apply
     * @throws MissingEventApplierException if there is no applier method defined for this type of event
     * @throws InvocationTargetException    if an exception occurs during event applying
     */
    private void apply(Message event) throws InvocationTargetException {
        if (event instanceof Snapshot) {
            restore((Snapshot) event);
            return;
        }
        applier.apply(event);
    }

    private void putUncommitted(EventRecord record) {
        uncommittedEvents.add(record);
    }

    /**
     * Restores state from the passed snapshot.
     *
     * @param snapshot the snapshot with the state to restore
     */
    public void restore(SnapshotOrBuilder snapshot) {
        S stateToRestore = Messages.fromAny(snapshot.getState());

        setState(stateToRestore, snapshot.getVersion(), snapshot.getWhenLastModified());
    }

    private static EventRecord createEventRecord(Message event, EventContext context) {
        EventRecord result = EventRecord.newBuilder()
                .setEvent(Messages.toAny(event))
                .setContext(context)
                .build();
        return result;
    }

    /**
     * @return immutable view of records for uncommitted events
     */
    @CheckReturnValue
    public List<EventRecord> getUncommittedEvents() {
        return ImmutableList.copyOf(uncommittedEvents);
    }

    /**
     * Returns and clears the events that were uncommitted before the call of this method.
     *
     * @return the list of event records
     */
    @CheckReturnValue
    public List<EventRecord> commitEvents() {
        List<EventRecord> result = ImmutableList.copyOf(uncommittedEvents);
        uncommittedEvents.clear();
        return result;
    }

    /**
     * Creates a context for an event.
     * <p/>
     * The context may optionally have custom attributes are added by
     * {@link #addEventContextAttributes(EventContext.Builder, CommandId, Message, Message, int)}.
     *
     * @param commandId      the ID of the command, which caused the event
     * @param event          the event for which to create the context
     * @param currentState   the state of the aggregated root after the event was applied
     * @param currentVersion the version of the aggregate root after the event was applied
     * @return new instance of the {@code EventContext}
     * @see #addEventContextAttributes(EventContext.Builder, CommandId, Message, Message, int)
     */
    protected EventContext createEventContext(CommandId commandId, Message event, S currentState, int currentVersion) {

        EventId eventId = Events.generateId(commandId);

        EventContext.Builder builder = EventContext.newBuilder()
                .setEventId(eventId)
                .setVersion(currentVersion)
                .setAggregateId(getIdAsAny());

        addEventContextAttributes(builder, commandId, event, currentState, currentVersion);

        return builder.build();
    }

    /**
     * Adds custom attributes to an event context builder during the creation of the event context.
     * <p/>
     * Does nothing by default. Override this method if you want to add custom attributes to the created context.
     *
     * @param builder        a builder for the event context
     * @param commandId      the id of the command, which cased the event
     * @param event          the event message
     * @param currentState   the current state of the aggregate root after the event was applied
     * @param currentVersion the version of the aggregate root after the event was applied   @see #createEventContext(CommandId, Message, Message, int)
     */
    @SuppressWarnings({"NoopMethodInAbstractClass", "UnusedParameters"}) // Have no-op method to avoid overriding.
    protected void addEventContextAttributes(EventContext.Builder builder,
                                             CommandId commandId, Message event, S currentState, int currentVersion) {
        // Do nothing.
    }

    /**
     * Transforms the current state of the aggregate root into the snapshot event.
     *
     * @return new snapshot
     */
    public Snapshot toSnapshot() {
        final Any state = Messages.toAny(getState());
        final int version = getVersion();
        final Timestamp whenModified = whenLastModified();
        Snapshot.Builder builder = Snapshot.newBuilder()
                .setState(state)
                .setVersion(version)
                .setWhenLastModified(whenModified);

        return builder.build();
    }
}
