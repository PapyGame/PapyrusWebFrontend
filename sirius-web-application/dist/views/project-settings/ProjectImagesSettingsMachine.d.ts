import { GQLCustomImage, GQLGetImagesQueryData } from './ProjectImagesSettings.types';
export interface ImagesViewStateSchema {
    states: {
        toast: {
            states: {
                visible: {};
                hidden: {};
            };
        };
        imagesSettings: {
            states: {
                loading: {};
                loaded: {};
                empty: {};
            };
        };
    };
}
export type SchemaValue = {
    toast: 'visible' | 'hidden';
    imagesSettings: 'loading' | 'loaded' | 'empty';
};
export type ImagesSettingsModal = 'Upload' | 'Rename' | 'Delete';
export interface ImagesSettingsContext {
    images: GQLCustomImage[];
    modalToDisplay: ImagesSettingsModal | null;
    message: string | null;
    currentImage: GQLCustomImage | null;
}
export type ShowToastEvent = {
    type: 'SHOW_TOAST';
    message: string;
};
export type HideToastEvent = {
    type: 'HIDE_TOAST';
};
export type FetchedImagesEvent = {
    type: 'HANDLE_FETCHED_IMAGES';
    data: GQLGetImagesQueryData;
};
export type OpenModalEvent = {
    type: 'OPEN_MODAL';
    modalToDisplay: ImagesSettingsModal;
};
export type CloseModalEvent = {
    type: 'CLOSE_MODAL';
};
export type SelectImageEvent = {
    type: 'SELECT_IMAGE';
    image: GQLCustomImage;
};
export type ImagesSettingsEvent = FetchedImagesEvent | ShowToastEvent | HideToastEvent | OpenModalEvent | CloseModalEvent | SelectImageEvent;
export declare const imagesViewMachine: import("xstate").StateMachine<ImagesSettingsContext, ImagesViewStateSchema, ImagesSettingsEvent, any, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, ImagesSettingsEvent, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
//# sourceMappingURL=ProjectImagesSettingsMachine.d.ts.map