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

package io.spine.envelope;

import com.google.protobuf.Any;
import com.google.protobuf.Message;
import io.spine.base.MessageAcked;
import io.spine.protobuf.AnyPacker;

import java.util.Objects;

import static com.google.common.base.Preconditions.checkNotNull;

/**
 * Abstract base for classes implementing {@link MessageEnvelope}.
 *
 * @param <T> the type of the object that wraps a message
 * @author Alexander Yevsyukov
 * @author Alex Tymchenko
 */
abstract class AbstractMessageEnvelope<I extends Message, T extends Message>
        implements MessageEnvelope<I, T> {

    private final T object;

    AbstractMessageEnvelope(T object) {
        checkNotNull(object);
        this.object = object;
    }

    @Override
    public T getOuterObject() {
        return object;
    }

    @Override
    public MessageAcked acknowledge() {
        final I id = getId();
        final Any packedId = AnyPacker.pack(id);
        final MessageAcked result = MessageAcked.newBuilder()
                                                .setMessageId(packedId)
                                                .build();
        return result;
    }

    @Override
    public int hashCode() {
        return Objects.hash(object);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        final AbstractMessageEnvelope other = (AbstractMessageEnvelope) obj;
        return Objects.equals(this.object, other.object);
    }
}
