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
import { ChildCreationDescription, Domain, GQLCreateRootObjectMutationData, GQLGetRootDomainsQueryData, GQLGetRootObjectCreationDescriptionsQueryData } from './NewRootObjectModal.types';
export interface NewRootObjectModalStateSchema {
    states: {
        toast: {
            states: {
                visible: {};
                hidden: {};
            };
        };
        newRootObjectModal: {
            states: {
                loadingDomains: {};
                loadingRootObjectCreationDescriptions: {};
                valid: {};
                creatingRootObject: {};
                success: {};
            };
        };
    };
}
export type SchemaValue = {
    newRootObjectModal: 'loadingDomains' | 'loadingRootObjectCreationDescriptions' | 'valid' | 'creatingRootObject' | 'success';
    toast: 'visible' | 'hidden';
};
export interface NewRootObjectModalContext {
    domains: Domain[];
    selectedDomainId: string;
    rootObjectCreationDescriptions: ChildCreationDescription[];
    selectedRootObjectCreationDescriptionId: string;
    suggestedRootObject: boolean;
    objectToSelect: SelectionEntry | null;
    message: string | null;
}
export type ShowToastEvent = {
    type: 'SHOW_TOAST';
    message: string;
};
export type HideToastEvent = {
    type: 'HIDE_TOAST';
};
export type FetchedDomainsEvent = {
    type: 'HANDLE_FETCHED_DOMAINS';
    data: GQLGetRootDomainsQueryData;
};
export type FetchedRootObjectCreationDescriptionsEvent = {
    type: 'HANDLE_FETCHED_ROOT_OBJECT_CREATION_DESCRIPTIONS';
    data: GQLGetRootObjectCreationDescriptionsQueryData;
};
export type ChangeDomainEvent = {
    type: 'CHANGE_DOMAIN';
    domainId: string;
};
export type ChangeRootObjectCreationDescriptionEvent = {
    type: 'CHANGE_ROOT_OBJECT_CREATION_DESCRIPTION';
    rootObjectCreationDescriptionId: string;
};
export type ChangeSuggestedEvent = {
    type: 'CHANGE_SUGGESTED';
    suggestedRootObject: boolean;
};
export type CreateRootObjectEvent = {
    type: 'CREATE_ROOT_OBJECT';
};
export type HandleResponseEvent = {
    type: 'HANDLE_RESPONSE';
    data: GQLCreateRootObjectMutationData;
};
export type NewRootObjectModalEvent = FetchedDomainsEvent | FetchedRootObjectCreationDescriptionsEvent | ChangeDomainEvent | ChangeRootObjectCreationDescriptionEvent | ChangeSuggestedEvent | CreateRootObjectEvent | HandleResponseEvent | ShowToastEvent | HideToastEvent;
export declare const newRootObjectModalMachine: import("xstate").StateMachine<NewRootObjectModalContext, NewRootObjectModalStateSchema, NewRootObjectModalEvent, any, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, NewRootObjectModalEvent, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
//# sourceMappingURL=NewRootObjectModalMachine.d.ts.map