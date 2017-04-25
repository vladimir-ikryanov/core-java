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

package org.spine3.server.commandbus;

import com.google.common.annotations.VisibleForTesting;
import com.google.protobuf.Duration;
import com.google.protobuf.Empty;
import com.google.protobuf.Message;
import com.google.protobuf.Timestamp;
import org.spine3.base.Command;
import org.spine3.base.CommandContext;
import org.spine3.base.CommandId;
import org.spine3.base.Error;
import org.spine3.envelope.CommandEnvelope;
import org.spine3.server.commandstore.CommandStore;
import org.spine3.server.tenant.TenantAwareFunction0;
import org.spine3.server.tenant.TenantAwareOperation;
import org.spine3.time.Interval;
import org.spine3.users.TenantId;

import java.util.Iterator;
import java.util.Set;

import static com.google.protobuf.util.Timestamps.add;
import static org.spine3.base.CommandStatus.SCHEDULED;
import static org.spine3.server.commandbus.CommandExpiredException.commandExpiredError;
import static org.spine3.server.commandbus.CommandScheduler.setSchedule;
import static org.spine3.time.Intervals.between;
import static org.spine3.time.Intervals.toDuration;
import static org.spine3.time.Time.getCurrentTime;
import static org.spine3.time.Timestamps2.isLaterThan;

/**
 * Helper class for rescheduling commands.
 *
 * @author Alexander Yevsyukov
 */
class Rescheduler {

    private final CommandBus commandBus;

    Rescheduler(CommandBus commandBus) {
        this.commandBus = commandBus;
    }

    void rescheduleCommands() {
        final Runnable reschedulingAction = new Runnable() {
            @Override
            public void run() {
                doRescheduleCommands();
            }
        };

        if (commandBus.isThreadSpawnAllowed()) {
            final Thread thread = new Thread(reschedulingAction, "CommandBus-rescheduleCommands");
            thread.start();
        } else {
            reschedulingAction.run();
        }
    }

    private CommandStore commandStore() {
        return commandBus.commandStore();
    }

    private CommandScheduler scheduler() {
        return commandBus.scheduler();
    }

    private Log log() {
        return commandBus.problemLog();
    }

    @VisibleForTesting
    private void doRescheduleCommands() {
        final Set<TenantId> tenants = commandStore().getTenantIndex()
                                                    .getAll();
        for (TenantId tenantId : tenants) {
            rescheduleForTenant(tenantId);
        }
    }

    private void rescheduleForTenant(final TenantId tenantId) {
        final TenantAwareFunction0<Iterator<Command>> func =
                new TenantAwareFunction0<Iterator<Command>>(tenantId) {
                    @Override
                    public Iterator<Command> apply() {
                        return commandStore().iterator(SCHEDULED);
                    }
                };

        final Iterator<Command> commands = func.execute(Empty.getDefaultInstance());

        final TenantAwareOperation op = new TenantAwareOperation(tenantId) {
            @Override
            public void run() {
                while (commands.hasNext()) {
                    final Command command = commands.next();
                    reschedule(command);
                }
            }
        };
        op.execute();
    }

    private void reschedule(Command command) {
        final Timestamp now = getCurrentTime();
        final Timestamp timeToPost = getTimeToPost(command);
        if (isLaterThan(now, /*than*/ timeToPost)) {
            onScheduledCommandExpired(command);
        } else {
            final Interval interval = between(now, timeToPost);
            final Duration newDelay = toDuration(interval);
            final Command updatedCommand = setSchedule(command, newDelay, now);
            scheduler().schedule(updatedCommand);
        }
    }

    private static Timestamp getTimeToPost(Command command) {
        final CommandContext.Schedule schedule = command.getContext()
                                                        .getSchedule();
        final Timestamp timeToPost = add(schedule.getSchedulingTime(), schedule.getDelay());
        return timeToPost;
    }

    /**
     * Sets the status of the expired command to error.
     *
     * <p>We cannot post such a command because there is no handler or dispatcher registered yet.
     * Or, posting such a command may be undesirable from the business logic point of view.
     *
     * @param command the expired command
     * @see CommandExpiredException
     */
    private void onScheduledCommandExpired(Command command) {
        final CommandEnvelope commandEnvelope = CommandEnvelope.of(command);
        final Message msg = commandEnvelope.getMessage();
        final CommandId id = commandEnvelope.getCommandId();

        final Error error = commandExpiredError(msg);
        commandStore().setToError(commandEnvelope, error);
        log().errorExpiredCommand(msg, id);
    }
}
