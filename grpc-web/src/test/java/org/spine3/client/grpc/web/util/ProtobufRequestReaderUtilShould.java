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

import org.junit.Test;

import java.util.Arrays;

import static org.junit.Assert.*;
import static org.spine3.client.grpc.web.util.ProtobufRequestReaderUtil.*;

@SuppressWarnings("InstanceMethodNamingConvention")
public class ProtobufRequestReaderUtilShould {

    private static final String MESSAGE = "Conversion did not give expected " +
            "result. Expected %s, but got %s.";
    private static final String BYTE_STRING = "10,124,11,98";
    @SuppressWarnings("ImplicitNumericConversion")
    private static final byte[] BYTE_ARRAY = {10, 124, 11, 98};


    @Test
    public void return_valid_bytes() {
        final byte[] actualResult = readData(BYTE_STRING);

        assertTrue(String.format(MESSAGE, Arrays.toString(BYTE_ARRAY),
                Arrays.toString(actualResult)), Arrays.equals(BYTE_ARRAY, actualResult));
    }

    @Test
    public void return_valid_strings() {
        final String actualString = writeData(BYTE_ARRAY);
        assertEquals(String.format(MESSAGE, BYTE_STRING,
                actualString), BYTE_STRING, actualString);
    }

    @Test
    public void return_empty_bytes_for_empty_string() {
        assertEquals(readData(null).length, 0);
        assertEquals(readData("").length, 0);
        //noinspection ZeroLengthArrayAllocation
        assertEquals(writeData(new byte[0]), "");
        assertEquals(writeData(null), "");
    }

    @Test
    public void fail_on_illegal_argument() {
        try {
            readData("Illegal String");
            fail();
        } catch (IllegalArgumentException ignored) {
            // OK
        }
    }
}