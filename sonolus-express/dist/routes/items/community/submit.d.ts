import { ServerSubmitItemCommunityActionResponse } from '@sonolus/core';
import { ItemModel } from '../../../models/items/item';
import { ServerFormsModel } from '../../../models/server/forms/form';
import { ServerFormsValue } from '../../../models/server/forms/value';
import { ServerOptionsModel } from '../../../models/server/options/option';
import { SonolusItemGroup } from '../../../sonolus/itemGroup';
import { SonolusCtx } from '../../ctx';
import { HandlerResponse, SonolusRouteHandler } from '../../handler';
export type ServerSubmitItemCommunityActionHandler<TConfigurationOptions extends ServerOptionsModel, TCommunityActions extends ServerFormsModel> = (ctx: SonolusCtx<TConfigurationOptions> & {
    itemName: string;
    value: ServerFormsValue<TCommunityActions>;
}) => HandlerResponse<ServerSubmitItemCommunityActionResponse, 400 | 401 | 404>;
export declare const createServerSubmitItemCommunityActionRouteHandler: <TConfigurationOptions extends ServerOptionsModel, TItemModel extends ItemModel, TCreates extends ServerFormsModel, TSearches extends ServerFormsModel, TActions extends ServerFormsModel, TCommunityActions extends ServerFormsModel, TCommunityCommentActions extends ServerFormsModel>(group: SonolusItemGroup<TConfigurationOptions, TItemModel, TCreates, TSearches, TActions, TCommunityActions, TCommunityCommentActions>) => SonolusRouteHandler<TConfigurationOptions>;
