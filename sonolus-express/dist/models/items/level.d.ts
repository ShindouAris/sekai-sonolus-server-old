import { DatabaseLevelItem, LevelItem, UseItem } from '@sonolus/core';
import { SonolusBase } from '../../sonolus/base';
import { Localize } from '../../utils/localization';
import { BackgroundItemModel } from './background';
import { EffectItemModel } from './effect';
import { EngineItemModel } from './engine';
import { ItemModel, Model, ToItem } from './item';
import { ParticleItemModel } from './particle';
import { SkinItemModel } from './skin';
export type UseItemModel<T> = {
    useDefault: true;
} | {
    useDefault: false;
    item: string | T;
};
export interface LevelItemModel extends Model<DatabaseLevelItem, {
    engine: string | EngineItemModel;
    useSkin: UseItemModel<SkinItemModel>;
    useBackground: UseItemModel<BackgroundItemModel>;
    useEffect: UseItemModel<EffectItemModel>;
    useParticle: UseItemModel<ParticleItemModel>;
}> {
}
export declare const toLevelItem: ToItem<LevelItemModel, LevelItem>;
export declare const toUseItem: <TItemModel extends ItemModel, TItem>(sonolus: SonolusBase, localize: Localize, toItem: ToItem<TItemModel, TItem>, useItem: UseItemModel<TItemModel>, items: TItemModel[], parent: string, path: string) => UseItem<TItem>;
