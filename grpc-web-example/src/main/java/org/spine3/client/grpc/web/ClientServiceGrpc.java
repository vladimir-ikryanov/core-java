package org.spine3.client.grpc.web;

import io.grpc.stub.StreamObserver;

import java.util.HashMap;
import java.util.Map;

@SuppressWarnings({"AccessCanBeTightened", "WeakerAccess"})
public class ClientServiceGrpc {

    private ClientServiceGrpc() {
    }

    public interface Api {
        // rpc Post(CommandRequest) returns (CommandResponse);
        // rpc Post(SimpleCommandRequest) returns (SimpleCommandResponse);
        SimpleCommandResponse post(SimpleCommandRequest request);

        // rpc GetEvents(Connection) returns (stream spine.base.EventRecord);
        void getEvents(SimpleConnection request, StreamObserver<SimpleEventRecord> resultObserver);
    }

    public abstract static class WebServlet extends AbstractServiceWebServlet implements Api {

        private static final long serialVersionUID = 5585993931021319063L;

        private final Map<String, RpcCallHandler> handlers = new HashMap<String, RpcCallHandler>() {{
            put("Post", new PostHandler(WebServlet.this));
            put("GetEvents", new GetEventsHandler(WebServlet.this));
        }};

        @Override
        protected RpcCallHandler getRpcCallHandler(String method) {
            return handlers.get(method);
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
                // TODO:2015-12-24:mikhail.mikhaylov: Publish error.
                channelService.closeStream(streamId);
            }

            @Override
            public void onCompleted() {
                // TODO:2015-12-24:mikhail.mikhaylov: Publish success.
                channelService.closeStream(streamId);
            }

            private String getStreamId() {
                return streamId;
            }
        }
    }
}
