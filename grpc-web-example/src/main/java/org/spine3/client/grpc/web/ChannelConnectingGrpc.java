package org.spine3.client.grpc.web;

import java.util.HashMap;
import java.util.Map;

@SuppressWarnings({"AccessCanBeTightened", "EmptyClass"})
public class ChannelConnectingGrpc {
    public interface Api {
        //TODO:2015-12-24:mikhail.mikhaylov: Think about this API later on to support client types.
        ChannelConnectionResponse connect(ChannelConnectionCredential request);
    }

    public abstract static class WebServlet extends AbstractServiceWebServlet implements Api {

        private static final long serialVersionUID = -8717653984111245633L;

        private Map<String, RpcCallHandler> handlers = new HashMap<String, RpcCallHandler>() {{
            put("Connect", new ConnectHandler(WebServlet.this));
        }};

        @Override
        protected RpcCallHandler getRpcCallHandler(String method) {
            return handlers.get(method);
        }

        private static class ConnectHandler implements RpcCallHandler<ChannelConnectionCredential, ChannelConnectionResponse> {

            private final Api serviceImpl;

            ConnectHandler(Api serviceImpl) {
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
