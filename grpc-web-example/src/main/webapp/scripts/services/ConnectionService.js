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

define(['protoLib', 'constants', 'channelConnectingGrpc'],
    function (protoLib, constants, ChannelConnectingGrpc) {
        var channelConnectingGrpc = new ChannelConnectingGrpc();
        var _eventBus;

        var ConnectionService = function (eventBus) {
            _eventBus = eventBus;
        };

        ConnectionService.prototype.Connect = function (credentialString) {
            //get credential somewhere

            var credential = new proto.spine.client.grpc.web.ChannelConnectionCredential();
            credential.setCredential(credentialString);
            var connectionPromise = channelConnectingGrpc.Connect(credential);

            connectionPromise.then(function (result) {
                console.log("App bound. Received channelId: " + result.getChannelId());
                $("#app_token").val(result.getChannelId());

                connect(result.getChannelId(), _eventBus, proto.spine.client.grpc.web.RpcResponse);
            }, function (reason) {
                console.log("Could not bind app: {}.", reason)
            });
        };

        //wrap connect method with functionality from app.js
        //on event receiving via subscription, post it to event bus

        return ConnectionService;
    });

function connect(token, eventBus, RpcResponse) {
    channel = new goog.appengine.Channel(token);

    socket = channel.open();

    socket.onopen = onOpened;
    socket.onmessage = function (data) {
        console.log("Message received: {}.", data);

        var response = RpcResponse.deserializeBinary(data.data);
        switch (response.getResultCase()) {
            case RpcResponse.ResultCase.DATA_BASE64:
                eventBus.trigger(Events.MESSAGE_RECEIVED, response);
                break;
            case RpcResponse.ResultCase.COMPLETION_STATUS:
                eventBus.trigger(Events.CALL_COMPLETED, response);
                break;
            case RpcResponse.ResultCase.ERROR_CAUSE:
                eventBus.trigger(Events.CALL_FAILED, response);
                break;
        }
    };
    socket.onerror = onError;
    socket.onclose = onClose;
}

var onOpened = function () {
    console.log("Socket opened");
};

var onError = function (data) {
    console.log("Error happened: {}.", data);
};

var onClose = function () {
    console.log("Socket closed.")
};

