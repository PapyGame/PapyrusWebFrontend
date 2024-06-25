/*******************************************************************************
 * Copyright (c) 2021, 2023 Obeo.
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
import { Representation } from '@eclipse-sirius/sirius-components-core';
import { GQLGetProjectQueryData, Project } from './EditProjectView.types';
export interface EditProjectViewStateSchema {
    states: {
        toast: {
            states: {
                visible: {};
                hidden: {};
            };
        };
        editProjectView: {
            states: {
                loading: {};
                loaded: {};
                missing: {};
            };
        };
    };
}
export type SchemaValue = {
    toast: 'visible' | 'hidden';
    editProjectView: 'loading' | 'loaded' | 'missing';
};
export interface EditProjectViewContext {
    project: Project | null;
    representation: Representation | null;
    message: string | null;
}
export type ShowToastEvent = {
    type: 'SHOW_TOAST';
    message: string;
};
export type HideToastEvent = {
    type: 'HIDE_TOAST';
};
export type HandleFetchedProjectEvent = {
    type: 'HANDLE_FETCHED_PROJECT';
    data: GQLGetProjectQueryData;
};
export type SelectRepresentationEvent = {
    type: 'SELECT_REPRESENTATION';
    representation: Representation;
};
export type EditProjectViewEvent = HandleFetchedProjectEvent | SelectRepresentationEvent | ShowToastEvent | HideToastEvent;
export declare const editProjectViewMachine: import("xstate").StateMachine<EditProjectViewContext, EditProjectViewStateSchema, EditProjectViewEvent, any, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, EditProjectViewEvent, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
//# sourceMappingURL=EditProjectViewMachine.d.ts.map