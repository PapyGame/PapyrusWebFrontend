import { GQLCreateProjectMutationData } from './NewProjectView.types';
export interface NewProjectViewStateSchema {
    states: {
        toast: {
            states: {
                visible: {};
                hidden: {};
            };
        };
        newProjectView: {
            states: {
                pristine: {};
                invalid: {};
                valid: {};
                creatingProject: {};
                success: {};
            };
        };
    };
}
export type SchemaValue = {
    newProjectView: 'pristine' | 'invalid' | 'valid' | 'creatingProject' | 'success';
    toast: 'visible' | 'hidden';
};
export interface NewProjectViewContext {
    name: string;
    nameMessage: string;
    nameIsInvalid: boolean;
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
export type ChangeNameEvent = {
    type: 'CHANGE_NAME';
    name: string;
};
export type HandleResponseEvent = {
    type: 'HANDLE_RESPONSE';
    data: GQLCreateProjectMutationData;
};
export type RequestProjectCreationEvent = {
    type: 'REQUEST_PROJECT_CREATION';
};
export type NewProjectEvent = ChangeNameEvent | RequestProjectCreationEvent | HandleResponseEvent | ShowToastEvent | HideToastEvent;
export declare const newProjectViewMachine: import("xstate").StateMachine<NewProjectViewContext, NewProjectViewStateSchema, NewProjectEvent, any, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, NewProjectEvent, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
//# sourceMappingURL=NewProjectViewMachine.d.ts.map