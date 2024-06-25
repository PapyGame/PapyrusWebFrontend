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
import { GQLUploadDocumentMutationData } from './UploadDocumentModal.types';
export interface UploadDocumentModalStateSchema {
    states: {
        toast: {
            states: {
                visible: {};
                hidden: {};
            };
        };
        uploadDocumentModal: {
            states: {
                pristine: {};
                documentSelected: {};
                uploadingDocument: {};
                success: {};
            };
        };
    };
}
export type SchemaValue = {
    toast: 'visible' | 'hidden';
    uploadDocumentModal: 'pristine' | 'documentSelected' | 'uploadingDocument' | 'success';
};
export interface UploadDocumentModalContext {
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
export type SelectDocumentEvent = {
    type: 'SELECT_DOCUMENT';
    file: File;
};
export type RequestDocumentUploadingEvent = {
    type: 'REQUEST_DOCUMENT_UPLOADING';
};
export type HandleResponseEvent = {
    type: 'HANDLE_RESPONSE';
    data: GQLUploadDocumentMutationData;
};
export type UploadDocumentModalEvent = ShowToastEvent | HideToastEvent | SelectDocumentEvent | HandleResponseEvent | RequestDocumentUploadingEvent;
export declare const uploadDocumentModalMachine: import("xstate").StateMachine<UploadDocumentModalContext, UploadDocumentModalStateSchema, UploadDocumentModalEvent, any, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, UploadDocumentModalEvent, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
//# sourceMappingURL=UploadDocumentModalMachine.d.ts.map