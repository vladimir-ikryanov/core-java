requirejs.config({
    baseUrl: 'scripts',
    paths: {
        long: 'long',
        bytebuffer: 'bytebuffer',
        jquery: 'jquery-2.1.4',
        protobuf: 'protobuf',
        constants: 'Constants',
        channelConnectionCredential: '../build/scripts/ChannelConnectionCredential',
        channelConnectionResponse: '../build/scripts/ChannelConnectionResponse',
        simpleCommandRequest: '../build/scripts/SimpleCommandRequest',
        simpleCommandResponse: '../build/scripts/SimpleCommandResponse',
        simpleClientRequest: '../build/scripts/SimpleClientRequest',
        simpleConnection: '../build/scripts/SimpleConnection',
        simpleEventRecord: '../build/scripts/SimpleEventRecord',
        clientServiceGrpc: '../build/scripts/ClientServiceGrpc',
        channelConnectingGrpc: '../build/scripts/ChannelConnectingGrpc',
        connectionService: "services/ConnectionService",
        rpcResponse: "../build/scripts/RpcResponse",
        events: "../build/scripts/Events",
        webServiceStreamingResponse: "../build/scripts/WebServiceStreamingResponse"
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
        console.log('Broacasting...');

        var commandRequest = new SimpleCommandRequest("DummyRequestString");

        var broadcastPromise = clientService.Post(commandRequest);

        broadcastPromise.then(function (result) {
            console.log("Broadcast successful: {}.", result);
        }, function (reason) {
            console.log("Could not broadcast: {}.", reason);
        });

        e.stopPropagation();
        e.preventDefault();

        return false;
    });

    $("#connect_stream").bind('click', function (e) {
        console.log('Connecting stream...');

        var clientRequest = new SimpleClientRequest($("#app_token").val());

        var connectionPromise = clientService.Connect(clientRequest);

        connectionPromise.then(function (result) {
            console.log("Stream connection successful: {}", result);
        }, function (reason) {
            console.log("Could not connect stream: {}.", reason);
        });

        e.stopPropagation();
        e.preventDefault();

        return false;
    });

    $("#get_events").bind('click', function (e) {
        console.log("Testing Get Events..");

        var argument = new SimpleConnection($("#app_credential").val());

        clientService.GetEvents(argument);

        e.stopPropagation();
        e.preventDefault();

        return false;
    });
});
