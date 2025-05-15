import { DatabaseEffectItem, EffectItem } from '@sonolus/core';
import { Model, ToItem } from './item';
export interface EffectItemModel extends Model<DatabaseEffectItem, {}> {
}
export declare const toEffectItem: ToItem<EffectItemModel, EffectItem>;
