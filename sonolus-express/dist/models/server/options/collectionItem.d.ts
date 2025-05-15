import { BackgroundItem, EffectItem, EngineItem, ItemType, LevelItem, LocalizationText, ParticleItem, PlaylistItem, PostItem, ReplayItem, RoomItem, ServerCollectionItemOption, SkinItem } from '@sonolus/core';
import { Localize } from '../../../utils/localization';
export type ServerCollectionItemOptionModel = {
    name: LocalizationText;
    description?: LocalizationText;
    required: boolean;
    type: 'collectionItem';
    itemType: ItemType;
};
export type ServerCollectionItemOptionValue<T = ServerCollectionItemOptionModel> = T extends ServerCollectionItemOptionModel ? {
    post: PostItem;
    playlist: PlaylistItem;
    level: LevelItem;
    skin: SkinItem;
    background: BackgroundItem;
    effect: EffectItem;
    particle: ParticleItem;
    engine: EngineItem;
    replay: ReplayItem;
    room: RoomItem;
}[T['itemType']] | undefined : never;
export declare const parseRawServerCollectionItemOptionValue: (value: unknown, option: ServerCollectionItemOptionModel) => ServerCollectionItemOptionValue | undefined;
export declare const normalizeServerCollectionItemOptionValue: (value: ServerCollectionItemOptionValue | undefined) => ServerCollectionItemOptionValue;
export declare const serializeServerCollectionItemOptionValue: (value: Exclude<ServerCollectionItemOptionValue, undefined>) => string;
export declare const toServerCollectionItemOption: (localize: Localize, query: string, option: ServerCollectionItemOptionModel) => ServerCollectionItemOption;
