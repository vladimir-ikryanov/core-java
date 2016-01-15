requirejs.config({
    baseUrl: 'scripts',
    paths: {
        long: 'dependencies/long',
        bytebuffer: 'dependencies/bytebuffer',
        jquery: 'dependencies/jquery-2.1.4',
        protobuf: 'dependencies/protobuf',
        constants: 'common/Constants',
        channelConnectionCredential: '../build/scripts/proto/ChannelConnectionCredential',
        channelConnectionResponse: '../build/scripts/proto/ChannelConnectionResponse',
        simpleCommandRequest: '../build/scripts/proto/SimpleCommandRequest',
        simpleCommandResponse: '../build/scripts/proto/SimpleCommandResponse',
        simpleClientRequest: '../build/scripts/proto/SimpleClientRequest',
        simpleConnection: '../build/scripts/proto/SimpleConnection',
        simpleEventRecord: '../build/scripts/proto/SimpleEventRecord',
        clientServiceGrpc: '../build/scripts/grpc/ClientServiceGrpc',
        channelConnectingGrpc: '../build/scripts/grpc/ChannelConnectingGrpc',
        connectionService: "services/ConnectionService",
        rpcResponse: "../build/scripts/proto/RpcResponse",
        events: "../build/scripts/common/Events",
        webServiceStreamingResponse: "../build/scripts/proto/WebServiceStreamingResponse"
    }
});

requirejs([
    'jquery',
    'long',
    'bytebuffer',
    'protobuf',
    'constants',
    'channelConnectionCredential',
    'channelConnectionResponse',
    'simpleCommandRequest',
    'simpleCommandResponse',
    'simpleClientRequest',
    'simpleConnection',
    'clientServiceGrpc',
    'channelConnectingGrpc',
    'connectionService'], function ($, long, byteBuffer, protoBuf, constants,
                                    ChannelConnectionCredential, ChannelConnectionResponse,
                                    SimpleCommandRequest, SimpleCommandResponse, SimpleClientRequest,
                                    SimpleConnection, ClientServiceGrpc, ChannelConnectingGrpc, ConnectionService) {
    console.info('Module loaded');

    var eventBus = $(".event-bus");

    var clientService = new ClientServiceGrpc(eventBus);
    var connectionService = new ConnectionService(eventBus);

    $("#connect_app").bind('click', function (e) {
        console.log('Binding App...');

        var credentialValue = $("#app_credential").val();

        connectionService.Connect(credentialValue);

        e.stopPropagation();
        e.preventDefault();

        return false;
    });

    $("#broadcast").bind('click', function (e) {
        console.log('Posting command...');

        var commandRequest = new SimpleCommandRequest("DummyRequestString");

        var broadcastPromise = clientService.Post(commandRequest);

        broadcastPromise.then(function (result) {
            console.log("Posting command successful: {}.", result);
        }, function (reason) {
            console.log("Could not post command: {}.", reason);
        });

        e.stopPropagation();
        e.preventDefault();

        return false;
    });


    $("#get_events").bind('click', function (e) {
        console.log("Testing Get Events..");

        var argument = new SimpleConnection($("#app_credential").val());

        var streamingCallback = {};
        streamingCallback.onNext = function (event) {
            console.log("Application got an event: {}.", event)
        };
        streamingCallback.onCompleted = function () {
            console.log("Application got streaming call completion signal.")
        };
        streamingCallback.onError = function (reason) {
            console.log("Application got streaming call error signal: {}.", reason)
        };

        clientService.GetEvents(argument, streamingCallback);

        e.stopPropagation();
        e.preventDefault();

        return false;
    });
});
