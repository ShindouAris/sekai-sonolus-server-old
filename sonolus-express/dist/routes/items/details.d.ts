import { ItemModel, ToItem } from '../../models/items/item';
import { ServerFormsModel } from '../../models/server/forms/form';
import { ServerItemDetailsModel } from '../../models/server/items/details';
import { ServerOptionsModel } from '../../models/server/options/option';
import { SonolusBase } from '../../sonolus/base';
import { SonolusItemGroup } from '../../sonolus/itemGroup';
import { SonolusCtx } from '../ctx';
import { HandlerResponse, SonolusRouteHandler } from '../handler';
export type ServerItemDetailsHandler<TConfigurationOptions extends ServerOptionsModel, TSearches extends ServerFormsModel, TActions extends ServerFormsModel, TItemModel> = (ctx: SonolusCtx<TConfigurationOptions> & {
    itemName: string;
}) => HandlerResponse<ServerItemDetailsModel<TItemModel, TSearches, TActions>, 401 | 404>;
export declare const createDefaultServerItemDetailsHandler: <TConfigurationOptions extends ServerOptionsModel, TItemModel extends ItemModel, TCreates extends ServerFormsModel, TSearches extends ServerFormsModel, TActions extends ServerFormsModel, TCommunityActions extends ServerFormsModel, TCommunityCommentActions extends ServerFormsModel>(group: SonolusItemGroup<TConfigurationOptions, TItemModel, TCreates, TSearches, TActions, TCommunityActions, TCommunityCommentActions>) => ServerItemDetailsHandler<TConfigurationOptions, TSearches, TActions, TItemModel>;
export declare const createServerItemDetailsRouteHandler: <TConfigurationOptions extends ServerOptionsModel, TItemModel extends ItemModel, TCreates extends ServerFormsModel, TSearches extends ServerFormsModel, TActions extends ServerFormsModel, TCommunityActions extends ServerFormsModel, TCommunityCommentActions extends ServerFormsModel>(sonolus: SonolusBase, group: SonolusItemGroup<TConfigurationOptions, TItemModel, TCreates, TSearches, TActions, TCommunityActions, TCommunityCommentActions>, toItem: ToItem<TItemModel, unknown>) => SonolusRouteHandler<TConfigurationOptions>;
