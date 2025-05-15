import { ItemType } from '@sonolus/core';
import { ItemModel, ToItem } from '../models/items/item';
import { ServerFormsModel } from '../models/server/forms/form';
import { ServerOptionsModel } from '../models/server/options/option';
import { ServerItemCommunityCommentListHandler } from '../routes/items/community/comments/list';
import { ServerPreUploadItemCommunityCommentActionHandler } from '../routes/items/community/comments/preUpload';
import { ServerSubmitItemCommunityCommentActionHandler } from '../routes/items/community/comments/submit';
import { ServerUploadItemCommunityCommentActionHandler } from '../routes/items/community/comments/upload';
import { ServerItemCommunityInfoHandler } from '../routes/items/community/info';
import { ServerPreUploadItemCommunityActionHandler } from '../routes/items/community/preUpload';
import { ServerSubmitItemCommunityActionHandler } from '../routes/items/community/submit';
import { ServerUploadItemCommunityActionHandler } from '../routes/items/community/upload';
import { ServerCreateItemHandler } from '../routes/items/create';
import { ServerItemDetailsHandler } from '../routes/items/details';
import { FilterItems } from '../routes/items/filters/filter';
import { ServerItemInfoHandler } from '../routes/items/info';
import { ServerItemLeaderboardDetailsHandler } from '../routes/items/leaderboards/details';
import { ServerItemLeaderboardRecordDetailsHandler } from '../routes/items/leaderboards/records/details';
import { ServerItemLeaderboardRecordListHandler } from '../routes/items/leaderboards/records/list';
import { ServerItemListHandler } from '../routes/items/list';
import { ServerPreUploadItemHandler } from '../routes/items/preUpload';
import { ServerPreUploadItemActionHandler } from '../routes/items/preUploadAction';
import { ServerSubmitItemActionHandler } from '../routes/items/submitAction';
import { ServerUploadItemHandler } from '../routes/items/upload';
import { ServerUploadItemActionHandler } from '../routes/items/uploadAction';
import { SonolusBase } from './base';
export type SonolusItemGroupOptions<TCreates extends ServerFormsModel, TSearches extends ServerFormsModel, TActions extends ServerFormsModel, TCommunityActions extends ServerFormsModel, TCommunityCommentActions extends ServerFormsModel> = {
    creates?: TCreates;
    searches?: TSearches;
    actions?: TActions;
    community?: {
        actions?: TCommunityActions;
        comment?: {
            actions?: TCommunityCommentActions;
        };
    };
};
export declare class SonolusItemGroup<TConfigurationOptions extends ServerOptionsModel, TItemModel extends ItemModel, TCreates extends ServerFormsModel, TSearches extends ServerFormsModel, TActions extends ServerFormsModel, TCommunityActions extends ServerFormsModel, TCommunityCommentActions extends ServerFormsModel> {
    readonly type: ItemType;
    items: TItemModel[];
    creates: TCreates;
    searches: TSearches;
    actions: TActions;
    infoHandler: ServerItemInfoHandler<TConfigurationOptions, TCreates, TSearches>;
    listHandler: ServerItemListHandler<TConfigurationOptions, TItemModel, TSearches>;
    createHandler?: ServerCreateItemHandler<TConfigurationOptions, TCreates>;
    preUploadHandler?: ServerPreUploadItemHandler<TConfigurationOptions>;
    uploadHandler?: ServerUploadItemHandler<TConfigurationOptions>;
    detailsHandler: ServerItemDetailsHandler<TConfigurationOptions, TSearches, TActions, TItemModel>;
    submitActionHandler?: ServerSubmitItemActionHandler<TConfigurationOptions, TActions>;
    preUploadActionHandler?: ServerPreUploadItemActionHandler<TConfigurationOptions>;
    uploadActionHandler?: ServerUploadItemActionHandler<TConfigurationOptions>;
    community: {
        actions: TCommunityActions;
        infoHandler?: ServerItemCommunityInfoHandler<TConfigurationOptions, TCommunityActions, TCommunityCommentActions>;
        submitHandler?: ServerSubmitItemCommunityActionHandler<TConfigurationOptions, TCommunityActions>;
        preUploadHandler?: ServerPreUploadItemCommunityActionHandler<TConfigurationOptions>;
        uploadHandler?: ServerUploadItemCommunityActionHandler<TConfigurationOptions>;
        comment: {
            actions: TCommunityCommentActions;
            listHandler?: ServerItemCommunityCommentListHandler<TConfigurationOptions, TCommunityCommentActions>;
            submitHandler?: ServerSubmitItemCommunityCommentActionHandler<TConfigurationOptions, TCommunityCommentActions>;
            preUploadHandler?: ServerPreUploadItemCommunityCommentActionHandler<TConfigurationOptions>;
            uploadHandler?: ServerUploadItemCommunityCommentActionHandler<TConfigurationOptions>;
        };
    };
    leaderboard: {
        detailsHandler?: ServerItemLeaderboardDetailsHandler<TConfigurationOptions>;
        record: {
            listHandler?: ServerItemLeaderboardRecordListHandler<TConfigurationOptions>;
            detailsHandler?: ServerItemLeaderboardRecordDetailsHandler<TConfigurationOptions>;
        };
    };
    private readonly _infoRouteHandler;
    private readonly _listRouteHandler;
    private readonly _createRouteHandler;
    private readonly _preUploadRouteHandler;
    private readonly _uploadRouteHandler;
    private readonly _detailsRouteHandler;
    private readonly _submitActionRouteHandler;
    private readonly _preUploadActionRouteHandler;
    private readonly _uploadActionRouteHandler;
    private readonly _communityInfoRouteHandler;
    private readonly _communitySubmitRouteHandler;
    private readonly _communityPreUploadRouteHandler;
    private readonly _communityUploadRouteHandler;
    private readonly _communityCommentListRouteHandler;
    private readonly _communityCommentSubmitRouteHandler;
    private readonly _communityCommentPreUploadRouteHandler;
    private readonly _communityCommentUploadRouteHandler;
    private readonly _leaderboardDetailsRouteHandler;
    private readonly _leaderboardRecordListRouteHandler;
    private readonly _leaderboardRecordDetailsRouteHandler;
    constructor(sonolus: SonolusBase, type: ItemType, options: SonolusItemGroupOptions<TCreates, TSearches, TActions, TCommunityActions, TCommunityCommentActions> | undefined, toItem: ToItem<TItemModel, unknown>, filter: FilterItems<TItemModel>);
}
