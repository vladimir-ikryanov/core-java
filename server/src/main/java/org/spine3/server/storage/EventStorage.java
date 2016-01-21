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

package org.spine3.server.storage;

import com.google.common.base.Predicate;
import com.google.common.base.Predicates;
import com.google.protobuf.Timestamp;
import org.spine3.SPI;
import org.spine3.base.EventId;
import org.spine3.base.EventRecord;
import org.spine3.server.stream.EventRecordFilter;
import org.spine3.server.stream.EventStore;
import org.spine3.server.stream.EventStreamQuery;

import javax.annotation.Nullable;
import java.util.Iterator;

import static org.spine3.server.storage.StorageUtil.toEventRecord;
import static org.spine3.server.storage.StorageUtil.toEventStorageRecord;
import static org.spine3.server.util.EventRecords.*;

/**
 * A storage used by {@link EventStore} for keeping event data.
 *
 * @author Alexander Yevsyukov
 */
@SPI
public abstract class EventStorage extends AbstractStorage<EventId, EventRecord> {

    @Override
    public void write(EventRecord record) {
        final EventStorageRecord storeRecord = toEventStorageRecord(record);
        writeInternal(storeRecord);
    }

    @Nullable
    @Override
    public EventRecord read(EventId id) {
        final EventStorageRecord storeRecord = readInternal(id);

        if (storeRecord == null) {
            return null;
        }

        final EventRecord result = toEventRecord(storeRecord);
        return result;
    }

    /**
     * Returns iterator through event records matching the passed query.
     *
     * @param query a filtering query
     * @return iterator instance
     */
    public abstract Iterator<EventRecord> iterator(EventStreamQuery query);

    /**
     * Writes storage format record into the storage.
     *
     * @param record the record to write
     */
    protected abstract void writeInternal(EventStorageRecord record);

    /**
     * Reads storage format record.
     * @param eventId the ID of the event to read
     * @return the record instance of null if there's not record with such ID
     */
    @Nullable
    protected abstract EventStorageRecord readInternal(EventId eventId);

    public static class MatchesStreamQuery implements Predicate<EventRecord> {

        private final EventStreamQuery query;
        private final Predicate<EventRecord> timePredicate;

        @SuppressWarnings({"MethodWithMoreThanThreeNegations", "IfMayBeConditional"})
        public MatchesStreamQuery(EventStreamQuery query) {
            this.query = query;

            final Timestamp after = query.getAfter();
            final Timestamp before = query.getBefore();

            final boolean afterSpecified = query.hasAfter();
            final boolean beforeSpecified = query.hasBefore();

            //noinspection IfStatementWithTooManyBranches
            if (afterSpecified && !beforeSpecified) {
                this.timePredicate = new IsAfter(after);
            } else if (!afterSpecified && beforeSpecified) {
                this.timePredicate = new IsBefore(before);
            } else if (afterSpecified /* && beforeSpecified is true here too */){
                this.timePredicate = new IsBetween(after, before);
            } else { // No timestamps specified.
                this.timePredicate = Predicates.alwaysTrue();
            }
        }

        @Override
        public boolean apply(@Nullable EventRecord input) {
            if (!timePredicate.apply(input)) {
                return false;
            }

            for (EventRecordFilter filter : query.getFilterList()) {
                final Predicate<EventRecord> filterPredicate = new MatchesFilter(filter);
                if (!filterPredicate.apply(input)) {
                    return false;
                }
            }
            return true;
        }
    }
}
