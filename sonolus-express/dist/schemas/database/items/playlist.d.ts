export declare const databasePlaylistItemSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    version: import("@sinclair/typebox").TLiteral<1>;
    title: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
    subtitle: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
    author: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
    tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        title: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
        icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>>;
    levels: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    thumbnail: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        hash: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
        url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
    }>>;
    meta: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
}>;
