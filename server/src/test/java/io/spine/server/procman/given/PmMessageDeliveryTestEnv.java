/*
 * Copyright 2018, TeamDev Ltd. All rights reserved.
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
package io.spine.server.procman.given;

import com.google.common.collect.ImmutableSet;
import com.google.protobuf.Message;
import com.google.protobuf.StringValue;
import io.spine.base.Identifier;
import io.spine.client.TestActorRequestFactory;
import io.spine.core.Command;
import io.spine.core.Event;
import io.spine.core.React;
import io.spine.core.Rejection;
import io.spine.core.RejectionContext;
import io.spine.protobuf.AnyPacker;
import io.spine.server.aggregate.given.AggregateMessageDeliveryTestEnv;
import io.spine.server.command.Assign;
import io.spine.server.command.TestEventFactory;
import io.spine.server.delivery.ShardingStrategy;
import io.spine.server.delivery.UniformAcrossTargets;
import io.spine.server.delivery.given.ThreadStats;
import io.spine.server.procman.ProcessManager;
import io.spine.server.procman.ProcessManagerRepository;
import io.spine.server.route.RejectionRoute;
import io.spine.test.procman.ProjectId;
import io.spine.test.procman.command.PmCreateProject;
import io.spine.test.procman.command.PmStartProject;
import io.spine.test.procman.event.PmProjectCreated;
import io.spine.test.procman.event.PmProjectStarted;
import io.spine.test.procman.rejection.Rejections.PmCannotStartArchivedProject;
import io.spine.validate.StringValueVBuilder;

import java.util.List;
import java.util.Set;

import static io.spine.core.Rejections.toRejection;
import static java.util.Collections.emptyList;

/**
 * @author Alex Tymchenko
 */
public class PmMessageDeliveryTestEnv {

    /** Prevents instantiation of this test environment class. */
    private PmMessageDeliveryTestEnv() {
    }

    public static Command createProject() {
        final ProjectId projectId = projectId();
        final Command command = createCommand(PmCreateProject.newBuilder()
                                                             .setProjectId(projectId)
                                                             .build());
        return command;
    }

    public static Event projectStarted() {
        final ProjectId projectId = projectId();
        final TestEventFactory eventFactory =
                TestEventFactory.newInstance(
                        AnyPacker.pack(projectId),
                        PmMessageDeliveryTestEnv.class
                );

        final PmProjectStarted msg = PmProjectStarted.newBuilder()
                                                     .setProjectId(projectId)
                                                     .build();

        final Event result = eventFactory.createEvent(msg);
        return result;
    }

    private static ProjectId projectId() {
        return ProjectId.newBuilder()
                        .setId(Identifier.newUuid())
                        .build();
    }

    public static Rejection cannotStartProject() {
        final ProjectId projectId = projectId();

        final PmStartProject cmdMessage = PmStartProject.newBuilder()
                                                        .setProjectId(projectId)
                                                        .build();
        final Command command = createCommand(cmdMessage);
        final Rejection result = toRejection(throwableWith(projectId), command);
        return result;
    }

    private static io.spine.test.procman.rejection.PmCannotStartArchivedProject
    throwableWith(ProjectId projectId) {
        return new io.spine.test.procman.rejection.PmCannotStartArchivedProject(projectId);
    }

    private static Command createCommand(Message cmdMessage) {
        final Command result =
                TestActorRequestFactory.newInstance(AggregateMessageDeliveryTestEnv.class)
                                       .createCommand(cmdMessage);
        return result;
    }

    public static RejectionRoute<ProjectId, Message> routeByProjectId() {
        return new RejectionRoute<ProjectId, Message>() {

            private static final long serialVersionUID = 1L;

            @Override
            public Set<ProjectId> apply(Message raw, RejectionContext context) {
                final PmCannotStartArchivedProject msg = (PmCannotStartArchivedProject) raw;
                return ImmutableSet.of(msg.getProjectId());
            }
        };
    }

    /**
     * A process manager class, which remembers the threads in which its handler methods
     * were invoked.
     *
     * <p>Message handlers are invoked via reflection, so some of them are considered unused.
     *
     * <p>The handler method parameters are not used, as they aren't needed for tests.
     * They are still present, as long as they are required according to the handler
     * declaration rules.
     */
    @SuppressWarnings("unused")
    public static class DeliveryPm
            extends ProcessManager<ProjectId, StringValue, StringValueVBuilder> {

        private static final ThreadStats<ProjectId> stats = new ThreadStats<>();

        protected DeliveryPm(ProjectId id) {
            super(id);
        }

        @Assign
        PmProjectCreated on(PmCreateProject command) {
            stats.recordCallingThread(command.getProjectId());
            return PmProjectCreated.newBuilder()
                                   .setProjectId(command.getProjectId())
                                   .build();
        }

        @React
        List<Message> on(PmProjectStarted event) {
            stats.recordCallingThread(getId());
            return emptyList();
        }

        @React
        List<Message> on(PmCannotStartArchivedProject rejection) {
            stats.recordCallingThread(getId());
            return emptyList();
        }

        public static ThreadStats<ProjectId> getStats() {
            return stats;
        }
    }

    public static class SingleShardPmRepository
            extends ProcessManagerRepository<ProjectId, DeliveryPm, StringValue> {
        public SingleShardPmRepository() {
            getRejectionRouting().replaceDefault(routeByProjectId());
        }

    }

    public static class QuadrupleShardPmRepository
            extends ProcessManagerRepository<ProjectId, DeliveryPm, StringValue> {

        public QuadrupleShardPmRepository() {
            getRejectionRouting().replaceDefault(routeByProjectId());
        }

        @Override
        public ShardingStrategy getShardingStrategy() {
            return UniformAcrossTargets.forNumber(4);
        }
    }
}
