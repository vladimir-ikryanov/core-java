define(['protobuf'], function (ProtoBuf) {

    var ChannelConnectionResponse = ProtoBuf.loadProtoFile("/build/res/spine.client.grpc/web/web_service.proto")
        .build("spine.client.grpc.web.ChannelConnectionResponse");

    return ChannelConnectionResponse;
});
