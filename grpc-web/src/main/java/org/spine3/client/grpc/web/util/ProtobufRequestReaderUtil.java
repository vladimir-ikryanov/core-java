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

package org.spine3.client.grpc.web.util;

@SuppressWarnings("UtilityClass")
public class ProtobufRequestReaderUtil {

    private static final byte[] EMPTY_BYTES = new byte[0];
    private static final String EMPTY_STRING = "";

    private ProtobufRequestReaderUtil() {
    }

    public static byte[] readData(String protobufString) {
        if (protobufString == null || protobufString.isEmpty()) {
            return EMPTY_BYTES;
        }
        final String[] splitArguments = protobufString.split(",");
        final byte[] bytes = new byte[splitArguments.length];
        try {
            for (int i = 0; i < bytes.length; i++) {
                final String argument = splitArguments[i];
                bytes[i] = Byte.valueOf(argument);
            }
        } catch (NumberFormatException ignored) {
            throw new IllegalArgumentException(String.format("Could not parse argument string: %s.", protobufString));
        }
        return bytes;
    }

    public static String writeData(byte[] protobufBytes) {
        if (protobufBytes == null || protobufBytes.length == 0) {
            return EMPTY_STRING;
        }

        @SuppressWarnings("StringBufferWithoutInitialCapacity")
        final StringBuilder builder = new StringBuilder();

        for (int i = 0; i < protobufBytes.length; i++) {
            builder.append(protobufBytes[i]);
            if (i < protobufBytes.length - 1) {
                builder.append(',');
            }
        }

        return builder.toString();
    }
}
