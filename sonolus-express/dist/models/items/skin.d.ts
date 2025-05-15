import { DatabaseSkinItem, SkinItem } from '@sonolus/core';
import { Model, ToItem } from './item';
export interface SkinItemModel extends Model<DatabaseSkinItem, {}> {
}
export declare const toSkinItem: ToItem<SkinItemModel, SkinItem>;
