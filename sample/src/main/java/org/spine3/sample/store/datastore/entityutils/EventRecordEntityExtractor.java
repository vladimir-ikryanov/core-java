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

package org.spine3.sample.store.datastore.entityutils;

import com.google.appengine.api.datastore.Blob;
import com.google.appengine.api.datastore.Entity;
import com.google.protobuf.Any;
import com.google.protobuf.Message;
import com.google.protobuf.Timestamp;
import org.spine3.base.EventRecord;
import org.spine3.sample.store.datastore.DataStoreStorage;
import org.spine3.util.JsonFormat;
import org.spine3.util.Messages;

import static org.spine3.sample.store.datastore.DataStoreStorage.*;

/**
 * Extracts EventRecords' DataStore Entities from Protobuf Messages.
 *
 * @author Mikhail Mikhaylov
 */
public class EventRecordEntityExtractor extends BaseTypedEntityExtractor {

    public EventRecordEntityExtractor() {
        super(EventRecord.getDescriptor().getFullName());
    }

    @Override
    public Entity extract(Message message) {
        final EventRecord eventRecord = (EventRecord) message;
        final String id = JsonFormat.printToString(eventRecord.getContext().getEventId());
        final Message aggregateRootId = eventRecord.getContext().getAggregateId();
        final Timestamp timestamp = eventRecord.getContext().getEventId().getTimestamp();
        final int version = eventRecord.getContext().getVersion();

        final Entity entity = new Entity(getEntityKind(), id);

        final Any any = Messages.toAny(message);

        entity.setProperty(VALUE_KEY, new Blob(any.getValue().toByteArray()));
        entity.setProperty(TYPE_URL_KEY, getTypeUrl());
        entity.setProperty(AGGREGATE_ID_KEY, JsonFormat.printToString(aggregateRootId));
        entity.setProperty(TIMESTAMP_KEY, timestamp.getSeconds());
        entity.setProperty(TIMESTAMP_NANOS_KEY, timestamp.getNanos());
        entity.setProperty(VERSION_KEY, version);

        return entity;
    }
}
