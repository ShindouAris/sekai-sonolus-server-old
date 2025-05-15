export declare const databaseSchema: import("@sinclair/typebox").TObject<{
    info: import("@sinclair/typebox").TObject<{
        title: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
        description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>>;
        banner: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            hash: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
            url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
        }>>;
    }>;
    posts: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        version: import("@sinclair/typebox").TLiteral<1>;
        title: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
        time: import("@sinclair/typebox").TNumber;
        author: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
        tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            title: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
            icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>>;
        description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>>;
        thumbnail: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            hash: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
            url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
        }>>;
        meta: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
    }>>;
    playlists: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
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
    }>>;
    levels: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
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
    }>>;
    skins: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        version: import("@sinclair/typebox").TLiteral<4>;
        title: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
        subtitle: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
        author: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
        tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            title: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
            icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>>;
        description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>>;
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
        meta: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
    }>>;
    backgrounds: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        version: import("@sinclair/typebox").TLiteral<2>;
        title: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
        subtitle: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
        author: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
        tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            title: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
            icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>>;
        description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>>;
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
        meta: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
    }>>;
    effects: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        version: import("@sinclair/typebox").TLiteral<5>;
        title: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
        subtitle: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
        author: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
        tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            title: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
            icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>>;
        description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>>;
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
        meta: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
    }>>;
    particles: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        version: import("@sinclair/typebox").TLiteral<3>;
        title: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
        subtitle: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
        author: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
        tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            title: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
            icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>>;
        description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>>;
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
        meta: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
    }>>;
    engines: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        version: import("@sinclair/typebox").TLiteral<13>;
        title: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
        subtitle: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
        author: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
        tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            title: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
            icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>>;
        description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>>;
        skin: import("@sinclair/typebox").TString;
        background: import("@sinclair/typebox").TString;
        effect: import("@sinclair/typebox").TString;
        particle: import("@sinclair/typebox").TString;
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
        meta: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
    }>>;
    replays: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
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
        level: import("@sinclair/typebox").TString;
        data: import("@sinclair/typebox").TObject<{
            hash: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
            url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
        }>;
        configuration: import("@sinclair/typebox").TObject<{
            hash: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
            url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
        }>;
        meta: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
    }>>;
}>;
