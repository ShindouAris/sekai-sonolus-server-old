import { DatabaseTag, LocalizationText, RoomItem, Srl } from '@sonolus/core';
import { ToItem } from './item';
export interface RoomItemModel {
    name: string;
    title: LocalizationText;
    subtitle: LocalizationText;
    master: LocalizationText;
    tags: DatabaseTag[];
    description?: LocalizationText;
    cover?: Srl;
    bgm?: Srl;
    preview?: Srl;
}
export declare const toRoomItem: ToItem<RoomItemModel, RoomItem>;
