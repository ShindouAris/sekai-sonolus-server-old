import { Icon, LocalizationText, ServerItemSection } from '@sonolus/core';
import { SonolusBase } from '../../../sonolus/base';
import { Localize } from '../../../utils/localization';
import { BackgroundItemModel } from '../../items/background';
import { EffectItemModel } from '../../items/effect';
import { EngineItemModel } from '../../items/engine';
import { LevelItemModel } from '../../items/level';
import { ParticleItemModel } from '../../items/particle';
import { PlaylistItemModel } from '../../items/playlist';
import { PostItemModel } from '../../items/post';
import { ReplayItemModel } from '../../items/replay';
import { RoomItemModel } from '../../items/room';
import { SkinItemModel } from '../../items/skin';
import { ServerFormsModel } from '../forms/form';
import { RawServerFormValue } from '../forms/value';
export type ServerItemSectionModel<T extends ServerFormsModel> = (ServerItemSectionModelTyped<'post', PostItemModel> | ServerItemSectionModelTyped<'playlist', PlaylistItemModel> | ServerItemSectionModelTyped<'level', LevelItemModel> | ServerItemSectionModelTyped<'skin', SkinItemModel> | ServerItemSectionModelTyped<'background', BackgroundItemModel> | ServerItemSectionModelTyped<'effect', EffectItemModel> | ServerItemSectionModelTyped<'particle', ParticleItemModel> | ServerItemSectionModelTyped<'engine', EngineItemModel> | ServerItemSectionModelTyped<'replay', ReplayItemModel> | ServerItemSectionModelTyped<'room', RoomItemModel>) & {
    search?: {
        [K in keyof T]: {
            value: RawServerFormValue<K & string, T[K]>;
            form?: boolean | T[K];
        };
    }[keyof T];
};
type ServerItemSectionModelTyped<TItemType, TItem> = {
    title: LocalizationText;
    icon?: Icon;
    description?: LocalizationText;
    help?: LocalizationText;
    itemType: TItemType;
    items: TItem[];
};
export declare const toServerItemSection: <T extends ServerFormsModel>(sonolus: SonolusBase, localize: Localize, section: ServerItemSectionModel<T>, searches: T) => ServerItemSection;
export declare const toServerItemSections: <T extends ServerFormsModel>(sonolus: SonolusBase, localize: Localize, sections: ServerItemSectionModel<T>[], searches: T) => ServerItemSection[];
export {};
