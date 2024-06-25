/*******************************************************************************
 * Copyright (c) 2023, 2024 Obeo.
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
import { ExtensionRegistry } from '@eclipse-sirius/sirius-components-core';
import { Theme } from '@material-ui/core/styles';
import { ReactNode } from 'react';
export interface SiriusWebApplicationProps {
    httpOrigin: string;
    wsOrigin: string;
    extensionRegistry?: ExtensionRegistry;
    theme?: Theme;
    children?: ReactNode;
}
//# sourceMappingURL=SiriusWebApplication.types.d.ts.map