/*
 * Copyright 2016, TeamDev Ltd. All rights reserved.
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

package org.spine3.protobuf;

import com.google.common.collect.BiMap;
import com.google.common.collect.ImmutableBiMap;
import com.google.common.collect.ImmutableSet;
import com.google.protobuf.Any;
import com.google.protobuf.BoolValue;
import com.google.protobuf.BytesValue;
import com.google.protobuf.DoubleValue;
import com.google.protobuf.Duration;
import com.google.protobuf.EnumValue;
import com.google.protobuf.FloatValue;
import com.google.protobuf.Int32Value;
import com.google.protobuf.Int64Value;
import com.google.protobuf.ListValue;
import com.google.protobuf.Message;
import com.google.protobuf.StringValue;
import com.google.protobuf.Timestamp;
import com.google.protobuf.UInt32Value;
import com.google.protobuf.UInt64Value;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.spine3.Internal;
import org.spine3.protobuf.error.UnknownTypeException;
import org.spine3.type.ClassName;
import org.spine3.type.TypeName;

import java.util.Properties;
import java.util.Set;

import static org.spine3.io.IoUtil.loadAllProperties;

/**
 * A utility class for reading real proto class names from properties file.
 *
 * @author Mikhail Mikhaylov
 * @author Alexander Yevsyukov
 * @author Alexander Litus
 */
@Internal
public class TypeToClassMap {

    private static final char CLASS_PACKAGE_DELIMITER = '.';

    /**
     * File, containing Protobuf messages' typeUrls and their appropriate class names.
     *
     * <p>Is generated by Gradle during build process.
     */
    private static final String PROPS_FILE_PATH = "proto_to_java_class.properties";

    /**
     * A map from Protobuf type name to a Java class name.
     *
     * <p>For example, for a key {@code spine.base.EventId}, there will be the value {@code org.spine3.base.EventId}.
     */
    private static final BiMap<TypeName, ClassName> biMap = Builder.build();


    private TypeToClassMap() {}

    /**
     * Retrieves Protobuf types known to the application.
     *
     * @return immutable set of Protobuf types known to the application
     */
    public static ImmutableSet<TypeName> knownTypes() {
        final Set<TypeName> result = biMap.keySet();
        return ImmutableSet.copyOf(result);
    }

    /**
     * Retrieves compiled proto's java class name by proto type url
     * to be used to parse {@link Message} from {@link Any}.
     *
     * @param protoType {@link Any} type url
     * @return Java class name
     * @throws UnknownTypeException if there is no such type known to the application
     */
    public static ClassName get(TypeName protoType) throws UnknownTypeException {
        if (!biMap.containsKey(protoType)) {
            final ClassName className = findInnerMessageClass(protoType);
            biMap.put(protoType, className);
        }
        final ClassName result = biMap.get(protoType);
        return result;
    }

    /**
     * Returns the Protobuf name for the class with the given name.
     *
     * @param className the name of the Java class for which to get Protobuf type
     * @return a Protobuf type name
     * @throws IllegalStateException if there is no Protobuf type for the specified class
     */
    public static TypeName get(ClassName className) {
        final TypeName result = biMap.inverse().get(className);
        if (result == null) {
            throw new IllegalStateException("No Protobuf type found for the Java class " + className);
        }
        return result;
    }

