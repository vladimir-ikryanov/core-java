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

import org.spine3.client.grpc.web.ChannelConnectionCredential;
import org.spine3.client.grpc.web.ChannelConnectionResponse;
import org.spine3.client.grpc.web.RpcCallHandler;

import java.util.HashMap;
import java.util.Map;

@SuppressWarnings({"AccessCanBeTightened", "EmptyClass"})
public abstract class ChannelConnectingGrpc implements RpcService, ChannelConnectingApi {

    private ChannelConnectingGrpc() {
    }

    public static RpcService newStub() {
        return new ChannelConnectingImpl();
    }

    public abstract static class AbstractImpl extends ChannelConnectingGrpc {

        private final Map<String, RpcCallHandler> handlers = new HashMap<String, RpcCallHandler>() {{
            put("Connect", new ConnectHandler(AbstractImpl.this));
        }};

        @Override
        public RpcCallHandler getRpcCallHandler(String method) {
            return handlers.get(method);
        }

        private static class ConnectHandler implements RpcCallHandler<ChannelConnectionCredential, ChannelConnectionResponse> {

            private final ChannelConnectingApi serviceImpl;

            ConnectHandler(ChannelConnectingApi serviceImpl) {
                this.serviceImpl = serviceImpl;
            }

            @Override
            public ChannelConnectionResponse handle(ChannelConnectionCredential requestMessage) {
                return serviceImpl.connect(requestMessage);
            }

            @Override
            public Class<ChannelConnectionCredential> getParameterClass() {
                return ChannelConnectionCredential.class;
            }
        }
    }
}
