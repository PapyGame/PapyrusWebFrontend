import { GQLCreateRepresentationMutationData, GQLGetRepresentationDescriptionsQueryData, GQLRepresentationDescriptionMetadata } from './NewRepresentationModal.types';
export interface NewRepresentationModalStateSchema {
    states: {
        toast: {
            states: {
                visible: {};
                hidden: {};
            };
        };
        newRepresentationModal: {
            states: {
                loading: {};
                invalid: {};
                valid: {};
                creatingRepresentation: {};
                success: {};
            };
        };
    };
}
export type SchemaValue = {
    newRepresentationModal: 'loading' | 'invalid' | 'valid' | 'creatingRepresentation' | 'success';
    toast: 'visible' | 'hidden';
};
export interface NewRepresentationModalContext {
    name: string;
    nameMessage: string;
    nameIsInvalid: boolean;
    nameHasBeenModified: boolean;
    selectedRepresentationDescriptionId: string;
    representationDescriptions: GQLRepresentationDescriptionMetadata[];
    message: string | null;
    createdRepresentationId: string | null;
    createdRepresentationLabel: string | null;
    createdRepresentationKind: string | null;
}
export type ShowToastEvent = {
    type: 'SHOW_TOAST';
    message: string;
};
export type HideToastEvent = {
    type: 'HIDE_TOAST';
};
export type FetchedRepresentationDescriptionsEvent = {
    type: 'HANDLE_FETCHED_REPRESENTATION_CREATION_DESCRIPTIONS';
    data: GQLGetRepresentationDescriptionsQueryData;
};
export type ChangeNameEvent = {
    type: 'CHANGE_NAME';
    name: string;
};
export type ChangeRepresentationDescriptionEvent = {
    type: 'CHANGE_REPRESENTATION_CREATION_DESCRIPTION';
    representationDescriptionId: string;
};
export type CreateRepresentationEvent = {
    type: 'CREATE_REPRESENTATION';
};
export type HandleResponseEvent = {
    type: 'HANDLE_RESPONSE';
    data: GQLCreateRepresentationMutationData;
};
export type NewRepresentationModalEvent = FetchedRepresentationDescriptionsEvent | ChangeNameEvent | ChangeRepresentationDescriptionEvent | CreateRepresentationEvent | HandleResponseEvent | ShowToastEvent | HideToastEvent;
export declare const newRepresentationModalMachine: import("xstate").StateMachine<NewRepresentationModalContext, NewRepresentationModalStateSchema, NewRepresentationModalEvent, any, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, NewRepresentationModalEvent, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
//# sourceMappingURL=NewRepresentationModalMachine.d.ts.map