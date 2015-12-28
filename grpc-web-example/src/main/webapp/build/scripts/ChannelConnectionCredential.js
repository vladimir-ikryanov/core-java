define(['protobuf'], function (ProtoBuf) {

    var ChannelConnectionCredential = ProtoBuf.loadProtoFile("/build/res/spine.client.grpc/web/web_service.proto")
        .build("spine.client.grpc.web.ChannelConnectionCredential");

    return ChannelConnectionCredential;
});
