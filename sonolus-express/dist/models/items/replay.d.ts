import { DatabaseReplayItem, ReplayItem } from '@sonolus/core';
import { Model, ToItem } from './item';
import { LevelItemModel } from './level';
export interface ReplayItemModel extends Model<DatabaseReplayItem, {
    level: string | LevelItemModel;
}> {
}
export declare const toReplayItem: ToItem<ReplayItemModel, ReplayItem>;
