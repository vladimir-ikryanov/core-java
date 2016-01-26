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

package org.spine3.client.grpc.web.services;

import io.grpc.stub.StreamObserver;
import org.spine3.client.grpc.web.SimpleCommandRequest;
import org.spine3.client.grpc.web.SimpleCommandResponse;
import org.spine3.client.grpc.web.SimpleConnection;
import org.spine3.client.grpc.web.SimpleEventRecord;

@SuppressWarnings("WeakerAccess") // API
public interface ClientServiceApi {
    // rpc Post(CommandRequest) returns (CommandResponse);
    // rpc Post(SimpleCommandRequest) returns (SimpleCommandResponse);
    SimpleCommandResponse post(SimpleCommandRequest request);

    // rpc GetEvents(Connection) returns (stream spine.base.EventRecord);
    void getEvents(SimpleConnection request, StreamObserver<SimpleEventRecord> resultObserver);
}
