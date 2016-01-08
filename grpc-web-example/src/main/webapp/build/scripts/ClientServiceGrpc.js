define(['protobuf', 'constants', 'simpleClientRequest', 'simpleConnection',
        'simpleCommandRequest', 'simpleCommandResponse'],
    function (protobuf, constants, clientRequest, simpleConnection, commandRequest, commandResponse) {
        var ClientServiceGrpc = function () {
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
            //TODO:2015-12-31: Implement later.
        };

        return ClientServiceGrpc;
    });
