import { ServiceUserId } from '@sonolus/core';
export declare const serviceUserProfileSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TUnsafe<ServiceUserId>;
    handle: import("@sinclair/typebox").TString;
    name: import("@sinclair/typebox").TString;
    avatarForegroundColor: import("@sinclair/typebox").TString;
    avatarBackgroundColor: import("@sinclair/typebox").TString;
    aboutMe: import("@sinclair/typebox").TString;
    favorites: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
}>;
