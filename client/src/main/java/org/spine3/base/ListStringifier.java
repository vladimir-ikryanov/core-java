/*
 * Copyright 2017, TeamDev Ltd. All rights reserved.
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

package org.spine3.base;

import java.util.List;
import java.util.regex.Pattern;

import static com.google.common.collect.Lists.newArrayList;

/**
 * The stringifier for the {@code List} classes.
 *
 * <p> The stringifier for the type of the elements in the list
 * should be registered in the {@code StringifierRegistry} class
 * for the correct usage of the {@code ListStringifier}.
 *
 * <h3>Example</h3>
 *
 * {@code
 *    // Stringifier creation.
 *    final Stringifier<List<Integer>> listStringifier = Stringifiers.listStringifier();
 *
 *    // The registration of the stringifier.
 *    final Stringifier<List<Integer>> listStringifer = Stringifiers.listStringifier();
 *    final Type type = TypeToken<List<Integer>>(){}.getType();
 *    StringifierRegistry.getInstance().register(listStringifier, type);
 *
 *    // Obtain already registered stringifier.
 *    final Stringifier<List<Integer>> listStringifier = StringifierRegistry.getInstance()
 *                                                                          .getStringifier(type);
 *
 *    // Convert to string.
 *    final List<Integer> listToConvert = newArrayList(1, 2, 3);
 *
 *    // The result is: "1\,2\,3".
 *    final String convertedString = listStringifer.toString(listToConvert);
 *
 *    // Convert from string.
 *    final String stringToConvert = ...
 *    final List<Integer> convertedList = listStringifier.fromString(stringToConvert);
 * }
 *
 * @param <T> the type of the elements in the list.
 */
class ListStringifier<T> extends Stringifier<List<T>> {

    private static final char DEFAULT_ELEMENT_DELIMITER = ',';
    private static final String ESCAPE_SEQUENCE = "\\";

    private final Class<T> listGenericClass;

    /**
     * The delimiter for the passed elements in the {@code String} representation,
     * {@code DEFAULT_ELEMENT_DELIMITER} by default.
     */
    private final String delimiter;

    /**
     * That constructor should be used when a custom delimiter is not needed.
     *
     * <p>The {@code DEFAULT_ELEMENT_DELIMITER} will be used.
     *
     * @param listGenericClass the class of the list elements
     */
    ListStringifier(Class<T> listGenericClass) {
        super();
        this.delimiter = ESCAPE_SEQUENCE + DEFAULT_ELEMENT_DELIMITER;
        this.listGenericClass = listGenericClass;
    }

    /**
     * That constructor should be used for providing a custom
     * delimiter of the elements during conversion.
     *
     * @param listGenericClass the class of the list elements
     * @param delimiter        the delimiter for the passed elements via string
     */
    ListStringifier(Class<T> listGenericClass, String delimiter) {
        super();
        this.listGenericClass = listGenericClass;
        this.delimiter = ESCAPE_SEQUENCE + delimiter;
    }

    @Override
    protected String toString(List<T> list) {
        final String result = list.toString();
        return result;
    }

    @Override
    protected List<T> fromString(String s) {
        final String[] elements = s.split(Pattern.quote(delimiter));

        final List<T> result = newArrayList();
        for (String element : elements) {
            final T convertedValue = Stringifiers.convert(element, listGenericClass);
            result.add(convertedValue);
        }
        return result;
    }
}
