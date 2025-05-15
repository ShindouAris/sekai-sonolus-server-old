import { ItemModel } from '../../../models/items/item';
import { ServerFormsModel } from '../../../models/server/forms/form';
import { ServerItemCommunityInfoModel } from '../../../models/server/items/community/info';
import { ServerOptionsModel } from '../../../models/server/options/option';
import { SonolusItemGroup } from '../../../sonolus/itemGroup';
import { SonolusCtx } from '../../ctx';
import { HandlerResponse, SonolusRouteHandler } from '../../handler';
export type ServerItemCommunityInfoHandler<TConfigurationOptions extends ServerOptionsModel, TCommunityActions extends ServerFormsModel, TCommunityCommentActions extends ServerFormsModel> = (ctx: SonolusCtx<TConfigurationOptions> & {
    itemName: string;
}) => HandlerResponse<ServerItemCommunityInfoModel<TCommunityActions, TCommunityCommentActions>, 401 | 404>;
export declare const createServerItemCommunityInfoRouteHandler: <TConfigurationOptions extends ServerOptionsModel, TItemModel extends ItemModel, TCreates extends ServerFormsModel, TSearches extends ServerFormsModel, TActions extends ServerFormsModel, TCommunityActions extends ServerFormsModel, TCommunityCommentActions extends ServerFormsModel>(group: SonolusItemGroup<TConfigurationOptions, TItemModel, TCreates, TSearches, TActions, TCommunityActions, TCommunityCommentActions>) => SonolusRouteHandler<TConfigurationOptions>;
