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

package io.spine.server.model;

import com.google.common.testing.NullPointerTester;
import org.junit.Test;

import java.lang.reflect.Method;

import static io.spine.server.model.MethodAccessChecker.forMethod;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.spy;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

/**
 * @author Dmytro Kuzmin
 */
public class MethodAccessCheckerShould {

    public static final String STUB_WARNING_MESSAGE = "Stub warning message";

    @Test
    public void pass_null_check() {
        new NullPointerTester().testAllPublicStaticMethods(MethodAccessChecker.class);

        final Method method = getMethod("publicMethod");
        final MethodAccessChecker checker = forMethod(method);
        new NullPointerTester().testAllPublicInstanceMethods(checker);
    }

    @Test
    public void do_not_log_warning_on_correct_access_modifier() {
        final Method publicMethod = getMethod("publicMethod");
        final MethodAccessChecker checkerPublic = spy(forMethod(publicMethod));
        checkerPublic.checkPublic(STUB_WARNING_MESSAGE);
        verify(checkerPublic, never()).warnOnWrongModifier(STUB_WARNING_MESSAGE);

        final Method packagePrivateMethod = getMethod("packagePrivateMethod");
        final MethodAccessChecker checkerPackagePrivate = spy(forMethod(packagePrivateMethod));
        checkerPackagePrivate.checkPackagePrivate(STUB_WARNING_MESSAGE);
        verify(checkerPackagePrivate, never()).warnOnWrongModifier(STUB_WARNING_MESSAGE);

        final Method privateMethod = getMethod("privateMethod");
        final MethodAccessChecker checkerPrivate = spy(forMethod(privateMethod));
        checkerPrivate.checkPrivate(STUB_WARNING_MESSAGE);
        verify(checkerPrivate, never()).warnOnWrongModifier(STUB_WARNING_MESSAGE);
    }

    @Test
    public void log_warning_on_incorrect_access_modifier() {
        final Method method = getMethod("protectedMethod");
        final MethodAccessChecker checker = spy(forMethod(method));
        checker.checkPublic(STUB_WARNING_MESSAGE);
        checker.checkPackagePrivate(STUB_WARNING_MESSAGE);
        checker.checkPrivate(STUB_WARNING_MESSAGE);
        verify(checker, times(3)).warnOnWrongModifier(STUB_WARNING_MESSAGE);
    }

    private static Method getMethod(String methodName) {
        final Method method;
        final Class<?> clazz = StubMethodContainer.class;
        try {
            method = clazz.getDeclaredMethod(methodName);
        } catch (NoSuchMethodException e) {
            throw new IllegalStateException(e);
        }
        return method;
    }

    private static class StubMethodContainer {

        @SuppressWarnings("unused") // Reflective access.
        public void publicMethod() {
        }

        @SuppressWarnings("unused") // Reflective access.
        protected void protectedMethod() {
        }

        @SuppressWarnings("unused")
            // Reflective access.
        void packagePrivateMethod() {
        }

        @SuppressWarnings("unused") // Reflective access.
        private void privateMethod() {
        }
    }
}
