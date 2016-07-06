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

package org.spine3.server.event.enrich;

import com.google.common.base.Optional;
import com.google.common.collect.ImmutableList;
import com.google.common.collect.ImmutableMultimap;
import com.google.protobuf.Internal;
import com.google.protobuf.Message;
import org.spine3.annotations.EventAnnotationsProto;
import org.spine3.protobuf.Messages;

import javax.annotation.Nullable;
import java.util.List;

import static com.google.protobuf.Descriptors.Descriptor;
import static com.google.protobuf.Descriptors.FieldDescriptor;
import static java.lang.String.format;

/**
 * Performs validation checking that all fields annotated in the enrichment message
 * can be initialized with the translation functions supplied in the parent enricher.
 *
 * @author Alexander Yevsyukov
 */
/* package */ class ReferenceValidator {

    private static final String PROTO_FQN_SEPARATOR = ".";

    private final EventEnricher enricher;
    private final Descriptor eventDescriptor;
    private final Descriptor enrichmentDescriptor;

    @Nullable
    private ImmutableMultimap<FieldDescriptor, FieldDescriptor> sourceToTargetMap;

    /* package */ ReferenceValidator(EventEnricher enricher,
            Class<? extends Message> eventClass,
            Class<? extends Message> enrichmentClass) {
        this.enricher = enricher;
        this.eventDescriptor = Internal.getDefaultInstance(eventClass)
                                       .getDescriptorForType();
        this.enrichmentDescriptor = Internal.getDefaultInstance(enrichmentClass)
                                            .getDescriptorForType();
    }

    @Nullable
    /* package */ ImmutableMultimap<FieldDescriptor, FieldDescriptor> fieldMap() {
        return sourceToTargetMap;
    }

    /**
     * @throws IllegalStateException if the parent {@code Enricher} does not have a function for a field enrichment
     */
    /* package */ List<EnrichmentFunction<?, ?>> validate() {
        final ImmutableList.Builder<EnrichmentFunction<?, ?>> functions = ImmutableList.builder();
        final ImmutableMultimap.Builder<FieldDescriptor, FieldDescriptor> fields = ImmutableMultimap.builder();
        for (FieldDescriptor enrichmentField : enrichmentDescriptor.getFields()) {
            final String eventFieldName = parseEventFieldName(enrichmentField);
            checkEventFieldName(eventFieldName, enrichmentField);
            final FieldDescriptor eventField = findEventField(eventFieldName, enrichmentField);
            final EnrichmentFunction<?, ?> function = getEnrichmentFunction(eventField, enrichmentField);
            functions.add(function);
            fields.put(eventField, enrichmentField);
        }
        this.sourceToTargetMap = fields.build();
        return functions.build();
    }

    /**
     * Returns an event field name or an empty string if there is no {@code by} option.
     */
    private static String parseEventFieldName(FieldDescriptor enrichmentField) {
        String fieldName = enrichmentField.getOptions().getExtension(EventAnnotationsProto.by);
        if (fieldName.contains(PROTO_FQN_SEPARATOR)) {
            final int firstCharIndex = fieldName.lastIndexOf(PROTO_FQN_SEPARATOR) + 1;
            fieldName = fieldName.substring(firstCharIndex);
        }
        return fieldName;
    }

    private FieldDescriptor findEventField(String eventFieldName, FieldDescriptor enrichmentField) {
        final FieldDescriptor result = eventDescriptor.findFieldByName(eventFieldName);
        if (result == null) {
            throw noEventField(eventFieldName, enrichmentField);
        }
        return result;
    }

    private EnrichmentFunction<?, ?> getEnrichmentFunction(FieldDescriptor srcField, FieldDescriptor targetField) {
        final Class<?> sourceFieldClass = Messages.getFieldClass(srcField);
        final Class<?> targetFieldClass = Messages.getFieldClass(targetField);
        final Optional<EnrichmentFunction<?, ?>> func = enricher.functionFor(sourceFieldClass, targetFieldClass);
        if (!func.isPresent()) {
            throw noFunction(sourceFieldClass, targetFieldClass);
        }
        return func.get();
    }

    private static void checkEventFieldName(String eventFieldName, FieldDescriptor enrichmentField) {
        if (eventFieldName.isEmpty()) {
            final String msg = format("There is no `by` option for the enrichment field `%s`",
                                      enrichmentField.getFullName());
            throw new IllegalStateException(msg);
        }
    }

    private IllegalStateException noEventField(String eventFieldName, FieldDescriptor enrichmentField) {
        final String msg = format(
                "No field `%s` in the message `%s` found. " +
                "The field is referenced in the option of the enrichment field `%s`.",
                eventFieldName,
                eventDescriptor.getFullName(),
                enrichmentField.getFullName());
        throw new IllegalStateException(msg);
    }

    private static IllegalStateException noFunction(Class<?> sourceFieldClass, Class<?> targetFieldClass) {
        final String msg = format(
                "There is no enrichment function for translating %s to %s",
                sourceFieldClass,
                targetFieldClass);
        throw new IllegalStateException(msg);
    }
}