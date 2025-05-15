import { DatabaseParticleItem, ParticleItem } from '@sonolus/core';
import { Model, ToItem } from './item';
export interface ParticleItemModel extends Model<DatabaseParticleItem, {}> {
}
export declare const toParticleItem: ToItem<ParticleItemModel, ParticleItem>;
