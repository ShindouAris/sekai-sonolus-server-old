import { ItemModel } from '../../../../models/items/item';
import { ServerFormsModel } from '../../../../models/server/forms/form';
import { ServerItemCommunityCommentListModel } from '../../../../models/server/items/community/comments/list';
import { ServerOptionsModel } from '../../../../models/server/options/option';
import { SonolusItemGroup } from '../../../../sonolus/itemGroup';
import { SonolusCtx } from '../../../ctx';
import { HandlerResponse, SonolusRouteHandler } from '../../../handler';
export type ServerItemCommunityCommentListHandler<TConfigurationOptions extends ServerOptionsModel, TCommunityCommentActions extends ServerFormsModel> = (ctx: SonolusCtx<TConfigurationOptions> & {
    itemName: string;
    page: number;
    cursor?: string;
}) => HandlerResponse<ServerItemCommunityCommentListModel<TCommunityCommentActions>, 401 | 404>;
export declare const createServerItemCommunityCommentListRouteHandler: <TConfigurationOptions extends ServerOptionsModel, TItemModel extends ItemModel, TCreates extends ServerFormsModel, TSearches extends ServerFormsModel, TActions extends ServerFormsModel, TCommunityActions extends ServerFormsModel, TCommunityCommentActions extends ServerFormsModel>(group: SonolusItemGroup<TConfigurationOptions, TItemModel, TCreates, TSearches, TActions, TCommunityActions, TCommunityCommentActions>) => SonolusRouteHandler<TConfigurationOptions>;
