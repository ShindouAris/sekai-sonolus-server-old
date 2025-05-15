import { ItemModel } from '../../../../models/items/item';
import { ServerFormsModel } from '../../../../models/server/forms/form';
import { ServerItemLeaderboardRecordDetailsModel } from '../../../../models/server/items/leaderboards/records/details';
import { ServerOptionsModel } from '../../../../models/server/options/option';
import { SonolusBase } from '../../../../sonolus/base';
import { SonolusItemGroup } from '../../../../sonolus/itemGroup';
import { SonolusCtx } from '../../../ctx';
import { HandlerResponse, SonolusRouteHandler } from '../../../handler';
export type ServerItemLeaderboardRecordDetailsHandler<TConfigurationOptions extends ServerOptionsModel> = (ctx: SonolusCtx<TConfigurationOptions> & {
    itemName: string;
    leaderboardName: string;
    recordName: string;
}) => HandlerResponse<ServerItemLeaderboardRecordDetailsModel, 401 | 404>;
export declare const createServerItemLeaderboardRecordDetailsRouteHandler: <TConfigurationOptions extends ServerOptionsModel, TItemModel extends ItemModel, TCreates extends ServerFormsModel, TSearches extends ServerFormsModel, TActions extends ServerFormsModel, TCommunityActions extends ServerFormsModel, TCommunityCommentActions extends ServerFormsModel>(sonolus: SonolusBase, group: SonolusItemGroup<TConfigurationOptions, TItemModel, TCreates, TSearches, TActions, TCommunityActions, TCommunityCommentActions>) => SonolusRouteHandler<TConfigurationOptions>;
