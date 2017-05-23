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

package org.spine3.server.entity.storage;

import com.google.protobuf.Any;
import org.spine3.annotation.Internal;
import org.spine3.base.Identifiers;
import org.spine3.client.AggregatingColumnFilter;
import org.spine3.client.AggregatingColumnFilter.AggregatingOperator;
import org.spine3.client.ColumnFilter;
import org.spine3.client.EntityFilters;
import org.spine3.client.EntityId;
import org.spine3.client.EntityIdFilter;
import org.spine3.server.entity.Entity;

import java.util.Collection;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;

import static com.google.common.base.Preconditions.checkNotNull;

/**
 * A utility class for working with {@link EntityQuery} instances.
 *
 * @author Dmytro Dashenkov
 * @see EntityQuery
 */
@Internal
public final class EntityQueries {

    private EntityQueries() {
        // Prevent utility class initialization
    }

    /**
     * Creates a new instance of {@link EntityQuery} from the given {@link EntityFilters} targeting
     * the given Entity class.
     *
     * @param entityFilters the filters for the Entities specifying the query predicate
     * @param entityClass   the Entity class specifying the query target
     * @return new instance of the {@code EntityQuery} with the specified attributes
     */
    public static <I> EntityQuery<I> from(EntityFilters entityFilters,
                                          Class<? extends Entity> entityClass) {
        checkNotNull(entityFilters);
        checkNotNull(entityClass);

        final QueryParameters queryParams = toQueryParams(entityFilters, entityClass);
        final Collection<I> ids = toGenericIdValues(entityFilters);

        final EntityQuery<I> result = EntityQuery.of(ids, queryParams);
        return result;
    }

    private static QueryParameters toQueryParams(EntityFilters entityFilters,
                                                 Class<? extends Entity> entityClass) {
        final QueryParameters.Builder builder = QueryParameters.newBuilder();

        for (AggregatingColumnFilter filter : entityFilters.getFilterList()) {
            final Map<Column, ColumnFilter> columnFilters = splitFilters(filter, entityClass);
            final AggregatingOperator operator = filter.getOperator();
            final AggregatingQueryParameter parameter =
                    new AggregatingQueryParameter(operator, columnFilters);
            builder.add(parameter);
        }
        return builder.build();
    }

    private static Map<Column, ColumnFilter> splitFilters(AggregatingColumnFilter filter,
                                                          Class<? extends Entity> entityClass) {
        final Map<Column, ColumnFilter> columnFilters = new HashMap<>(filter.getFilterCount());
        for (ColumnFilter columnFilter : filter.getFilterList()) {
            final Column column = Columns.findColumn(entityClass, columnFilter.getColumnName());
            columnFilters.put(column, columnFilter);
        }
        return columnFilters;
    }

    private static <I> Collection<I> toGenericIdValues(EntityFilters entityFilters) {
        final EntityIdFilter idFilter = entityFilters.getIdFilter();
        final Collection<I> ids = new LinkedList<>();
        for (EntityId entityId : idFilter.getIdsList()) {
            final Any wrappedMessageId = entityId.getId();
            @SuppressWarnings("unchecked") // Checked at runtime
            final I genericId = (I) Identifiers.idFromAny(wrappedMessageId);
            ids.add(genericId);
        }
        return ids;
    }
}
