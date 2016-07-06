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

package org.spine3.server.command;

import com.google.protobuf.Message;
import org.spine3.base.Command;
import org.spine3.base.CommandId;
import org.spine3.base.FailureThrowable;

import static org.spine3.base.Commands.formatCommandTypeAndId;
import static org.spine3.base.Commands.formatMessageTypeAndId;
import static org.spine3.server.command.CommandBus.log;

/**
 * Convenience wrapper for logging errors and warnings.
 */
/* package */ class ProblemLog {
    /* package */ void errorDispatching(Exception exception, Command command) {
        final String msg = formatCommandTypeAndId("Unable to dispatch command `%s` (ID: `%s`)", command);
        log().error(msg, exception);
    }

    /* package */ void errorHandling(Exception exception, Message commandMessage, CommandId commandId) {
        final String msg = formatMessageTypeAndId("Exception while handling command `%s` (ID: `%s`)",
                                                  commandMessage, commandId);
        log().error(msg, exception);
    }

    /* package */ void failureHandling(FailureThrowable flr, Message commandMessage, CommandId commandId) {
        final String msg = formatMessageTypeAndId("Business failure occurred when handling command `%s` (ID: `%s`)",
                                                  commandMessage, commandId);
        log().warn(msg, flr);
    }

    /* package */ void errorHandlingUnknown(Throwable throwable, Message commandMessage, CommandId commandId) {
        final String msg = formatMessageTypeAndId("Throwable encountered when handling command `%s` (ID: `%s`)",
                                                  commandMessage, commandId);
        log().error(msg, throwable);
    }

    /* package */ void errorExpiredCommand(Message commandMsg, CommandId id) {
        final String msg = formatMessageTypeAndId("Expired scheduled command `%s` (ID: `%s`).", commandMsg, id);
        log().error(msg);
    }
}