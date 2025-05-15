import { ServerUploadItemResponse } from '@sonolus/core';
import { ItemModel } from '../../models/items/item';
import { ServerFormsModel } from '../../models/server/forms/form';
import { ServerOptionsModel } from '../../models/server/options/option';
import { SonolusItemGroup } from '../../sonolus/itemGroup';
import { SonolusCtx } from '../ctx';
import { HandlerResponse, SonolusRouteHandler } from '../handler';
export type ServerUploadItemHandler<TConfigurationOptions extends ServerOptionsModel> = (ctx: SonolusCtx<TConfigurationOptions> & {
    key: string;
    files: Express.Multer.File[];
}) => HandlerResponse<ServerUploadItemResponse, 400 | 401>;
export declare const createServerUploadItemRouteHandler: <TConfigurationOptions extends ServerOptionsModel, TItemModel extends ItemModel, TCreates extends ServerFormsModel, TSearches extends ServerFormsModel, TActions extends ServerFormsModel, TCommunityActions extends ServerFormsModel, TCommunityCommentActions extends ServerFormsModel>(group: SonolusItemGroup<TConfigurationOptions, TItemModel, TCreates, TSearches, TActions, TCommunityActions, TCommunityCommentActions>) => SonolusRouteHandler<TConfigurationOptions>;
