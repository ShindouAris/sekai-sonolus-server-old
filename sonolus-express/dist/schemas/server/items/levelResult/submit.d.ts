export declare const serverSubmitLevelResultRequestSchema: import("@sinclair/typebox").TObject<{
    replay: import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        source: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        version: import("@sinclair/typebox").TLiteral<1>;
        title: import("@sinclair/typebox").TString;
        subtitle: import("@sinclair/typebox").TString;
        author: import("@sinclair/typebox").TString;
        tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            title: import("@sinclair/typebox").TString;
            icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>>;
        level: import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            source: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            version: import("@sinclair/typebox").TLiteral<1>;
            rating: import("@sinclair/typebox").TNumber;
            title: import("@sinclair/typebox").TString;
            artists: import("@sinclair/typebox").TString;
            author: import("@sinclair/typebox").TString;
            tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                title: import("@sinclair/typebox").TString;
                icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>;
            engine: import("@sinclair/typebox").TObject<{
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
            useSkin: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                useDefault: import("@sinclair/typebox").TLiteral<true>;
            }>, import("@sinclair/typebox").TObject<{
                useDefault: import("@sinclair/typebox").TLiteral<false>;
                item: import("@sinclair/typebox").TObject<{
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
            }>]>;
            useBackground: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                useDefault: import("@sinclair/typebox").TLiteral<true>;
            }>, import("@sinclair/typebox").TObject<{
                useDefault: import("@sinclair/typebox").TLiteral<false>;
                item: import("@sinclair/typebox").TObject<{
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
            }>]>;
            useEffect: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                useDefault: import("@sinclair/typebox").TLiteral<true>;
            }>, import("@sinclair/typebox").TObject<{
                useDefault: import("@sinclair/typebox").TLiteral<false>;
                item: import("@sinclair/typebox").TObject<{
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
            }>]>;
            useParticle: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                useDefault: import("@sinclair/typebox").TLiteral<true>;
            }>, import("@sinclair/typebox").TObject<{
                useDefault: import("@sinclair/typebox").TLiteral<false>;
                item: import("@sinclair/typebox").TObject<{
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
        }>;
        data: import("@sinclair/typebox").TObject<{
            hash: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
            url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
        }>;
        configuration: import("@sinclair/typebox").TObject<{
            hash: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
            url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
        }>;
    }>;
    values: import("@sinclair/typebox").TString;
}>;
