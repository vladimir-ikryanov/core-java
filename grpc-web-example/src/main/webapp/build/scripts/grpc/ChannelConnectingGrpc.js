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

define(['protobuf', 'constants', 'channelConnectionCredential', 'channelConnectionResponse'],
    function (protobuf, constants, channelConnectionCredential, channelConnectionResponse) {
        var ChannelConnectingGrpc = function () {
        };

        ChannelConnectingGrpc.prototype.Connect = function (requestArgument) {
            return new Promise(function (resolve, reject) {
                if (!requestArgument instanceof channelConnectionCredential) {
                    reject(new Error("Invalid argument."));
                } else {
                    var value = requestArgument.toBase64();

                    $.ajax({
                        type: 'POST',
                        url: Constants.ChannelConnectingPath,
                        data: 'rpc_method_type=Connect&rpc_method_argument=' + value
                    }).done(function (data) {
                        var convertedResult = channelConnectionResponse.decode(data);
                        resolve(convertedResult);
                    }).fail(function (error) {
                        reject(error);
                    });
                }
            });
        };

        return ChannelConnectingGrpc;
    });
