export declare const databaseLevelItemSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    version: import("@sinclair/typebox").TLiteral<1>;
    rating: import("@sinclair/typebox").TNumber;
    title: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
    artists: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
    author: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
    tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        title: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
        icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>>;
    engine: import("@sinclair/typebox").TString;
    useSkin: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        useDefault: import("@sinclair/typebox").TLiteral<true>;
    }>, import("@sinclair/typebox").TObject<{
        useDefault: import("@sinclair/typebox").TLiteral<false>;
        item: import("@sinclair/typebox").TString;
    }>]>;
    useBackground: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        useDefault: import("@sinclair/typebox").TLiteral<true>;
    }>, import("@sinclair/typebox").TObject<{
        useDefault: import("@sinclair/typebox").TLiteral<false>;
        item: import("@sinclair/typebox").TString;
    }>]>;
    useEffect: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        useDefault: import("@sinclair/typebox").TLiteral<true>;
    }>, import("@sinclair/typebox").TObject<{
        useDefault: import("@sinclair/typebox").TLiteral<false>;
        item: import("@sinclair/typebox").TString;
    }>]>;
    useParticle: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        useDefault: import("@sinclair/typebox").TLiteral<true>;
    }>, import("@sinclair/typebox").TObject<{
        useDefault: import("@sinclair/typebox").TLiteral<false>;
        item: import("@sinclair/typebox").TString;
    }>]>;
    cover: import("@sinclair/typebox").TObject<{
        hash: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
        url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
    }>;
    bgm: import("@sinclair/typebox").TObject<{
        hash: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
        url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
    }>;
    preview: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        hash: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
        url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
    }>>;
    data: import("@sinclair/typebox").TObject<{
        hash: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
        url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
    }>;
    meta: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
}>;
