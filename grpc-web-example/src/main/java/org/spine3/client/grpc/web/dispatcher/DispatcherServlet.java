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

package org.spine3.client.grpc.web.dispatcher;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.spine3.client.grpc.web.AbstractServiceWebServlet;
import org.spine3.client.grpc.web.services.RpcService;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

//TODO:2016-01-18:mikhail.mikhaylov: Remove Utilities.

/**
 * Main GRPC endpoint.
 * <p/>
 * This servlet will duplicate {@link AbstractServiceWebServlet} until it's API is well defined.
 */
//TODO:2016-01-15:mikhail.mikhaylov: Remove this @SuppressWarning after AbstracteviceWebServletRemoval.
@SuppressWarnings("DuplicateStringLiteralInspection")
public class DispatcherServlet extends HttpServlet implements Dispatcher {

    private static final long serialVersionUID = -8158413818037999080L;

    private final Map<String, RpcService> registeredServices = new HashMap<>();

    private static Logger log() {
        return LogSingleton.INSTANCE.value;
    }

    @Override
    public void init() throws ServletException {
        super.init();

        final ServiceInitializer serviceInitializer = new ServiceInitializer();
        serviceInitializer.initializeServices(this);

        if (log().isInfoEnabled()) {
            log().info("DispatcherServlet has ben set up, the number of services is: " +
                    registeredServices.keySet().size());
        }
    }

    @Override
    public void registerService(Class<RpcService> clazz, RpcService service) {
        // TODO:2016-01-18:mikhail.mikhaylov: Check if we should provide full name here.
        // We can get a collision for a few services within different packagees, and
        // full names can solve this problem/
        // TODO:2016-01-18:mikhail.mikhaylov: Check if RpcService i enoght.
        registeredServices.put(clazz.getSimpleName(), service);
    }

    private enum LogSingleton {
        INSTANCE;
        @SuppressWarnings("NonSerializableFieldInSerializableClass")
        private final Logger value = LoggerFactory.getLogger(DispatcherServlet.class);
    }

    @SuppressWarnings("UtilityClass")
    private static class Arguments {
        private static final String RPC_SERVICE_ARGUMENT = "rpc_service_argument";
        private static final String RPC_METHOD_ARGUMENT = "rpc_method_argument";
        private static final String RPC_REQUEST_ARGUMENT = "rpc_request_argument";
    }
}