import { ItemModel } from '../../../../models/items/item';
import { ServerFormsModel } from '../../../../models/server/forms/form';
import { ServerItemLeaderboardRecordListModel } from '../../../../models/server/items/leaderboards/records/list';
import { ServerOptionsModel } from '../../../../models/server/options/option';
import { SonolusItemGroup } from '../../../../sonolus/itemGroup';
import { SonolusCtx } from '../../../ctx';
import { HandlerResponse, SonolusRouteHandler } from '../../../handler';
export type ServerItemLeaderboardRecordListHandler<TConfigurationOptions extends ServerOptionsModel> = (ctx: SonolusCtx<TConfigurationOptions> & {
    itemName: string;
    leaderboardName: string;
    page: number;
    cursor?: string;
}) => HandlerResponse<ServerItemLeaderboardRecordListModel, 401 | 404>;
export declare const createServerItemLeaderboardRecordListRouteHandler: <TConfigurationOptions extends ServerOptionsModel, TItemModel extends ItemModel, TCreates extends ServerFormsModel, TSearches extends ServerFormsModel, TActions extends ServerFormsModel, TCommunityActions extends ServerFormsModel, TCommunityCommentActions extends ServerFormsModel>(group: SonolusItemGroup<TConfigurationOptions, TItemModel, TCreates, TSearches, TActions, TCommunityActions, TCommunityCommentActions>) => SonolusRouteHandler<TConfigurationOptions>;
