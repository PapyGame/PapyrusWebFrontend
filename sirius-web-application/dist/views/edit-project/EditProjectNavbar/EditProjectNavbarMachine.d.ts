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
import { SubscriptionResult } from '@apollo/client';
import { GQLProjectEventSubscription } from './EditProjectNavbar.types';
export interface EditProjectNavbarStateSchema {
    states: {
        toast: {
            states: {
                visible: {};
                hidden: {};
            };
        };
        navbar: {
            states: {
                empty: {};
                contextualMenuDisplayedState: {};
                modalDisplayedState: {};
                redirectState: {};
                complete: {};
            };
        };
    };
}
export type SchemaValue = {
    toast: 'visible' | 'hidden';
    navbar: 'empty' | 'contextualMenuDisplayedState' | 'modalDisplayedState' | 'redirectState' | 'complete';
};
export interface EditProjectNavbarContext {
    id: string;
    to: string | null;
    modalDisplayed: string | null;
    projectMenuAnchor: (EventTarget & HTMLElement) | null;
    projectName: string;
    message: string | null;
}
export type HandleShowContextMenuEvent = {
    type: 'HANDLE_SHOW_CONTEXT_MENU_EVENT';
    projectMenuAnchor: EventTarget & HTMLElement;
};
export type HandleCloseContextMenuEvent = {
    type: 'HANDLE_CLOSE_CONTEXT_MENU_EVENT';
};
export type HandleShowModalEvent = {
    type: 'HANDLE_SHOW_MODAL_EVENT';
    modalName: string;
};
export type HandleCloseModalEvent = {
    type: 'HANDLE_CLOSE_MODAL_EVENT';
};
export type HandleRedirectingEvent = {
    type: 'HANDLE_REDIRECTING_EVENT';
    to: string;
};
export type HandleSubscriptionResultEvent = {
    type: 'HANDLE_SUBSCRIPTION_RESULT';
    result: SubscriptionResult<GQLProjectEventSubscription>;
};
export type HandleCompleteEvent = {
    type: 'HANDLE_COMPLETE';
};
export type ShowToastEvent = {
    type: 'SHOW_TOAST';
    message: string;
};
export type HideToastEvent = {
    type: 'HIDE_TOAST';
};
export type EditProjectNavbarEvent = HandleShowContextMenuEvent | HandleCloseContextMenuEvent | HandleShowModalEvent | HandleCloseModalEvent | HandleRedirectingEvent | HandleSubscriptionResultEvent | HandleCompleteEvent | ShowToastEvent | HideToastEvent;
export declare const editProjectNavbarMachine: import("xstate").StateMachine<EditProjectNavbarContext, EditProjectNavbarStateSchema, EditProjectNavbarEvent, any, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, EditProjectNavbarEvent, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
//# sourceMappingURL=EditProjectNavbarMachine.d.ts.map