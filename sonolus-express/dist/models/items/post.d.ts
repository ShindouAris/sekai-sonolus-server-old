import { DatabasePostItem, PostItem } from '@sonolus/core';
import { Model, ToItem } from './item';
export interface PostItemModel extends Model<DatabasePostItem, {}> {
}
export declare const toPostItem: ToItem<PostItemModel, PostItem>;
