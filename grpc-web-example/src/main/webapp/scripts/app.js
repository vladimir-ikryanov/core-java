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
        simpleClientRequest: '../build/scripts/SimpleClientRequest'
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
    'simpleClientRequest'], function ($, long, byteBuffer, protoBuf, constants,
                                      ChannelConnectionCredential, ChannelConnectionResponse,
                                      SimpleCommandRequest, SimpleClientRequest) {
    console.info('Module loaded');

    $("#connect_app").bind('click', function (e) {
        console.log('Binding App...');

        var credential = new ChannelConnectionCredential($("#app_credential").val()).toBase64();

        $.ajax({
            type: 'POST',
            url: '/channelConnecting',
            data: 'rpc_method_type=Connect&rpc_method_argument=' + credential
        }).done(function (data) {
            var convertedResult = ChannelConnectionResponse.decode(data);
            console.log("App bound. Received channelId: " + convertedResult.channel_id);
            $("#app_token").val(convertedResult.channel_id);

            connect(convertedResult.channel_id);
        });

        e.stopPropagation();
        e.preventDefault();

        return false;
    });

    $("#broadcast").bind('click', function (e) {
        console.log('Broacasting...');

        var commandRequest = new SimpleCommandRequest("DummyRequestString").toBase64();

        $.ajax({
            type: 'POST',
            url: '/clientService',
            data: 'rpc_method_type=Post&rpc_method_argument=' + commandRequest
        }).done(function (data) {
            console.log("Broadcast successful");
        }).fail(function (error) {
            console.log("Could not broadcast: {}.", error);
        });

        e.stopPropagation();
        e.preventDefault();

        return false;
    });

    $("#connect_stream").bind('click', function (e) {
        console.log('Connecting stream...');

        var clientRequest = new SimpleClientRequest($("#app_token").val()).toBase64();

        $.ajax({
            type: 'POST',
            url: '/clientService',
            data: 'rpc_method_type=Connect&rpc_method_argument=' + clientRequest
        }).done(function (data) {
            console.log("Stream connection successful");
        }).fail(function (error) {
            console.log("Could not broadcast: {}.", error);
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