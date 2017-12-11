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
package io.spine.server.integration;

import com.google.protobuf.Message;
import io.spine.core.AbstractMessageEnvelope;
import io.spine.core.ActorContext;
import io.spine.core.EventContext;
import io.spine.type.MessageClass;

import static com.google.common.base.Preconditions.checkNotNull;
import static io.spine.util.Exceptions.newIllegalStateException;

/**
 * An envelope for the messages, produced outside of the current bounded context.
 *
 * @author Alex Tymchenko
 */
public final class ExternalMessageEnvelope
        extends AbstractMessageEnvelope<Message, ExternalMessage, ActorContext> {

    /** An identifier of the original message (e.g. event ID). */
    private final Message id;

    /** An original message (e.g. instance of {@code io.spine.sample.TaskCreated}). */
    private final Message message;

    /** A message class of the original message (e.g. {@code io.spine.sample.TaskCreated} class). */
    private final MessageClass messageClass;

    /** An actor context representing the environment in which the original message was created. */
    private final ActorContext actorContext;

    private ExternalMessageEnvelope(ExternalMessage externalMessage,
                                    Message originalMessage) {
        super(externalMessage);

        this.id = externalMessage.getId();
        this.message = originalMessage;
        this.messageClass = ExternalMessageClass.of(this.message.getClass());
        this.actorContext = externalMessage.getActorContext();

    }

    public static ExternalMessageEnvelope of(ExternalMessage externalMessage,
                                             Message originalMessage) {
        checkNotNull(externalMessage);
        return new ExternalMessageEnvelope(externalMessage, originalMessage);
    }

    @Override
    public Message getId() {
        return id;
    }

    @Override
    public Message getMessage() {
        return message;
    }

    @Override
    public MessageClass getMessageClass() {
        return messageClass;
    }

    @Override
    public ActorContext getMessageContext() {
        return actorContext;
    }

    @Override
    public void setOriginContext(EventContext.Builder builder) {
        /*
         * This should never happen, as no event is caused directly by an {@code ExternalMessage}.
         *
         * Instead, the external messages are consumed by an anti-corruption layer, such as
         * external reactor or subscriber methods in the destination bounded context.
         */
        throw newIllegalStateException(
                "An external message like this (%s) may not be a direct origin of any event.",
                this);
    }
}