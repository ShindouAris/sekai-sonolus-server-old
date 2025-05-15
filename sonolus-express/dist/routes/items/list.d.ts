import { ItemModel, ToItem } from '../../models/items/item';
import { ServerFormsModel } from '../../models/server/forms/form';
import { ServerSearchesValue } from '../../models/server/forms/value';
import { ServerItemListModel } from '../../models/server/items/list';
import { ServerOptionsModel } from '../../models/server/options/option';
import { SonolusBase } from '../../sonolus/base';
import { SonolusItemGroup } from '../../sonolus/itemGroup';
import { SonolusCtx } from '../ctx';
import { HandlerResponse, SonolusRouteHandler } from '../handler';
export type ServerItemListHandler<TConfigurationOptions extends ServerOptionsModel, TItemModel, TSearches extends ServerFormsModel> = (ctx: SonolusCtx<TConfigurationOptions> & {
    search: ServerSearchesValue<TSearches>;
    page: number;
    cursor?: string;
}) => HandlerResponse<ServerItemListModel<TItemModel, TSearches>, 400 | 401>;
export declare const createDefaultServerItemListHandler: <TConfigurationOptions extends ServerOptionsModel, TItemModel extends ItemModel, TCreates extends ServerFormsModel, TSearches extends ServerFormsModel, TActions extends ServerFormsModel, TCommunityActions extends ServerFormsModel, TCommunityCommentActions extends ServerFormsModel>(group: SonolusItemGroup<TConfigurationOptions, TItemModel, TCreates, TSearches, TActions, TCommunityActions, TCommunityCommentActions>, filter: (items: TItemModel[], keywords: string) => TItemModel[]) => ServerItemListHandler<TConfigurationOptions, TItemModel, TSearches>;
export declare const createServerItemListRouteHandler: <TConfigurationOptions extends ServerOptionsModel, TItemModel extends ItemModel, TCreates extends ServerFormsModel, TSearches extends ServerFormsModel, TActions extends ServerFormsModel, TCommunityActions extends ServerFormsModel, TCommunityCommentActions extends ServerFormsModel>(sonolus: SonolusBase, group: SonolusItemGroup<TConfigurationOptions, TItemModel, TCreates, TSearches, TActions, TCommunityActions, TCommunityCommentActions>, toItem: ToItem<TItemModel, unknown>) => SonolusRouteHandler<TConfigurationOptions>;
export declare const paginateItems: <T>(items: T[], page: number, perPage?: number) => {
    pageCount: number;
    items: T[];
};
