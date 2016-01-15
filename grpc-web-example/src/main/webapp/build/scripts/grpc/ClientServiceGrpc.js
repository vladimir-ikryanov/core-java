/*
 * Copyright 2015, TeamDev Ltd. All rights reserved.
 *
 * Redistribution and use in source and/or binary forms, with or without
 * modification, must retain the above copyright notice and the following
 * disclaimer.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

define(['protobuf', 'constants', 'simpleClientRequest', 'simpleConnection',
        'simpleCommandRequest', 'simpleCommandResponse', 'events', 'webServiceStreamingResponse', 'simpleEventRecord'],
    function (protobuf, constants, clientRequest, simpleConnection, commandRequest, commandResponse, events,
              WebServiceStreamingResponse, SimpleEventRecord) {
        var _eventBus;

        var ClientServiceGrpc = function (eventBus) {
            _eventBus = eventBus;
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

        ClientServiceGrpc.prototype.GetEvents = function (requestArgument, streamingCallback) {
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
                        var decodedEvent = SimpleEventRecord.decode(data.data_base64);
                        console.log("Service got proper message: {}", decodedEvent);
                        streamingCallback.onNext(decodedEvent);
                    }
                });
                _eventBus.on(Events.CALL_COMPLETED, function (event, data) {
                    if (data.stream_id == stream_id) {
                        console.log("Service call completed");
                        streamingCallback.onCompleted();
                        // remove listeners
                    }
                });
                _eventBus.on(Events.CALL_FAILED, function (event, data) {
                    if (data.stream_id == stream_id) {
                        console.log("Service call failed");
                        streamingCallback.onError(data.error_cause);
                        // remove listeners
                    }
                });
            });

        };

        return ClientServiceGrpc;
    });
