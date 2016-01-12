define(['protobuf', 'constants', 'simpleClientRequest', 'simpleConnection',
        'simpleCommandRequest', 'simpleCommandResponse', 'events', 'webServiceStreamingResponse', 'simpleEventRecord'],
    function (protobuf, constants, clientRequest, simpleConnection, commandRequest, commandResponse, events,
              WebServiceStreamingResponse, SimpleEventRecord) {
        var _eventBus;

        var ClientServiceGrpc = function (eventBus) {
            _eventBus = eventBus;

            _eventBus.on(Events.MESSAGE_RECEIVED, function (event, data) {
                console.log("Got da message from event bus: {}.", data);
            })
        };

        ClientServiceGrpc.prototype.Connect = function (requestArgument) {
            return new Promise(function (resolve, reject) {
                if (!requestArgument instanceof clientRequest) {
                    reject(new Error("Invalid argument."));
                } else {
                    var value = requestArgument.toBase64();

                    $.ajax({
                        type: 'POST',
                        url: Constants.ClientServicePath,
                        data: 'rpc_method_type=Connect&rpc_method_argument=' + value
                    }).done(function (data) {
                        var convertedResult = simpleConnection.decode(data);
                        resolve(convertedResult);
                    }).fail(function (error) {
                        reject(error);
                    });
                }
            });
        };

        ClientServiceGrpc.prototype.Post = function (requestArgument) {
            return new Promise(function (resolve, reject) {
                if (!requestArgument instanceof commandRequest) {
                    reject(new Error("Invalid argument."));
                } else {
                    var value = requestArgument.toBase64();

                    $.ajax({
                        type: 'POST',
                        url: Constants.ClientServicePath,
                        data: 'rpc_method_type=Post&rpc_method_argument=' + value
                    }).done(function (data) {
                        var convertedResult = commandResponse.decode(data);
                        resolve(convertedResult);
                    }).fail(function (error) {
                        reject(error);
                    });
                }
            });
        };

        ClientServiceGrpc.prototype.GetEvents = function (requestArgument) {
            // call backend
            // get ok
            // subscribe for stream
            var value = requestArgument.toBase64();

            $.ajax({
                type: 'POST',
                url: Constants.ClientServicePath,
                data: 'rpc_method_type=GetEvents&rpc_method_argument=' + value
            }).done(function (data) {
                var message = WebServiceStreamingResponse.decode(data);
                var stream_id = message.stream_id;

                _eventBus.on(Events.MESSAGE_RECEIVED, function (event, data) {
                    if (data.stream_id == stream_id) {
                        console.log("Service got proper message: {}", SimpleEventRecord.decode(data.data_base64));
                    }
                });
            });

        };

        return ClientServiceGrpc;
    });