    /**
     * Attempts to find a {@link ClassName} for the passed inner Protobuf type.
     *
     * <p>For example, com.package.OuterClass.InnerClass class name.
     *
     * @param type {@link TypeName} of the class to find
     * @return the found class name
     * @throws UnknownTypeException if there is no such type known to the application
     */
    private static ClassName findInnerMessageClass(TypeName type) throws UnknownTypeException {
        String lookupType = type.value();
        ClassName className = null;
        final StringBuilder suffix = new StringBuilder(lookupType.length());
        int lastDotPosition = lookupType.lastIndexOf(CLASS_PACKAGE_DELIMITER);
        while (className == null && lastDotPosition != -1) {
            suffix.insert(0, lookupType.substring(lastDotPosition));
            lookupType = lookupType.substring(0, lastDotPosition);
            final TypeName typeName = TypeName.of(lookupType);
            className = biMap.get(typeName);
            lastDotPosition = lookupType.lastIndexOf(CLASS_PACKAGE_DELIMITER);
        }
        if (className == null) {
            throw new UnknownTypeException(type.value());
        }
        className = ClassName.of(className.value() + suffix);
        try {
            Class.forName(className.value());
        } catch (ClassNotFoundException e) {
            //noinspection ThrowInsideCatchBlockWhichIgnoresCaughtException
            throw new UnknownTypeException(type.value(), e);
        }
        return className;
    }

    /**
     * The helper class for building internal immutable type-to-class map.
     */
    private static class Builder {

        private final ImmutableBiMap.Builder<TypeName, ClassName> mapBuilder = new ImmutableBiMap.Builder<>();

        private static BiMap<TypeName, ClassName> build() {
            final Builder builder = new Builder()
                    .addStandardProtobufTypes()
                    .loadNamesFromProperties();

            final ImmutableBiMap<TypeName, ClassName> result = builder.mapBuilder.build();

            if (log().isDebugEnabled()) {
                log().debug("Total classes in TypeToClassMap: " + result.size());
            }

            return result;
        }

        private Builder loadNamesFromProperties() {
            final Set<Properties> propertiesSet = loadAllProperties(PROPS_FILE_PATH);
            for (Properties properties : propertiesSet) {
                putProperties(properties);
            }
            return this;
        }

        private Builder putProperties(Properties properties) {
            final Set<String> typeNames = properties.stringPropertyNames();
            for (String name : typeNames) {
                final TypeName typeName = TypeName.of(name);
                final ClassName className = ClassName.of(properties.getProperty(name));
                mapBuilder.put(typeName, className);
            }
            return this;
        }

        /**
         * Returns classes from the {@code com.google.protobuf} package that need to be present
         * in the type-to-class map.
         *
         * <p>This method needs to be updated with introduction of new Google Protobuf types
         * after they are used in the framework.
         */
        private Builder addStandardProtobufTypes() {
            mapBuilder
                    .put(TypeName.of(ListValue.getDescriptor()), ClassName.of(ListValue.class))
                    .put(TypeName.of(Int64Value.getDescriptor()), ClassName.of(Int64Value.class))
                    .put(TypeName.of(Int32Value.getDescriptor()), ClassName.of(Int32Value.class))
                    .put(TypeName.of(UInt64Value.getDescriptor()), ClassName.of(UInt64Value.class))
                    .put(TypeName.of(UInt32Value.getDescriptor()), ClassName.of(UInt32Value.class))
                    .put(TypeName.of(BytesValue.getDescriptor()), ClassName.of(BytesValue.class))
                    .put(TypeName.of(StringValue.getDescriptor()), ClassName.of(StringValue.class))
                    .put(TypeName.of(DoubleValue.getDescriptor()), ClassName.of(DoubleValue.class))
                    .put(TypeName.of(BoolValue.getDescriptor()), ClassName.of(BoolValue.class))
                    .put(TypeName.of(EnumValue.getDescriptor()), ClassName.of(EnumValue.class))
                    .put(TypeName.of(FloatValue.getDescriptor()), ClassName.of(FloatValue.class))
                    .put(TypeName.of(Duration.getDescriptor()), ClassName.of(Duration.class))
                    .put(TypeName.of(Any.getDescriptor()), ClassName.of(Any.class))
                    .put(TypeName.of(Timestamp.getDescriptor()), ClassName.of(Timestamp.class));
            return this;
        }

        private static Logger log() {
            return LogSingleton.INSTANCE.value;
        }

        private enum LogSingleton {
            INSTANCE;
            @SuppressWarnings("NonSerializableFieldInSerializableClass")
            private final Logger value = LoggerFactory.getLogger(TypeToClassMap.class);
        }
    }
}
