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

import com.google.protobuf.ByteString;
import com.google.protobuf.Message;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.spine3.client.grpc.web.RpcCallHandler;
import org.spine3.client.grpc.web.services.RpcService;
import org.spine3.client.grpc.web.SuccessfulRpcCall;
import org.spine3.client.grpc.web.VoidRpcArgument;
import org.spine3.client.grpc.web.util.ProtobufRequestReaderUtil;

import javax.servlet.ServletException;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.bind.DatatypeConverter;
import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.InvocationTargetException;
import java.util.HashMap;
import java.util.Map;

import static com.google.api.client.repackaged.com.google.common.base.Strings.isNullOrEmpty;
import static java.lang.String.format;

/**
 * Main GRPC endpoint.
 */
@SuppressWarnings({"DuplicateStringLiteralInspection", "Duplicates"})
public class DispatcherServlet extends HttpServlet implements Dispatcher {

    private static final long serialVersionUID = -8158413818037999080L;
    private static final String PROTOBUF_PARSE_FROM_METHOD_NAME = "parseFrom";
    private static final String PROTO_MIME_TYPE = "application/x-protobuf";

    private static final String RPC_SERVICE_ARGUMENT = "rpc_service_argument";
    private static final String RPC_METHOD_ARGUMENT = "rpc_method_argument";
    private static final String RPC_REQUEST_ARGUMENT = "rpc_request_argument";

    private static final String INVALID_RPC_CALL_ARG = "Invalid RPC call argument:";

    @SuppressWarnings("NonSerializableFieldInSerializableClass")
    private final Map<String, RpcService> registeredServices = new HashMap<>();

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

    @SuppressWarnings("RefusedBequest") // Servlet API
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        final String rpcServiceArg = req.getParameter(RPC_SERVICE_ARGUMENT);
        final String rpcMethodArg = req.getParameter(RPC_METHOD_ARGUMENT);
        final String rpcArgumentArg = req.getParameter(RPC_REQUEST_ARGUMENT);

        final RpcService service = getRpcService(rpcServiceArg);
        final RpcCallHandler handler = getRpcCallHandler(service, rpcMethodArg);
        final Message callResult = invokeRpcMethod(handler, rpcArgumentArg);

        write(resp, callResult);
    }

    private static RpcCallHandler getRpcCallHandler(RpcService service, String rpcMethodName) {
        if (isNullOrEmpty(rpcMethodName)) {
            throw new IllegalArgumentException(format("%s empty method name.", INVALID_RPC_CALL_ARG));
        }
        final RpcCallHandler rpcCallHandler = service.obtainRpcCallHandler(rpcMethodName);
        if (rpcCallHandler == null) {
            throw new IllegalStateException(format("No method handler found for rpc method '%s'.", rpcMethodName));
        }
        return rpcCallHandler;
    }

    @SuppressWarnings("unchecked")
    private static Message invokeRpcMethod(RpcCallHandler handler, String rpcMethodArgument) {
        if (handler.getParameterClass() != VoidRpcArgument.class && rpcMethodArgument == null) {
            throw new IllegalArgumentException(format("%s empty method argument.", INVALID_RPC_CALL_ARG));
        }

        final Message rpcMethodCallResult;

        if (handler.getParameterClass() == VoidRpcArgument.class) {
            handler.handle(VoidRpcArgument.getDefaultInstance());

            rpcMethodCallResult = SuccessfulRpcCall.getDefaultInstance();
        } else {

            final byte[] bytes = ProtobufRequestReaderUtil.readData(rpcMethodArgument);

            Message messageArgument = null;
            try {
                messageArgument = (Message) handler.getParameterClass()
                        .getMethod(PROTOBUF_PARSE_FROM_METHOD_NAME, byte[].class).invoke(null, (Object) bytes);
            } catch (IllegalAccessException | InvocationTargetException | NoSuchMethodException e) {
                // TODO:2015-12-23:mikhail.mikhylov: Return error.
            }

            rpcMethodCallResult = handler.handle(messageArgument);
        }

        return rpcMethodCallResult;
    }

    @SuppressWarnings("TypeMayBeWeakened")
    private static void write(ServletResponse response, Message message) {
        final byte[] serializedMsg = message.toByteArray();

//        final String stringMessage = ProtobufRequestReaderUtil.writeData(serializedMsg);
        final String stringMessage = DatatypeConverter.printBase64Binary(serializedMsg);

        response.setContentType(PROTO_MIME_TYPE);
        response.setCharacterEncoding(null);

        final PrintWriter writer;
        try {
            writer = response.getWriter();
            writer.write(stringMessage);

            writer.flush();
            writer.close();
        } catch (IOException e) {
            getLog().error(e.getMessage(), e);
        }
    }

    private static Logger getLog() {
        return LogSingleton.INSTANCE.value;
    }

    private RpcService getRpcService(String rpcServiceName) {
        if (isNullOrEmpty(rpcServiceName)) {
            throw new IllegalArgumentException(format("%s empty service name.", INVALID_RPC_CALL_ARG));
        }
        final RpcService service = registeredServices.get(rpcServiceName);
        if (service == null) {
            throw new IllegalStateException(format("No service found for name '%s'.", rpcServiceName));
        }
        return service;
    }

    private static Logger log() {
        return LogSingleton.INSTANCE.value;
    }

    private enum LogSingleton {
        INSTANCE;
        @SuppressWarnings("NonSerializableFieldInSerializableClass")
        private final Logger value = LoggerFactory.getLogger(DispatcherServlet.class);
    }
}