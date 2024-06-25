export interface UploadProjectViewStateSchema {
    states: {
        toast: {
            states: {
                hidden: {};
                visible: {};
            };
        };
        uploadProjectView: {
            states: {
                pristine: {};
                fileSelected: {};
                uploading: {};
                success: {};
            };
        };
    };
}
export type SchemaValue = {
    uploadProjectView: 'pristine' | 'fileSelected' | 'uploading' | 'success';
    toast: 'visible' | 'hidden';
};
export interface UploadProjectViewContext {
    file: File | null;
    message: string | null;
    newProjectId: string | null;
}
export type ShowToastEvent = {
    type: 'SHOW_TOAST';
    message: string;
};
export type HideToastEvent = {
    type: 'HIDE_TOAST';
};
export type HandleSelectedFileEvent = {
    type: 'HANDLE_SELECTED_FILE';
    file: File;
};
export type HandleUploadEvent = {
    type: 'HANDLE_UPLOAD';
};
export type HandleResponseEvent = {
    type: 'HANDLE_RESPONSE';
    data: any;
};
export type UploadProjectEvent = ShowToastEvent | HideToastEvent | HandleSelectedFileEvent | HandleUploadEvent | HandleResponseEvent;
export declare const uploadProjectMachine: import("xstate").StateMachine<UploadProjectViewContext, UploadProjectViewStateSchema, UploadProjectEvent, any, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, UploadProjectEvent, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
//# sourceMappingURL=UploadProjectViewMachine.d.ts.map