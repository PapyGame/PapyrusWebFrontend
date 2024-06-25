/*******************************************************************************
 * Copyright (c) 2021 Obeo.
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
import { GQLApplyProfileMutationData, GQLGetProfilesQueryData, Profile } from './ApplyProfileModal.types';
export interface ApplyProfileModalStateSchema {
    states: {
        toast: {
            states: {
                visible: {};
                hidden: {};
            };
        };
        applyProfileModal: {
            states: {
                loading: {};
                valid: {};
                applyingProfile: {};
                success: {};
            };
        };
    };
}
export type SchemaValue = {
    applyProfileModal: 'loading' | 'valid' | 'applyingProfile' | 'success';
    toast: 'visible' | 'hidden';
};
export interface ApplyProfileModalContext {
    selectedProfileId: string;
    profiles: Profile[];
    message: string | null;
}
export type ShowToastEvent = {
    type: 'SHOW_TOAST';
    message: string;
};
export type HideToastEvent = {
    type: 'HIDE_TOAST';
};
export type FetchedProfilesEvent = {
    type: 'HANDLE_FETCHED_PROFILES';
    data: GQLGetProfilesQueryData;
};
export type ChangeProfileEvent = {
    type: 'CHANGE_PROFILE';
    profileId: string;
};
export type ApplyProfileEvent = {
    type: 'APPLY_PROFILE';
};
export type HandleResponseEvent = {
    type: 'HANDLE_RESPONSE';
    data: GQLApplyProfileMutationData;
};
export type ApplyProfileModalEvent = FetchedProfilesEvent | ChangeProfileEvent | ApplyProfileEvent | HandleResponseEvent | ShowToastEvent | HideToastEvent;
export declare const applyProfileModalMachine: import("xstate").StateMachine<ApplyProfileModalContext, ApplyProfileModalStateSchema, ApplyProfileModalEvent, any, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, ApplyProfileModalEvent, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
//# sourceMappingURL=ApplyProfileModalMachine.d.ts.map