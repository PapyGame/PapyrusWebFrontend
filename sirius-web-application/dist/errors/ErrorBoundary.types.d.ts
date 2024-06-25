/*******************************************************************************
 * Copyright (c) 2023 Obeo.
 * This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *     Obeo - initial API and implementation
 *******************************************************************************/
/// <reference types="react" />
export interface ErrorBoundaryProps {
    children?: React.ReactNode;
}
export interface ErrorBoundaryState {
    children?: React.ReactNode;
    error: Error | null;
}
//# sourceMappingURL=ErrorBoundary.types.d.ts.map