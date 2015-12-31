package org.spine3.client.grpc.web;

public class ChannelConnectingWebImpl extends ChannelConnectingGrpc.WebServlet {

    private static final long serialVersionUID = 4321975057088329206L;

    @Override
    public ChannelConnectionResponse connect(ChannelConnectionCredential request) {
        final String credential = request.getCredential();
        final String channelId = ChannelServiceWrapper.getInstance().openChannel(credential);
        return ChannelConnectionResponse.newBuilder().setChannelId(channelId).build();
    }
}
