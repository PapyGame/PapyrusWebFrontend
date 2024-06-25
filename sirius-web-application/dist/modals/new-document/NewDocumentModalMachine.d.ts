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
import { GQLCreateDocumentMutationData, GQLGetStereotypeDescriptionsQueryData, StereotypeDescription } from './NewDocumentModal.types';
export interface NewDocumentModalStateSchema {
    states: {
        toast: {
            states: {
                visible: {};
                hidden: {};
            };
        };
        newDocumentModal: {
            states: {
                loading: {};
                invalid: {};
                valid: {};
                creatingDocument: {};
                success: {};
            };
        };
    };
}
export type SchemaValue = {
    newDocumentModal: 'loading' | 'invalid' | 'valid' | 'creatingDocument' | 'success';
    toast: 'visible' | 'hidden';
};
export interface NewDocumentModalContext {
    name: string;
    nameMessage: string;
    nameIsInvalid: boolean;
    selectedStereotypeDescriptionId: string;
    stereotypeDescriptions: StereotypeDescription[];
    message: string | null;
}
export type ShowToastEvent = {
    type: 'SHOW_TOAST';
    message: string;
};
export type HideToastEvent = {
    type: 'HIDE_TOAST';
};
export type FetchedStereotypeDescriptionsEvent = {
    type: 'HANDLE_FETCHED_STEREOTYPE_DESCRIPTIONS';
    data: GQLGetStereotypeDescriptionsQueryData;
};
export type ChangeNameEvent = {
    type: 'CHANGE_NAME';
    name: string;
};
export type ChangeStereotypeDescriptionEvent = {
    type: 'CHANGE_STEREOTYPE_DESCRIPTION';
    stereotypeDescriptionId: string;
};
export type CreateDocumentEvent = {
    type: 'CREATE_DOCUMENT';
};
export type HandleResponseEvent = {
    type: 'HANDLE_RESPONSE';
    data: GQLCreateDocumentMutationData;
};
export type NewDocumentModalEvent = FetchedStereotypeDescriptionsEvent | ChangeNameEvent | ChangeStereotypeDescriptionEvent | CreateDocumentEvent | HandleResponseEvent | ShowToastEvent | HideToastEvent;
export declare const newDocumentModalMachine: import("xstate").StateMachine<NewDocumentModalContext, NewDocumentModalStateSchema, NewDocumentModalEvent, any, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, NewDocumentModalEvent, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
//# sourceMappingURL=NewDocumentModalMachine.d.ts.map