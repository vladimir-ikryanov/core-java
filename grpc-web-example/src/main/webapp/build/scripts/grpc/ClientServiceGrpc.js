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

define(['protoLib',
        'constants',
        'events'],
    function (protoLib,
              constants,
              events) {
        var _eventBus;

        var ClientServiceGrpc = function (eventBus) {
            _eventBus = eventBus;
        };

        ClientServiceGrpc.prototype.Post = function (requestArgument) {
            var argumentType = proto.spine.client.grpc.web.SimpleCommandRequest;

            return new Promise(function (resolve, reject) {
                if (!requestArgument instanceof argumentType) {
                    reject(new Error("Invalid argument."));
                } else {
                    var value = requestArgument.serializeBinary();

                    $.ajax({
                        type: 'POST',
                        url: Constants.DispatcherPath,
                        data: 'rpc_service_argument=ClientServiceGrpc&rpc_method_argument=Post&rpc_request_argument=' + value
                    }).done(function (data) {
                        var convertedResult = proto.spine.client.grpc.web.SimpleCommandResponse.deserializeBinary(data);
                        resolve(convertedResult);
                    }).fail(function (error) {
                        reject(error);
                    });
                }
            });
        };

        ClientServiceGrpc.prototype.GetEvents = function (requestArgument, streamingCallback) {
            var value = requestArgument.serializeBinary();

            $.ajax({
                type: 'POST',
                url: Constants.DispatcherPath,
                data: 'rpc_service_argument=ClientServiceGrpc&rpc_method_argument=GetEvents&rpc_request_argument=' + value
            }).done(function (data) {
                var message = proto.spine.client.grpc.web.WebServiceStreamingResponse.deserializeBinary(data);
                var stream_id = message.getStreamId();
                _eventBus.on(Events.MESSAGE_RECEIVED, function (event, data) {
                    if (data.getStreamId() == stream_id) {
                        var decodedEvent = proto.spine.client.grpc.web.SimpleEventRecord.deserializeBinary(data.getDataBase64());
                        console.log("Service got proper message: ", decodedEvent.getValue(), decodedEvent);
                        streamingCallback.onNext(decodedEvent);
                    }
                });
                _eventBus.on(Events.CALL_COMPLETED, function (event, data) {
                    if (data.getStreamId() == stream_id) {
                        console.log("Service call completed");
                        streamingCallback.onCompleted();
                        _eventBus.off(this);
                    }
                });
                _eventBus.on(Events.CALL_FAILED, function (event, data) {
                    if (data.getStreamId() == stream_id) {
                        console.log("Service call failed");
                        streamingCallback.onError(data.getErrorCause());
                        _eventBus.off(this);
                    }
                });
            });

        };

        return ClientServiceGrpc;
    });

