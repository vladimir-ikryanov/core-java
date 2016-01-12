package org.spine3.client.grpc.web;

import io.grpc.stub.StreamObserver;
import org.spine3.client.Connection;

import java.util.HashMap;
import java.util.Map;

@SuppressWarnings("AccessCanBeTightened")
public class ClientServiceGrpc {

    private ClientServiceGrpc() {
    }

    public interface Api {
        // rpc Connect(ClientRequest) returns (Connection);
        SimpleConnection connect(SimpleClientRequest request);

        // rpc Post(CommandRequest) returns (CommandResponse);
        // rpc Post(SimpleCommandRequest) returns (SimpleCommandResponse);
        SimpleCommandResponse post(SimpleCommandRequest request);

        // rpc GetEvents(Connection) returns (stream spine.base.EventRecord);
        void getEvents(SimpleConnection request, StreamObserver<SimpleEventRecord> resultObserver);
    }

    public abstract static class WebServlet extends AbstractServiceWebServlet implements Api {

        private static final long serialVersionUID = 5585993931021319063L;

        private Map<String, RpcCallHandler> handlers = new HashMap<String, RpcCallHandler>() {{
            put("Connect", new ConnectHandler(WebServlet.this));
            put("Post", new PostHandler(WebServlet.this));
            put("GetEvents", new GetEventsHandler(WebServlet.this));
        }};

        @Override
        protected RpcCallHandler getRpcCallHandler(String method) {
            return handlers.get(method);
        }

        private static class ConnectHandler implements RpcCallHandler<SimpleClientRequest, SimpleConnection> {

            private final Api serviceImpl;

            ConnectHandler(Api serviceImpl) {
                this.serviceImpl = serviceImpl;
            }

            @Override
            public SimpleConnection handle(SimpleClientRequest requestMessage) {
                return serviceImpl.connect(requestMessage);
            }

            @Override
            public Class<SimpleClientRequest> getParameterClass() {
                return SimpleClientRequest.class;
            }
        }

        private static class PostHandler implements RpcCallHandler<SimpleCommandRequest, SimpleCommandResponse> {

            private final Api serviceImpl;

            PostHandler(Api serviceImpl) {
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

            private final Api serviceImpl;

            GetEventsHandler(Api serviceImpl) {
                this.serviceImpl = serviceImpl;
            }

            @Override
            public WebServiceStreamingResponse handle(SimpleConnection requestMessage) {

                final ChannelServiceWrapper channelService = ChannelServiceWrapper.getInstance();
                // This is not stream id now
                final String channelId = channelService.getStreamId(requestMessage);
                final String streamId = channelService.openStream(channelId);

                serviceImpl.getEvents(requestMessage, new StreamObserver<SimpleEventRecord>() {
                    @Override
                    public void onNext(SimpleEventRecord value) {
                        channelService.sendMessage(value, streamId);
                    }

                    @Override
                    public void onError(Throwable t) {
                        // TODO:2015-12-24:mikhail.mikhaylov: Publish error.
                        channelService.closeStream(streamId);
                    }

                    @Override
                    public void onCompleted() {
                        // TODO:2015-12-24:mikhail.mikhaylov: Publish success.
                        channelService.closeStream(streamId);
                    }
                });

                // TODO:2015-12-24:mikhail.mikhaylov: Redesign it, so it'll return status instead o connection id.
                return WebServiceStreamingResponse.newBuilder().setStreamId(streamId).build();
            }

            @Override
            public Class<SimpleConnection> getParameterClass() {
                return SimpleConnection.class;
            }
        }
    }
}
