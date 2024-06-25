/*******************************************************************************
 * Copyright (c) 2024 Obeo.
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
import { DataExtensionPoint } from '@eclipse-sirius/sirius-components-core';
import { ApolloClientOptionsConfigurer, CacheOptionsConfigurer, HttpOptionsConfigurer, WebSocketOptionsConfigurer } from './useCreateApolloClient.types';
export declare const httpOptionsConfigurersExtensionPoint: DataExtensionPoint<Array<HttpOptionsConfigurer>>;
export declare const webSocketOptionsConfigurersExtensionPoint: DataExtensionPoint<Array<WebSocketOptionsConfigurer>>;
export declare const cacheOptionsConfigurersExtensionPoint: DataExtensionPoint<Array<CacheOptionsConfigurer>>;
export declare const apolloClientOptionsConfigurersExtensionPoint: DataExtensionPoint<Array<ApolloClientOptionsConfigurer>>;
//# sourceMappingURL=useCreateApolloClientExtensionPoints.d.ts.map