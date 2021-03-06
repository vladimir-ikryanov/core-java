/*
 * Copyright 2018, TeamDev Ltd. All rights reserved.
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
package io.spine.server.bus;

import com.google.protobuf.Message;
import io.spine.core.MessageEnvelope;
import io.spine.type.MessageClass;

import java.util.Collection;

/**
 * A {@code Bus}, which delivers a single message to multiple dispatchers.
 *
 * @author Alex Tymchenko
 */
public abstract class MulticastBus<M extends Message,
                                   E extends MessageEnvelope<?, M, ?>,
                                   C extends MessageClass,
                                   D extends MessageDispatcher<C, E, ?>>
        extends Bus<M, E, C, D> {

    /**
     * Call the dispatchers for the {@code messageEnvelope}.
     *
     * @param messageEnvelope the message envelope to pass to the dispatchers.
     * @return the number of the dispatchers called, or {@code 0} if there weren't any.
     */
    protected int callDispatchers(E messageEnvelope) {
        @SuppressWarnings("unchecked")  // it's fine, since the message is validated previously.
        final C messageClass = (C) messageEnvelope.getMessageClass();
        final Collection<D> dispatchers = registry().getDispatchers(messageClass);
        for (D dispatcher : dispatchers) {
            dispatcher.dispatch(messageEnvelope);
        }
        return dispatchers.size();
    }
}
