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

package org.spine3.server;

import com.google.common.collect.ImmutableMap;
import com.google.protobuf.Message;
import org.spine3.EventClass;
import org.spine3.base.EventContext;
import org.spine3.internal.EventHandlerMethod;

import java.lang.reflect.InvocationTargetException;
import java.util.Map;

/**
 * Creates data projection from incoming events.
 *
 * @param <I> the type of the IDs of the stateful handlers
 * @param <S> the type of the state objects
 */
public abstract class Projection<I, S extends Message> extends Entity<I, S> {

    private Map<EventClass, EventHandlerMethod> handlers;

    protected Projection(I id) {
        super(id);
    }

    @SuppressWarnings("TypeMayBeWeakened")
    protected void handle(Message event, EventContext ctx) throws InvocationTargetException {
        if (!isInitialized()) {
            init();
        }
        dispatch(event, ctx);
    }

    @SuppressWarnings("TypeMayBeWeakened")
    private void dispatch(Message event, EventContext ctx) throws InvocationTargetException {
        EventHandlerMethod method = handlers.get(EventClass.of(event));
        if (method != null) {
            method.invoke(event, ctx);
        }
    }

    protected boolean isInitialized() {
        return handlers != null;
    }

    protected void init() {
        final ImmutableMap.Builder<EventClass, EventHandlerMethod> builder = ImmutableMap.builder();
        builder.putAll(EventHandlerMethod.scan(this));
        this.handlers = builder.build();
    }

}