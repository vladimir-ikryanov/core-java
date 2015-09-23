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

package org.spine3.sample.server;

import org.spine3.base.CommandRequest;
import org.spine3.base.EventRecord;
import org.spine3.server.MessageJournal;
import org.spine3.server.aggregate.SnapshotStorage;

/**
 * This class provides factory methods for creating in-memory-storages.
 */
@SuppressWarnings("UtilityClass")
public class InMemoryStorageFactory {

    private InMemoryStorageFactory() {}

    /**
     * Creates new instance of the event store.
     *
     * @return new storage instance
     */
    public static MessageJournal<String, EventRecord> createEventStoreStorage() {
        return InMemoryMessageJournal.newInstance(EventRecord.class);
    }

    /**
     * Creates new command store.
     *
     * @return new storage instance
     */
    public static MessageJournal<String, CommandRequest> createCommandStoreStorage() {
        return InMemoryMessageJournal.newInstance(CommandRequest.class);
    }

    /**
     * Creates new snapshot storage.
     *
     * @return new storage instance
     */
    public static SnapshotStorage createSnapshotStorage() {
        return new InMemorySnapshotStorage();
    }
}