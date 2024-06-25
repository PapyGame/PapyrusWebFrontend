/*******************************************************************************
 * Copyright (c) 2022, 2023 Obeo.
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
import { GQLUploadImageMutationData } from './UploadImageModal.types';
export interface UploadImageModalStateSchema {
    states: {
        toast: {
            states: {
                visible: {};
                hidden: {};
            };
        };
        uploadImageModal: {
            states: {
                pristine: {};
                imageSelected: {};
                uploadingImage: {};
                success: {};
            };
        };
    };
}
export type SchemaValue = {
    toast: 'visible' | 'hidden';
    uploadImageModal: 'pristine' | 'imageSelected' | 'uploadingImage' | 'success';
};
export interface UploadImageModalContext {
    file: File;
    message: string;
}
export type ShowToastEvent = {
    type: 'SHOW_TOAST';
    message: string;
};
export type HideToastEvent = {
    type: 'HIDE_TOAST';
};
export type SelectImageEvent = {
    type: 'SELECT_IMAGE';
    file: File;
};
export type RequestImageUploadingEvent = {
    type: 'REQUEST_IMAGE_UPLOADING';
};
export type HandleResponseEvent = {
    type: 'HANDLE_RESPONSE';
    data: GQLUploadImageMutationData;
};
export type UploadImageModalEvent = ShowToastEvent | HideToastEvent | SelectImageEvent | HandleResponseEvent | RequestImageUploadingEvent;
export declare const uploadImageModalMachine: import("xstate").StateMachine<UploadImageModalContext, UploadImageModalStateSchema, UploadImageModalEvent, any, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, UploadImageModalEvent, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
//# sourceMappingURL=UploadImageModalMachine.d.ts.map