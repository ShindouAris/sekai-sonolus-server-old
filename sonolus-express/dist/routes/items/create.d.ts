import { ServerCreateItemResponse } from '@sonolus/core';
import { ItemModel } from '../../models/items/item';
import { ServerFormsModel } from '../../models/server/forms/form';
import { ServerFormsValue } from '../../models/server/forms/value';
import { ServerOptionsModel } from '../../models/server/options/option';
import { SonolusItemGroup } from '../../sonolus/itemGroup';
import { SonolusCtx } from '../ctx';
import { HandlerResponse, SonolusRouteHandler } from '../handler';
export type ServerCreateItemHandler<TConfigurationOptions extends ServerOptionsModel, TCreates extends ServerFormsModel> = (ctx: SonolusCtx<TConfigurationOptions> & {
    value: ServerFormsValue<TCreates>;
}) => HandlerResponse<ServerCreateItemResponse, 400 | 401>;
export declare const createServerCreateItemRouteHandler: <TConfigurationOptions extends ServerOptionsModel, TItemModel extends ItemModel, TCreates extends ServerFormsModel, TSearches extends ServerFormsModel, TActions extends ServerFormsModel, TCommunityActions extends ServerFormsModel, TCommunityCommentActions extends ServerFormsModel>(group: SonolusItemGroup<TConfigurationOptions, TItemModel, TCreates, TSearches, TActions, TCommunityActions, TCommunityCommentActions>) => SonolusRouteHandler<TConfigurationOptions>;
