export declare const serverJoinRoomRequestSchema: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<"authenticateMultiplayer">;
    address: import("@sinclair/typebox").TString;
    room: import("@sinclair/typebox").TString;
    time: import("@sinclair/typebox").TNumber;
    userProfile: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TUnsafe<import("@sonolus/core").ServiceUserId>;
        handle: import("@sinclair/typebox").TString;
        name: import("@sinclair/typebox").TString;
        avatarForegroundColor: import("@sinclair/typebox").TString;
        avatarBackgroundColor: import("@sinclair/typebox").TString;
        aboutMe: import("@sinclair/typebox").TString;
        favorites: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    }>;
}>;
