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

package io.spine.server.tenant;

import com.google.protobuf.Timestamp;
import io.spine.core.TenantId;
import io.spine.time.Time;

/**
 * Default implementation of {code TenantRepository} that stores timestamps
 * of tenant ID registration.
 *
 * @author Alexander Yevsyukov
 * @author Dmytro Dashenkov
 */
final class DefaultTenantRepository extends TenantRepository<Tenant,
                                                             DefaultTenantRepository.Entity> {

    /**
     * The default tenant entity.
     *
     * <p>Represents a timestamp of when was the tenant added.
     */
    public static class Entity extends TenantRepository.Entity<Tenant> {

        protected Entity(TenantId id) {
            super(id);
        }

        @Override
        public Tenant getDefaultState() {
            final Timestamp timestamp = Time.getCurrentTime();
            final Tenant defaultState = Tenant.newBuilder()
                                              .setId(getId())
                                              .setTimestamp(timestamp)
                                              .build();
            return defaultState;
        }
    }
}
