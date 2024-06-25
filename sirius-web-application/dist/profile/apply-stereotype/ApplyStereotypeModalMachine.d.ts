/*******************************************************************************
 * Copyright (c) 2021, 2022 Obeo.
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
import { GQLApplyStereotypeMutationData, GQLGetStereotypesQueryData, GQLStereotypeMetadata } from './ApplyStereotypeModal.types';
export interface ApplyStereotypeModalStateSchema {
    states: {
        toast: {
            states: {
                visible: {};
                hidden: {};
            };
        };
        applyStereotypeModal: {
            states: {
                loading: {};
                valid: {};
                applyingStereotype: {};
                success: {};
            };
        };
    };
}
export type SchemaValue = {
    applyStereotypeModal: 'loading' | 'valid' | 'applyingStereotype' | 'success';
    toast: 'visible' | 'hidden';
};
export interface ApplyStereotypeModalContext {
    selectedStereotypeId: string;
    stereotypes: GQLStereotypeMetadata[];
    message: string | null;
}
export type ShowToastEvent = {
    type: 'SHOW_TOAST';
    message: string;
};
export type HideToastEvent = {
    type: 'HIDE_TOAST';
};
export type FetchedStereotypesEvent = {
    type: 'HANDLE_FETCHED_STEREOTYPES';
    data: GQLGetStereotypesQueryData;
};
export type ChangeStereotypeEvent = {
    type: 'CHANGE_STEREOTYPE';
    stereotypeId: string;
};
export type ApplyStereotypeEvent = {
    type: 'APPLY_STEREOTYPE';
};
export type HandleResponseEvent = {
    type: 'HANDLE_RESPONSE';
    data: GQLApplyStereotypeMutationData;
};
export type ApplyStereotypeModalEvent = FetchedStereotypesEvent | ChangeStereotypeEvent | ApplyStereotypeEvent | HandleResponseEvent | ShowToastEvent | HideToastEvent;
export declare const applyStereotypeModalMachine: import("xstate").StateMachine<ApplyStereotypeModalContext, ApplyStereotypeModalStateSchema, ApplyStereotypeModalEvent, any, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, ApplyStereotypeModalEvent, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
//# sourceMappingURL=ApplyStereotypeModalMachine.d.ts.map