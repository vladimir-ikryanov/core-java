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
        clientServiceGrpc: '../build/scripts/ClientServiceGrpc',
        channelConnectingGrpc: '../build/scripts/ChannelConnectingGrpc',
        connectionService: "services/ConnectionService"
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

    var clientService = new ClientServiceGrpc();
    var channelConnecting = new ChannelConnectingGrpc();

    var connectionService = new ConnectionService({name: "Dummmy"});

    $("#connect_app").bind('click', function (e) {
        console.log('Binding App...');

        var credential = new ChannelConnectionCredential($("#app_credential").val());

        var connectionPromise = channelConnecting.Connect(credential);

        connectionService.Connect();

        connectionPromise.then(function (result) {
            console.log("App bound. Received channelId: " + result.channel_id);
            $("#app_token").val(result.channel_id);

            connect(result.channel_id);
        }, function (reason) {
            console.log("Could not bind app: {}.", reason)
        });

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
});

function connect(token) {
    channel = new goog.appengine.Channel(token);

    socket = channel.open();

    socket.onopen = onOpened;
    socket.onmessage = onMessage;
    socket.onerror = onError;
    socket.onclose = onClose;
}

var onOpened = function () {
    console.log("Socket opened");
};

var onMessage = function (data) {
    console.log("Message received: {}.", data);
};

var onError = function (data) {
    console.log("Error happened: {}.", data);
};

var onClose = function () {
    console.log("Socket closed.")
};