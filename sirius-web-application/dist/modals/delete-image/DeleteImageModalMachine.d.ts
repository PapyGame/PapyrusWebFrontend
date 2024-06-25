import { GQLDeleteImageMutationData } from './DeleteImageModal.types';
export interface DeleteImageModalStateSchema {
    states: {
        toast: {
            states: {
                visible: {};
                hidden: {};
            };
        };
        deleteImageModal: {
            states: {
                idle: {};
                deletingImage: {};
                success: {};
            };
        };
    };
}
export type SchemaValue = {
    toast: 'visible' | 'hidden';
    deleteImageModal: 'idle' | 'deletingImage' | 'success';
};
export interface DeleteImageModalContext {
    message: string;
}
export type ShowToastEvent = {
    type: 'SHOW_TOAST';
    message: string;
};
export type HideToastEvent = {
    type: 'HIDE_TOAST';
};
export type RequestImageDeletionEvent = {
    type: 'REQUEST_IMAGE_DELETION';
};
export type HandleResponseEvent = {
    type: 'HANDLE_RESPONSE';
    data: GQLDeleteImageMutationData;
};
export type DeleteImageModalEvent = ShowToastEvent | HideToastEvent | RequestImageDeletionEvent | HandleResponseEvent;
export declare const deleteImageModalMachine: import("xstate").StateMachine<DeleteImageModalContext, DeleteImageModalStateSchema, DeleteImageModalEvent, any, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, DeleteImageModalEvent, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
//# sourceMappingURL=DeleteImageModalMachine.d.ts.map