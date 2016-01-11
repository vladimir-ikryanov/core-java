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

define(['protobuf', 'constants', 'channelConnectingGrpc',
        'channelConnectionCredential'],
    function (protobuf, constants, ChannelConnectingGrpc,
              ChannelConnectionCredential) {
        var channelConnectingGrpc = new ChannelConnectingGrpc();
        var _eventBus;

        var ConnectionService = function (eventBus) {
            _eventBus = eventBus;
        };

        ConnectionService.prototype.Connect = function (credentialString) {
            //get credential somewhere

            var credential = new ChannelConnectionCredential(credentialString);
            var connectionPromise = channelConnectingGrpc.Connect(credential);

            connectionPromise.then(function (result) {
                console.log("App bound. Received channelId: " + result.channel_id);
                $("#app_token").val(result.channel_id);

                connect(result.channel_id);
            }, function (reason) {
                console.log("Could not bind app: {}.", reason)
            });
        };

        //wrap connect method with functionality from app.js
        //on event receiving via subscription, post it to event bus

        return ConnectionService;
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
