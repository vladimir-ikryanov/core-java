define(['protobuf'], function (ProtoBuf) {

    var SimpleCommandRequest = ProtoBuf.loadProtoFile("/build/res/spine.client.grpc/web/web_service.proto")
        .build("spine.client.grpc.web.SimpleCommandRequest");

    return SimpleCommandRequest;
});
