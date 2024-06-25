import { GQLRenameImageMutationData } from './RenameImageModal.types';
export interface RenameImageModalStateSchema {
    states: {
        toast: {
            states: {
                visible: {};
                hidden: {};
            };
        };
        renameImageModal: {
            states: {
                pristine: {};
                valid: {};
                invalid: {};
                renamingImage: {};
                success: {};
            };
        };
    };
}
export type SchemaValue = {
    toast: 'visible' | 'hidden';
    renameImageModal: 'pristine' | 'valid' | 'invalid' | 'renamingImage' | 'success';
};
export interface RenameImageModalContext {
    name: string;
    nameMessage: string;
    nameIsInvalid: boolean;
    initialName: string;
    message: string;
}
export type ShowToastEvent = {
    type: 'SHOW_TOAST';
    message: string;
};
export type HideToastEvent = {
    type: 'HIDE_TOAST';
};
export type ChangeNameEvent = {
    type: 'CHANGE_NAME';
    name: string;
};
export type RequestImageRenamingEvent = {
    type: 'REQUEST_IMAGE_RENAMING';
};
export type HandleResponseEvent = {
    type: 'HANDLE_RESPONSE';
    data: GQLRenameImageMutationData;
};
export type RenameImageModalEvent = ShowToastEvent | HideToastEvent | ChangeNameEvent | RequestImageRenamingEvent | HandleResponseEvent;
export declare const renameImageModalMachine: import("xstate").StateMachine<RenameImageModalContext, RenameImageModalStateSchema, RenameImageModalEvent, any, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, RenameImageModalEvent, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
//# sourceMappingURL=RenameImageModalMachine.d.ts.map