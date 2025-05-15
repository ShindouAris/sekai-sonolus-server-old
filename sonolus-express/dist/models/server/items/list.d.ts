import { ServerItemList } from '@sonolus/core';
import { SonolusBase } from '../../../sonolus/base';
import { Localize } from '../../../utils/localization';
import { ToItem } from '../../items/item';
import { PickForms, ServerFormsModel } from '../../server/forms/form';
export type ServerItemListModel<TItemModel, TSearches extends ServerFormsModel> = {
    pageCount: number;
    cursor?: string;
    items: TItemModel[];
    searches?: PickForms<TSearches>;
};
export declare const toServerItemList: <TItemModel, TSearches extends ServerFormsModel, TItem>(sonolus: SonolusBase, localize: Localize, toItem: ToItem<TItemModel, TItem>, list: ServerItemListModel<TItemModel, TSearches>, searches: TSearches) => ServerItemList<TItem>;
