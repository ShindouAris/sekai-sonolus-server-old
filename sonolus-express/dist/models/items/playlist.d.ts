import { DatabasePlaylistItem, PlaylistItem } from '@sonolus/core';
import { Model, ToItem } from './item';
import { LevelItemModel } from './level';
export interface PlaylistItemModel extends Model<DatabasePlaylistItem, {
    levels: (string | LevelItemModel)[];
}> {
}
export declare const toPlaylistItem: ToItem<PlaylistItemModel, PlaylistItem>;
