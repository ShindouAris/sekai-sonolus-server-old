import { ItemModel } from '../../../../models/items/item';
import { ServerFormsModel } from '../../../../models/server/forms/form';
import { ServerOptionsModel } from '../../../../models/server/options/option';
import { SonolusItemGroup } from '../../../../sonolus/itemGroup';
import { SonolusCtx } from '../../../ctx';
import { HandlerResponse, SonolusRouteHandler } from '../../../handler';
export type ServerPreUploadItemCommunityCommentActionHandler<TConfigurationOptions extends ServerOptionsModel> = (ctx: SonolusCtx<TConfigurationOptions> & {
    itemName: string;
    commentName: string;
    key: string;
}) => HandlerResponse<true, 400 | 401 | 404>;
export declare const createServerPreUploadItemCommunityCommentActionRouteHandler: <TConfigurationOptions extends ServerOptionsModel, TItemModel extends ItemModel, TCreates extends ServerFormsModel, TSearches extends ServerFormsModel, TActions extends ServerFormsModel, TCommunityActions extends ServerFormsModel, TCommunityCommentActions extends ServerFormsModel>(group: SonolusItemGroup<TConfigurationOptions, TItemModel, TCreates, TSearches, TActions, TCommunityActions, TCommunityCommentActions>) => SonolusRouteHandler<TConfigurationOptions>;
