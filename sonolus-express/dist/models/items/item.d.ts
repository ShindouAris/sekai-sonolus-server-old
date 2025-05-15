import { LocalizationText } from '@sonolus/core';
import { SonolusBase } from '../../sonolus/base';
import { Localize } from '../../utils/localization';
export type ItemModel = {
    name: string;
    description?: LocalizationText;
};
export type Model<TItem, TOverride> = Omit<TItem, keyof TOverride> & TOverride;
export type ToItem<TItemModel, TItem> = (sonolus: SonolusBase, localize: Localize, item: TItemModel) => TItem;
export declare const toItems: <TItemModel, TItem>(sonolus: SonolusBase, localize: Localize, toItem: ToItem<TItemModel, TItem>, items: TItemModel[]) => TItem[];
export declare const getItem: <T extends ItemModel>(items: T[], nameOrItem: string | T, parent: string, path: string) => T;
