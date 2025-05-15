import { DatabaseEngineItem, EngineItem } from '@sonolus/core';
import { BackgroundItemModel } from './background';
import { EffectItemModel } from './effect';
import { Model, ToItem } from './item';
import { ParticleItemModel } from './particle';
import { SkinItemModel } from './skin';
export interface EngineItemModel extends Model<DatabaseEngineItem, {
    skin: string | SkinItemModel;
    background: string | BackgroundItemModel;
    effect: string | EffectItemModel;
    particle: string | ParticleItemModel;
}> {
}
export declare const toEngineItem: ToItem<EngineItemModel, EngineItem>;
