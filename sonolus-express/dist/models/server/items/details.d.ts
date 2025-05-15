import { LocalizationText, ServerItemDetails } from '@sonolus/core';
import { SonolusBase } from '../../../sonolus/base';
import { Localize } from '../../../utils/localization';
import { ToItem } from '../../items/item';
import { PickForms, ServerFormsModel } from '../../server/forms/form';
import { ServerItemSectionModel } from '../../server/items/section';
import { ServerItemLeaderboardModel } from './leaderboards/leaderboard';
export type ServerItemDetailsModel<TItemModel, TSearches extends ServerFormsModel, TActions extends ServerFormsModel> = {
    item: TItemModel;
    description?: LocalizationText;
    actions: PickForms<TActions>;
    hasCommunity: boolean;
    leaderboards: ServerItemLeaderboardModel[];
    sections: ServerItemSectionModel<TSearches>[];
};
export declare const toServerItemDetails: <TItemModel, TSearches extends ServerFormsModel, TActions extends ServerFormsModel, TItem>(sonolus: SonolusBase, localize: Localize, toItem: ToItem<TItemModel, TItem>, details: ServerItemDetailsModel<TItemModel, TSearches, TActions>, searches: TSearches, actions: TActions) => ServerItemDetails<TItem>;
