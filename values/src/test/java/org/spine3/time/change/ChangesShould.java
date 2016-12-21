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

package org.spine3.time.change;

import org.junit.Test;
import com.google.protobuf.Timestamp;
import org.spine3.protobuf.Timestamps;
import org.spine3.time.Interval;
import org.spine3.time.Intervals;
import org.spine3.time.LocalDate;
import org.spine3.time.LocalDates;
import org.spine3.time.LocalTime;
import org.spine3.time.LocalTimes;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.spine3.test.Tests.hasPrivateUtilityConstructor;

@SuppressWarnings({"ConstantConditions" /* We pass `null` to some of the methods to check handling of preconditions */,
        "ResultOfMethodCallIgnored" /* ...when methods throw exceptions */,
        "ClassWithTooManyMethods", "OverlyCoupledClass" /* we test many data types and utility methods */})
public class ChangesShould {

    @Test
    public void have_private_constructor() {
        assertTrue(hasPrivateUtilityConstructor(Changes.class));
    }

    @Test(expected = NullPointerException.class)
    public void do_not_accept_null_Interval_previousValue() {
        final Timestamp fourMinutesAgo = Timestamps.minutesAgo(4);
        final Timestamp now = Timestamps.getCurrentTime();
        final Interval fourMinutes = Intervals.between(fourMinutesAgo, now);
        Changes.of(null, fourMinutes);
    }

    @Test(expected = NullPointerException.class)
    public void do_not_accept_null_Interval_newValue() {
        final Timestamp fourMinutesAgo = Timestamps.minutesAgo(4);
        final Timestamp now = Timestamps.getCurrentTime();
        final Interval fourMinutes = Intervals.between(fourMinutesAgo, now);
        Changes.of(fourMinutes, null);
    }

    @Test(expected = IllegalArgumentException.class)
    public void do_not_accept_equal_Interval_values() {
        final Timestamp fourMinutesAgo = Timestamps.minutesAgo(4);
        final Timestamp now = Timestamps.getCurrentTime();
        final Interval fourMinutes = Intervals.between(now, fourMinutesAgo);
        Changes.of(fourMinutes, fourMinutes);
    }

    @Test
    public void create_IntervalChange_instance() {
        final Timestamp fiveMinutesAgo = Timestamps.minutesAgo(5);
        final Timestamp fourMinutesAgo = Timestamps.minutesAgo(4);
        final Timestamp now = Timestamps.getCurrentTime();
        final Interval fourMinutes = Intervals.between(fourMinutesAgo, now);
        final Interval fiveMinutes = Intervals.between(fiveMinutesAgo, now);

        final IntervalChange result = Changes.of(fourMinutes, fiveMinutes);

        assertEquals(fourMinutes, result.getPreviousValue());
        assertEquals(fiveMinutes, result.getNewValue());
    }

    @Test(expected = NullPointerException.class)
    public void do_not_accept_null_LocalDate_previousValue() {
        final LocalDate today = LocalDates.today();
        Changes.of(null, today);
    }

    @Test(expected = NullPointerException.class)
    public void do_not_accept_null_LocalDate_newValue() {
        final LocalDate today = LocalDates.today();
        Changes.of(today, null);
    }

    @Test(expected = IllegalArgumentException.class)
    public void do_not_accept_equal_LocalDate_values() {
        final LocalDate today = LocalDates.today();
        Changes.of(today, today);
    }

    @Test
    public void create_LocalDateChange_instance() {
        final LocalDate today = LocalDates.today();
        final LocalDate tomorrow = LocalDates.plusDays(1);

        final LocalDateChange result = Changes.of(today, tomorrow);

        assertEquals(today, result.getPreviousValue());
        assertEquals(tomorrow, result.getNewValue());
    }

    @Test(expected = NullPointerException.class)
    public void do_not_accept_null_LocalTime_previousValue() {
        final LocalTime now = LocalTimes.now();
        Changes.of(null, now);
    }

    @Test(expected = NullPointerException.class)
    public void do_not_accept_null_LocalTime_newValue() {
        final LocalTime now = LocalTimes.now();
        Changes.of(now, null);
    }

    @Test(expected = IllegalArgumentException.class)
    public void do_not_accept_equal_LocalTime_values() {
        final LocalTime now = LocalTimes.now();
        Changes.of(now, now);
    }

    @Test
    public void create_LocalTimeChange_instance() {
        final LocalTime now = LocalTimes.now();
        final LocalTime inFiveHours = LocalTimes.plusHours(5);

        final LocalTimeChange result = Changes.of(now, inFiveHours);

        assertEquals(now, result.getPreviousValue());
        assertEquals(inFiveHours, result.getNewValue());
    }
}