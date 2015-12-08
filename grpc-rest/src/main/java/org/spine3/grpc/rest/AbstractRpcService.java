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
package org.spine3.grpc.rest;

import com.google.protobuf.Message;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.ServletException;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.bind.DatatypeConverter;
import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.InvocationTargetException;

/**
 * Describes RPC service REST endpoint.
 * <p/>
 * Each RPC call is represented as {@link RpcCallHandler}. This handler should
 * be retrieved with {@link #getRpcCallHandler(String)} method by is's proto
 * name as an argument.
 * <p/>
 * All interactions with a service should be done
 * via {@link #doPost(HttpServletRequest, HttpServletResponse)} method.
 */
public abstract class AbstractRpcService extends HttpServlet {

    public static final String PROTO_MIME_TYPE = "application/x-protobuf";
    public static final String RPC_METHOD_ATTRIBUTE = "rpc_method_type";
    public static final String RPC_METHOD_ARGUMENT_ATTRIBUTE = "rpc_method_argument";

    private static final String PROTOBUF_PARSE_FROM_METHOD_NAME = "parseFrom";
    private static final long serialVersionUID = 2375951049753200060L;

    @SuppressWarnings({"RefusedBequest", "unchecked", "PrimitiveArrayArgumentToVariableArgMethod"})
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        final String rpcMethod = req.getParameter(RPC_METHOD_ATTRIBUTE);
        final String rpcMethodArgument = req.getParameter(RPC_METHOD_ARGUMENT_ATTRIBUTE);

        if (rpcMethod == null || rpcMethodArgument == null) {
            throw new IllegalArgumentException("Invalid RPC method call.");
        }

        final RpcCallHandler handler = getRpcCallHandler(rpcMethod);

        if (handler == null) {
            throw new IllegalArgumentException("Unknown RPC method call.");
        }

        final byte[] bytes = DatatypeConverter.parseBase64Binary(rpcMethodArgument);

        Message messageArgument = null;
        try {
            messageArgument = (Message) handler.getParameterClass()
                    .getMethod(PROTOBUF_PARSE_FROM_METHOD_NAME, byte[].class).invoke(null, bytes);
        } catch (IllegalAccessException | InvocationTargetException | NoSuchMethodException e) {
            // This should never happen
            e.printStackTrace();
        }

        @SuppressWarnings("unchecked")
        final Message rpcMethodCallResult = handler.handle(messageArgument);

        write(resp, rpcMethodCallResult);
    }

    protected abstract RpcCallHandler getRpcCallHandler(String method);

    @SuppressWarnings("TypeMayBeWeakened")
    private void write(ServletResponse response, Message message) {
        final byte[] serializedMsg = message.toByteArray();

        final String base64 = DatatypeConverter.printBase64Binary(serializedMsg);

        response.setContentType(PROTO_MIME_TYPE);
        response.setCharacterEncoding(null);

        final PrintWriter writer;
        try {
            writer = response.getWriter();
            writer.write(base64);

            writer.flush();
            writer.close();
        } catch (IOException e) {
            getLog().error(e.getMessage(), e);
        }
    }

    protected Logger getLog() {
        return LogSingleton.INSTANCE.value;
    }

    private enum LogSingleton {
        INSTANCE;

        @SuppressWarnings("NonSerializableFieldInSerializableClass")
        private final Logger value = LoggerFactory.getLogger(AbstractRpcService.class);
    }
}
