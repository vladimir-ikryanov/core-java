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
package io.spine.server.procman;

import io.spine.core.Ack;
import io.spine.core.Command;
import io.spine.core.Event;
import io.spine.core.Rejection;
import io.spine.grpc.StreamObservers;
import io.spine.server.BoundedContext;
import io.spine.server.delivery.AbstractMessageDeliveryShould;
import io.spine.server.delivery.given.ParallelDispatcher;
import io.spine.server.delivery.given.ThreadStats;
import io.spine.server.procman.given.PmMessageDeliveryTestEnv.DeliveryPm;
import io.spine.server.procman.given.PmMessageDeliveryTestEnv.QuadrupleShardPmRepository;
import io.spine.server.procman.given.PmMessageDeliveryTestEnv.SingleShardPmRepository;
import io.spine.server.transport.memory.InMemoryTransportFactory;
import io.spine.server.transport.memory.SynchronousInMemTransportFactory;
import io.spine.test.procman.ProjectId;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static io.spine.server.delivery.given.MessageDeliveryTestEnv.dispatchWaitTime;
import static io.spine.server.delivery.given.MessageDeliveryTestEnv.setShardingTransport;
import static io.spine.server.model.ModelTests.clearModel;
import static io.spine.server.procman.given.PmMessageDeliveryTestEnv.cannotStartProject;
import static io.spine.server.procman.given.PmMessageDeliveryTestEnv.createProject;
import static io.spine.server.procman.given.PmMessageDeliveryTestEnv.projectStarted;

/**
 * @author Alex Tymchenko
 */
public class PmMessageDeliveryShould extends AbstractMessageDeliveryShould {

    @Override
    @Before
    public void setUp() {
        super.setUp();
        DeliveryPm.getStats()
                  .clear();
    }

    @Test
    public void dispatch_commands_to_single_shard_in_multithreaded_env() throws Exception {
        final ParallelDispatcher<ProjectId, Command> dispatcher =
                new ParallelDispatcher<ProjectId, Command>(
                        42, 400, dispatchWaitTime()) {
                    @Override
                    protected ThreadStats<ProjectId> getStats() {
                        return DeliveryPm.getStats();
                    }

                    @Override
                    protected Command newMessage() {
                        return createProject();
                    }

                    @Override
                    protected void postToBus(BoundedContext context, Command command) {
                        context.getCommandBus()
                               .post(command, StreamObservers.<Ack>noOpObserver());
                    }
                };

        dispatcher.dispatchMessagesTo(new SingleShardPmRepository());
    }

    @Test
    public void dispatch_events_to_single_shard_in_multithreaded_env() throws Exception {
        final ParallelDispatcher<ProjectId, Event> dispatcher =
                new ParallelDispatcher<ProjectId, Event>(
                        180, 819, dispatchWaitTime()) {
                    @Override
                    protected ThreadStats<ProjectId> getStats() {
                        return DeliveryPm.getStats();
                    }

                    @Override
                    protected Event newMessage() {
                        return projectStarted();
                    }

                    @Override
                    protected void postToBus(BoundedContext context, Event event) {
                        context.getEventBus()
                               .post(event, StreamObservers.<Ack>noOpObserver());
                    }
                };

        dispatcher.dispatchMessagesTo(new SingleShardPmRepository());
    }

    @Test
    public void dispatch_rejections_to_single_shard_in_multithreaded_env() throws Exception {
        final ParallelDispatcher<ProjectId, Rejection> dispatcher =
                new ParallelDispatcher<ProjectId, Rejection>(
                        30, 619, dispatchWaitTime()) {
                    @Override
                    protected ThreadStats<ProjectId> getStats() {
                        return DeliveryPm.getStats();
                    }

                    @Override
                    protected Rejection newMessage() {
                        return cannotStartProject();
                    }

                    @Override
                    protected void postToBus(BoundedContext context, Rejection rejection) {
                        context.getRejectionBus()
                               .post(rejection, StreamObservers.<Ack>noOpObserver());
                    }
                };

        dispatcher.dispatchMessagesTo(new SingleShardPmRepository());
    }

    @Test
    public void dispatch_commands_to_several_shard_in_multithreaded_env() throws Exception {
        final ParallelDispatcher<ProjectId, Command> dispatcher =
                new ParallelDispatcher<ProjectId, Command>(
                        59, 473, dispatchWaitTime()) {
                    @Override
                    protected ThreadStats<ProjectId> getStats() {
                        return DeliveryPm.getStats();
                    }

                    @Override
                    protected Command newMessage() {
                        return createProject();
                    }

                    @Override
                    protected void postToBus(BoundedContext context, Command command) {
                        context.getCommandBus()
                               .post(command, StreamObservers.<Ack>noOpObserver());
                    }
                };

        dispatcher.dispatchMessagesTo(new QuadrupleShardPmRepository());
    }

    @Test
    public void dispatch_events_to_several_shards_in_multithreaded_env() throws Exception {
        final ParallelDispatcher<ProjectId, Event> dispatcher =
                new ParallelDispatcher<ProjectId, Event>(
                        179, 918, dispatchWaitTime()) {
                    @Override
                    protected ThreadStats<ProjectId> getStats() {
                        return DeliveryPm.getStats();
                    }

                    @Override
                    protected Event newMessage() {
                        return projectStarted();
                    }

                    @Override
                    protected void postToBus(BoundedContext context, Event event) {
                        context.getEventBus()
                               .post(event, StreamObservers.<Ack>noOpObserver());
                    }
                };

        dispatcher.dispatchMessagesTo(new QuadrupleShardPmRepository());
    }

    @Test
    public void dispatch_rejections_to_several_shards_in_multithreaded_env() throws Exception {
        final ParallelDispatcher<ProjectId, Rejection> dispatcher =
                new ParallelDispatcher<ProjectId, Rejection>(
                        43, 719, dispatchWaitTime()) {
                    @Override
                    protected ThreadStats<ProjectId> getStats() {
                        return DeliveryPm.getStats();
                    }

                    @Override
                    protected Rejection newMessage() {
                        return cannotStartProject();
                    }

                    @Override
                    protected void postToBus(BoundedContext context, Rejection rejection) {
                        context.getRejectionBus()
                               .post(rejection, StreamObservers.<Ack>noOpObserver());
                    }
                };

        dispatcher.dispatchMessagesTo(new QuadrupleShardPmRepository());
    }
}
