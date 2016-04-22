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

package org.spine3.server.aggregate;

import org.junit.Before;
import org.junit.Test;
import org.spine3.base.CommandContext;
import org.spine3.base.Event;
import org.spine3.server.BoundedContext;
import org.spine3.server.BoundedContextTestStubs;
import org.spine3.server.command.Assign;
import org.spine3.server.storage.StorageFactory;
import org.spine3.server.storage.memory.InMemoryStorageFactory;
import org.spine3.server.type.CommandClass;
import org.spine3.test.project.Project;
import org.spine3.test.project.ProjectId;
import org.spine3.test.project.command.AddTask;
import org.spine3.test.project.command.CreateProject;
import org.spine3.test.project.event.ProjectCreated;
import org.spine3.test.project.event.TaskAdded;
import org.spine3.testdata.TestContextFactory;

import java.util.List;
import java.util.Set;

import static com.google.common.collect.Lists.newArrayList;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.spine3.base.Events.createEvent;
import static org.spine3.testdata.TestAggregateIdFactory.newProjectId;
import static org.spine3.testdata.TestEventMessageFactory.projectCreatedEvent;
import static org.spine3.testdata.TestEventMessageFactory.taskAddedEvent;
import static org.spine3.validate.Validate.isDefault;
import static org.spine3.validate.Validate.isNotDefault;

@SuppressWarnings("InstanceMethodNamingConvention")
public class AggregateRepositoryShould {

    private AggregateRepository<ProjectId, ProjectAggregate> repository;

    @Before
    public void setUp() {
        final StorageFactory storageFactory = InMemoryStorageFactory.getInstance();
        final BoundedContext boundedContext = BoundedContextTestStubs.create(storageFactory);
        repository = new ProjectAggregateRepository(boundedContext);
        repository.initStorage(storageFactory);
    }

    @Test
    public void return_default_aggregate_instance_if_no_aggregate_found() {
        final ProjectAggregate aggregate = repository.load(newProjectId());
        final Project state = aggregate.getState();

        assertTrue(isDefault(state));
    }

    @Test
    public void store_and_load_aggregate() {
        final ProjectId id = newProjectId();
        final ProjectAggregate expected = new ProjectAggregate(id);
        repository.store(expected);

        final ProjectAggregate actual = repository.load(id);

        final Project expectedState = expected.getState();
        assertTrue(isNotDefault(expectedState));
        final Project actualState = actual.getState();
        assertTrue(isNotDefault(actualState));
        assertEquals(expectedState, actualState);
        assertEquals(expected.getId(), actual.getId());
    }

    @Test
    public void return_aggregate_class() {
        assertEquals(ProjectAggregate.class, repository.getAggregateClass());
    }

    @Test
    public void have_default_value_for_snapshot_trigger() {
        assertEquals(AggregateRepository.DEFAULT_SNAPSHOT_TRIGGER, repository.getSnapshotTrigger());
    }

    @Test(expected = IllegalArgumentException.class)
    public void do_not_accept_negative_snapshot_trigger() {
        repository.setSnapshotTrigger(-1);
    }

    @Test(expected = IllegalArgumentException.class)
    public void do_not_accept_zero_snapshot_trigger() {
        repository.setSnapshotTrigger(0);
    }

    @Test
    public void allow_to_change_snapshot_trigger() {
        final int newSnapshotTrigger = 1000;
        repository.setSnapshotTrigger(newSnapshotTrigger);
        assertEquals(newSnapshotTrigger, repository.getSnapshotTrigger());
    }

    @Test
    public void expose_classes_of_commands_of_its_aggregate() {
        final Set<CommandClass> aggregateCommands = CommandClass.setOf(Aggregate.getCommandClasses(ProjectAggregate.class));
        final Set<CommandClass> exposedByRepository = repository.getCommandClasses();

        assertTrue(exposedByRepository.containsAll(aggregateCommands));
    }

    private static class ProjectAggregateRepository extends AggregateRepository<ProjectId, ProjectAggregate> {
        private ProjectAggregateRepository(BoundedContext boundedContext) {
            super(boundedContext);
        }
    }

    private static class ProjectAggregate extends Aggregate<ProjectId, Project, Project.Builder> {

        public ProjectAggregate(ProjectId id) {
            super(id);
            final Project expectedState = Project.newBuilder()
                                                 .setProjectId(id)
                                                 .build();
            incrementStateForTest(expectedState);
        }

        @Assign
        public ProjectCreated handle(CreateProject cmd, CommandContext ctx) {
            return projectCreatedEvent(cmd.getProjectId());
        }

        @Assign
        public TaskAdded handle(AddTask cmd, CommandContext ctx) {
            return taskAddedEvent(cmd.getProjectId());
        }

        @Apply
        private void apply(ProjectCreated event) {
            getBuilder().setProjectId(event.getProjectId());
        }

        @Apply
        private void apply(TaskAdded event) {
            getBuilder()
                    .setProjectId(event.getProjectId())
                    .addTask(event.getTask());
        }

        @Override
        @SuppressWarnings("RefusedBequest")
        /* package */ List<Event> getUncommittedEvents() {
            final ProjectCreated msg = projectCreatedEvent(getId());
            final Event event = createEvent(msg, TestContextFactory.createEventContext());
            final List<Event> events = newArrayList(event);
            return events;
        }
    }

    //TODO:2016-01-21:alexander.yevsyukov: Cover more.
}
