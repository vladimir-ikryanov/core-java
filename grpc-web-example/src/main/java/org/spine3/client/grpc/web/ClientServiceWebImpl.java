package org.spine3.client.grpc.web;

import com.google.protobuf.Any;
import io.grpc.stub.StreamObserver;
import org.spine3.base.EventRecord;

public class ClientServiceWebImpl extends ClientServiceGrpc.WebServlet {

    private static final long serialVersionUID = -1931765567788382400L;

    @Override
    public SimpleConnection connect(SimpleClientRequest request) {
        // TODO:2015-12-24:mikhail.mikhaylov: Check if it's correct to identify clients by id.
        // Do multiple web clients have different ids?
        final String clientId = request.getClientId();
        final String channelId = ChannelServiceWrapper.getInstance().openStream(clientId);
        // TODO:2015-12-24:mikhail.mikhaylov: Migrate API to protobuf objects instead of Strings?
        return SimpleConnection.newBuilder().setChannelToken(channelId).build();
    }

    @Override
    public SimpleCommandResponse post(SimpleCommandRequest request) {
        // testing channel api
        final PhraseSaidEvent broadcastEvent = PhraseSaidEvent.newBuilder().setPhrase("Hooray!").build();
        ChannelServiceWrapper.getInstance().broadCast(EventRecord.newBuilder(EventRecord.getDefaultInstance())
                .setEvent(Any.pack(broadcastEvent)).build());

        return SimpleCommandResponse.newBuilder().setValue("Ok").build();
    }

    @Override
    public void getEvents(SimpleConnection request, StreamObserver<SimpleEventRecord> resultObserver) {
        // In this example we CURRENTLY don't send events directly. Instead of it we broadcast dummy event.
    }
}
