export declare const engineItemSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    source: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    version: import("@sinclair/typebox").TLiteral<13>;
    title: import("@sinclair/typebox").TString;
    subtitle: import("@sinclair/typebox").TString;
    author: import("@sinclair/typebox").TString;
    tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        title: import("@sinclair/typebox").TString;
        icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
    skin: import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        source: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>>;
        version: import("@sinclair/typebox").TLiteral<4>;
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
        texture: import("@sinclair/typebox").TObject<{
            hash: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
            url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
        }>;
    }>;
    background: import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        source: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        version: import("@sinclair/typebox").TLiteral<2>;
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
        image: import("@sinclair/typebox").TObject<{
            hash: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
            url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
        }>;
        configuration: import("@sinclair/typebox").TObject<{
            hash: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
            url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
        }>;
    }>;
    effect: import("@sinclair/typebox").TObject<{
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
    particle: import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        source: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        version: import("@sinclair/typebox").TLiteral<3>;
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
        texture: import("@sinclair/typebox").TObject<{
            hash: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
            url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
        }>;
    }>;
    thumbnail: import("@sinclair/typebox").TObject<{
        hash: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
        url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
    }>;
    playData: import("@sinclair/typebox").TObject<{
        hash: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
        url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
    }>;
    watchData: import("@sinclair/typebox").TObject<{
        hash: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
        url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
    }>;
    previewData: import("@sinclair/typebox").TObject<{
        hash: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
        url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
    }>;
    tutorialData: import("@sinclair/typebox").TObject<{
        hash: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
        url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
    }>;
    rom: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        hash: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
        url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
    }>>;
    configuration: import("@sinclair/typebox").TObject<{
        hash: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
        url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
    }>;
}>;
