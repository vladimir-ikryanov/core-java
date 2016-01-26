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
import org.spine3.client.grpc.web.*;

import java.util.HashMap;
import java.util.Map;

@SuppressWarnings({"AccessCanBeTightened", "WeakerAccess"})
public abstract class ClientServiceGrpc implements RpcService, ClientServiceApi {

    private ClientServiceGrpc() {
    }

    public static RpcService newStub() {
        // TODO:2016-01-22:mikhail.mikhaylov: Convention required, 'cause we can't call Service.registerImpl explicitly.
        // Otherwise there is no point for complicated init flow for services.
        return new ClientServiceImpl();
    }

    public abstract static class AbstractImpl extends ClientServiceGrpc {

        private final Map<String, RpcCallHandler> handlers = new HashMap<String, RpcCallHandler>() {{
            put("Post", new PostHandler(AbstractImpl.this));
            put("GetEvents", new GetEventsHandler(AbstractImpl.this));
        }};

        public RpcCallHandler getRpcCallHandler(String method) {
            return handlers.get(method);
        }

        private static class PostHandler implements RpcCallHandler<SimpleCommandRequest, SimpleCommandResponse> {

            private final ClientServiceApi serviceImpl;

            PostHandler(ClientServiceApi serviceImpl) {
                this.serviceImpl = serviceImpl;
            }

            @Override
            public SimpleCommandResponse handle(SimpleCommandRequest requestMessage) {
                return serviceImpl.post(requestMessage);
            }

            @Override
            public Class<SimpleCommandRequest> getParameterClass() {
                return SimpleCommandRequest.class;
            }
        }

        private static class GetEventsHandler implements RpcCallHandler<SimpleConnection, WebServiceStreamingResponse> {

            private final ClientServiceApi serviceImpl;

            GetEventsHandler(ClientServiceApi serviceImpl) {
                this.serviceImpl = serviceImpl;
            }

            @Override
            public WebServiceStreamingResponse handle(SimpleConnection requestMessage) {

                final GetEventsStreamObserver streamObserver = new GetEventsStreamObserver(requestMessage);
                serviceImpl.getEvents(requestMessage, streamObserver);

                return WebServiceStreamingResponse.newBuilder().setStreamId(streamObserver.getStreamId()).build();
            }

            @Override
            public Class<SimpleConnection> getParameterClass() {
                return SimpleConnection.class;
            }
        }

        private static class GetEventsStreamObserver implements StreamObserver<SimpleEventRecord> {

            private final ChannelServiceWrapper channelService;
            private final String streamId;

            private GetEventsStreamObserver(SimpleConnection requestMessage) {
                super();
                channelService = ChannelServiceWrapper.getInstance();
                streamId = channelService.openStream(requestMessage);
            }

            @Override
            public void onNext(SimpleEventRecord value) {
                channelService.sendMessage(value, streamId);
            }

            @Override
            public void onError(Throwable t) {
                channelService.sendErrorSignal(streamId, t.getMessage());
            }

            @Override
            public void onCompleted() {
                channelService.sendCompleteSignal(streamId);
            }

            private String getStreamId() {
                return streamId;
            }
        }
    }
}
