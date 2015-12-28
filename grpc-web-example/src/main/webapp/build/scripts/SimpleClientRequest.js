define(['protobuf'], function (ProtoBuf) {

    var SimpleClientRequest = ProtoBuf.loadProtoFile("/build/res/spine.client.grpc/web/web_service.proto")
        .build("spine.client.grpc.web.SimpleClientRequest");

    return SimpleClientRequest;
});
