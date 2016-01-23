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

package org.spine3.server.stream;

import com.google.common.collect.ImmutableSet;
import com.google.protobuf.Message;
import org.spine3.base.EventContext;
import org.spine3.internal.EventHandlerMethod;
import org.spine3.server.Entity;
import org.spine3.server.EntityId;
import org.spine3.server.util.Classes;
import org.spine3.server.util.MethodMap;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import static com.google.common.base.Throwables.propagate;
import static org.spine3.internal.EventHandlerMethod.IS_EVENT_HANDLER;

/**
 * {@code StreamProjection} holds a structural representation of data extracted from a stream of events.
 *
 * <p>The process of projecting the event stream into data we collect is performed
 * by event handlers for the events of interest. These event handlers are implemented
 * in the classes extending this abstract class.
 *
 * <p>Event handlers are invoked by a {@link StreamProjectionRepository} that manages instances
 * of a stream projection class.
 *
 * @param <I> the type of the IDs
 * @param <M> the type of the state objects holding projection data
 */
public abstract class StreamProjection<I, M extends Message> extends Entity<I, M> {

    private MethodMap handlers;

    /**
     * Creates a new instance.
     *
     * @param id the ID for the new instance
     * @throws IllegalArgumentException if the ID is not of one of the supported types
     * @see EntityId
     */
    protected StreamProjection(I id) {
        super(id);
    }

    protected void handle(Message event, EventContext ctx) {
        init();
        dispatch(event, ctx);
    }

    private void dispatch(Message event, EventContext ctx) {
        final Class<? extends Message> eventClass = event.getClass();
        final Method method = handlers.get(eventClass);
        if (method == null) {
            throw missingEventHandler(eventClass);
        }
        final EventHandlerMethod handler = new EventHandlerMethod(this, method);
        try {
            handler.invoke(event, ctx);
        } catch (InvocationTargetException e) {
            propagate(e);
        }
    }

    protected boolean isInitialized() {
        return handlers != null;
    }

    /**
     * Performs initialization of the instance.
     */
    protected void init() {
        if (!isInitialized()) {
            final Registry registry = Registry.getInstance();
            final Class<? extends StreamProjection> thisClass = getClass();

            if (!registry.contains(thisClass)) {
                registry.register(thisClass);
            }

            handlers = registry.getEventHandlers(thisClass);
        }
    }

    /**
     * Returns the set of event classes handled by the passed {@code StreamProjection} class.
     *
     * @param clazz the class to inspect
     * @return immutable set of event classes or an empty set if no events are handled
     */
    public static ImmutableSet<Class<? extends Message>> getEventClasses(Class<? extends StreamProjection> clazz) {
        return Classes.getHandledMessageClasses(clazz, IS_EVENT_HANDLER);
    }

    private IllegalStateException missingEventHandler(Class<? extends Message> eventClass) {
        return new IllegalStateException(String.format("Missing event handler for event class %s in the stream projection class %s",
                eventClass, this.getClass()));
    }

    private static class Registry {
        private final MethodMap.Registry<StreamProjection> eventHandlers = new MethodMap.Registry<>();

        boolean contains(Class<? extends StreamProjection> clazz) {
            return eventHandlers.contains(clazz);
        }

        void register(Class<? extends StreamProjection> clazz) {
            eventHandlers.register(clazz, IS_EVENT_HANDLER);
        }

        MethodMap getEventHandlers(Class<? extends StreamProjection> clazz) {
            final MethodMap result = eventHandlers.get(clazz);
            return result;
        }

        static Registry getInstance() {
            return RegistrySingleton.INSTANCE.value;
        }

        @SuppressWarnings("InnerClassTooDeeplyNested")
        private enum RegistrySingleton {
            INSTANCE;

            @SuppressWarnings("NonSerializableFieldInSerializableClass")
            private final Registry value = new Registry();
        }
    }
}