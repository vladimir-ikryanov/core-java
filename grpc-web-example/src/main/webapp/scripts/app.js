requirejs.config({
    baseUrl: 'scripts',
    paths: {
        protoLib: '../build/scripts/proto/library',
        googleProtobuf: 'dependencies/google-protobuf',
        jquery: 'dependencies/jquery-2.1.4',
        constants: 'common/Constants',
        events: "../build/scripts/common/Events",
        clientServiceGrpc: '../build/scripts/grpc/ClientServiceGrpc',
        channelConnectingGrpc: '../build/scripts/grpc/ChannelConnectingGrpc',
        connectionService: "services/ConnectionService"
    }
});

requirejs([
    'jquery', 'googleProtobuf', 'protoLib',
    'clientServiceGrpc', 'channelConnectingGrpc',
    'connectionService'], function ($, googleProtobuf, protoLib,
                                    ClientServiceGrpc, ChannelConnectingGrpc,
                                    ConnectionService) {
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

        var SimpleCommandRequest = proto.spine.client.grpc.web.SimpleCommandRequest;
        var commandRequest = new SimpleCommandRequest();
        commandRequest.setValue("DummyRequestString");

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

        var argument = new proto.spine.client.grpc.web.SimpleConnection();
        argument.setChannelToken($("#app_token").val());

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
