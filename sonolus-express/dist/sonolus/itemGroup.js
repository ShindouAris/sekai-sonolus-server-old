"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SonolusItemGroup = void 0;
const list_1 = require("../routes/items/community/comments/list");
const preUpload_1 = require("../routes/items/community/comments/preUpload");
const submit_1 = require("../routes/items/community/comments/submit");
const upload_1 = require("../routes/items/community/comments/upload");
const info_1 = require("../routes/items/community/info");
const preUpload_2 = require("../routes/items/community/preUpload");
const submit_2 = require("../routes/items/community/submit");
const upload_2 = require("../routes/items/community/upload");
const create_1 = require("../routes/items/create");
const details_1 = require("../routes/items/details");
const info_2 = require("../routes/items/info");
const details_2 = require("../routes/items/leaderboards/details");
const details_3 = require("../routes/items/leaderboards/records/details");
const list_2 = require("../routes/items/leaderboards/records/list");
const list_3 = require("../routes/items/list");
const preUpload_3 = require("../routes/items/preUpload");
const preUploadAction_1 = require("../routes/items/preUploadAction");
const submitAction_1 = require("../routes/items/submitAction");
const upload_3 = require("../routes/items/upload");
const uploadAction_1 = require("../routes/items/uploadAction");
class SonolusItemGroup {
    constructor(sonolus, type, options = {}, toItem, filter) {
        this.type = type;
        this.items = [];
        this.creates = options.creates ?? {};
        this.searches = options.searches ?? {};
        this.actions = options.actions ?? {};
        this.infoHandler = (0, info_2.createDefaultServerItemInfoHandler)(sonolus, this);
        this.listHandler = (0, list_3.createDefaultServerItemListHandler)(this, filter);
        this.detailsHandler = (0, details_1.createDefaultServerItemDetailsHandler)(this);
        this.community = {
            actions: options.community?.actions ?? {},
            comment: {
                actions: options.community?.comment?.actions ?? {},
            },
        };
        this.leaderboard = {
            record: {},
        };
        this._infoRouteHandler = (0, info_2.createServerItemInfoRouteHandler)(sonolus, this);
        this._listRouteHandler = (0, list_3.createServerItemListRouteHandler)(sonolus, this, toItem);
        this._createRouteHandler = (0, create_1.createServerCreateItemRouteHandler)(this);
        this._preUploadRouteHandler = (0, preUpload_3.createServerPreUploadItemRouteHandler)(this);
        this._uploadRouteHandler = (0, upload_3.createServerUploadItemRouteHandler)(this);
        this._detailsRouteHandler = (0, details_1.createServerItemDetailsRouteHandler)(sonolus, this, toItem);
        this._submitActionRouteHandler = (0, submitAction_1.createServerSubmitItemActionRouteHandler)(this);
        this._preUploadActionRouteHandler = (0, preUploadAction_1.createServerPreUploadItemActionRouteHandler)(this);
        this._uploadActionRouteHandler = (0, uploadAction_1.createServerUploadItemActionRouteHandler)(this);
        this._communityInfoRouteHandler = (0, info_1.createServerItemCommunityInfoRouteHandler)(this);
        this._communitySubmitRouteHandler = (0, submit_2.createServerSubmitItemCommunityActionRouteHandler)(this);
        this._communityPreUploadRouteHandler =
            (0, preUpload_2.createServerPreUploadItemCommunityActionRouteHandler)(this);
        this._communityUploadRouteHandler = (0, upload_2.createServerUploadItemCommunityActionRouteHandler)(this);
        this._communityCommentListRouteHandler =
            (0, list_1.createServerItemCommunityCommentListRouteHandler)(this);
        this._communityCommentSubmitRouteHandler =
            (0, submit_1.createServerSubmitItemCommunityCommentActionRouteHandler)(this);
        this._communityCommentPreUploadRouteHandler =
            (0, preUpload_1.createServerPreUploadItemCommunityCommentActionRouteHandler)(this);
        this._communityCommentUploadRouteHandler =
            (0, upload_1.createServerUploadItemCommunityCommentActionRouteHandler)(this);
        this._leaderboardDetailsRouteHandler = (0, details_2.createServerItemLeaderboardDetailsRouteHandler)(this);
        this._leaderboardRecordListRouteHandler =
            (0, list_2.createServerItemLeaderboardRecordListRouteHandler)(this);
        this._leaderboardRecordDetailsRouteHandler =
            (0, details_3.createServerItemLeaderboardRecordDetailsRouteHandler)(sonolus, this);
    }
}
exports.SonolusItemGroup = SonolusItemGroup;
