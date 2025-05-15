export declare const effectItemSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    source: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    version: import("@sinclair/typebox").TLiteral<5>;
    title: import("@sinclair/typebox").TString;
    subtitle: import("@sinclair/typebox").TString;
    author: import("@sinclair/typebox").TString;
    tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        title: import("@sinclair/typebox").TString;
        icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
    thumbnail: import("@sinclair/typebox").TObject<{
        hash: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
        url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
    }>;
    data: import("@sinclair/typebox").TObject<{
        hash: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
        url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
    }>;
    audio: import("@sinclair/typebox").TObject<{
        hash: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
        url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
    }>;
}>;
