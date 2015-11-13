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
package org.spine3.grpc.rest.sample;

import org.spine3.grpc.rest.AbstractRpcService;
import org.spine3.grpc.rest.RpcCallHandler;

import java.util.HashMap;
import java.util.Map;

/**
 * Sample class which shows the desired result of a code generation tool.
 */
//<generated name>
@SuppressWarnings({"NonSerializableFieldInSerializableClass", "serial"})
public class RpcServiceSample extends AbstractRpcService {

    private final Map<String, RpcCallHandler> handlers = new HashMap<>();

    //<generated name>
    public RpcServiceSample() {
        //<generated handlers init>
        handlers.put("sample", new RpcCallHandlerSample());
    }

    @Override
    protected RpcCallHandler getRpcCallHandler(String rpcCallType) {
        return handlers.get(rpcCallType);
    }
}
