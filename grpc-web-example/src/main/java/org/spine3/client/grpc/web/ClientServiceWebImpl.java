package org.spine3.client.grpc.web;

import io.grpc.stub.StreamObserver;
import org.spine3.client.Connection;

public class ClientServiceWebImpl extends ClientServiceGrpc.WebServlet {

    private static final long serialVersionUID = -1931765567788382400L;

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
    }
}
