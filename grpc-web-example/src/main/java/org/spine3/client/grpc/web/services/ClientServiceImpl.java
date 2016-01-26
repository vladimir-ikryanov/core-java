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
import org.spine3.client.Connection;
import org.spine3.client.grpc.web.*;

public class ClientServiceImpl extends ClientServiceGrpc.AbstractImpl {

    static {
        ChannelServiceWrapper.getInstance().registerStreamIdConverter(Connection.class,
                new ChannelServiceWrapper.ChannelIdConverter<Connection>() {
                    @Override
                    public String convert(Connection argument) {
                        return argument.getChannel().getToken();
                    }
                });
        ChannelServiceWrapper.getInstance().registerStreamIdConverter(SimpleConnection.class,
                new ChannelServiceWrapper.ChannelIdConverter<SimpleConnection>() {
                    @Override
                    public String convert(SimpleConnection argument) {
                        return argument.getChannelToken();
                    }
                });
    }

    @Override
    public SimpleCommandResponse post(SimpleCommandRequest request) {
        return SimpleCommandResponse.newBuilder().setValue("Ok").build();
    }

    @Override
    public void getEvents(SimpleConnection request, StreamObserver<SimpleEventRecord> resultObserver) {
        // we ignore request attribute here
        for (int i = 0; i < 10; i++) {
            resultObserver.onNext(SimpleEventRecord.newBuilder().setValue("Event " + i).build());
        }
        resultObserver.onCompleted();
    }
}
