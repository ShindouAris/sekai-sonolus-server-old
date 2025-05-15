import { BackgroundItem, DatabaseBackgroundItem } from '@sonolus/core';
import { Model, ToItem } from './item';
export interface BackgroundItemModel extends Model<DatabaseBackgroundItem, {}> {
}
export declare const toBackgroundItem: ToItem<BackgroundItemModel, BackgroundItem>;
