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
import { SelectionEntry } from '@eclipse-sirius/sirius-components-core';
import { ChildCreationDescription, GQLCreateChildMutationData, GQLGetChildCreationDescriptionsQueryData } from './NewObjectModal.types';
export interface NewObjectModalStateSchema {
    states: {
        newObjectModal: {
            states: {
                loading: {};
                valid: {};
                creatingChild: {};
                success: {};
            };
        };
    };
}
export type SchemaValue = {
    newObjectModal: 'loading' | 'valid' | 'creatingChild' | 'success';
};
export interface NewObjectModalContext {
    selectedChildCreationDescriptionId: string;
    childCreationDescriptions: ChildCreationDescription[];
    objectToSelect: SelectionEntry | null;
}
export type FetchedChildCreationDescriptionsEvent = {
    type: 'HANDLE_FETCHED_CHILD_CREATION_DESCRIPTIONS';
    data: GQLGetChildCreationDescriptionsQueryData;
};
export type ChangeChildCreationDescriptionEvent = {
    type: 'CHANGE_CHILD_CREATION_DESCRIPTION';
    childCreationDescriptionId: string;
};
export type CreateChildEvent = {
    type: 'CREATE_CHILD';
};
export type HandleResponseEvent = {
    type: 'HANDLE_RESPONSE';
    data: GQLCreateChildMutationData;
};
export type NewObjectModalEvent = FetchedChildCreationDescriptionsEvent | ChangeChildCreationDescriptionEvent | CreateChildEvent | HandleResponseEvent;
export declare const newObjectModalMachine: import("xstate").StateMachine<NewObjectModalContext, NewObjectModalStateSchema, NewObjectModalEvent, any, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, NewObjectModalEvent, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
//# sourceMappingURL=NewObjectModalMachine.d.ts.map