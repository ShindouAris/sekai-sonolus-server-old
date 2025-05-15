"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServerSubmitItemCommunityCommentActionRouteHandler = void 0;
const value_1 = require("../../../../models/server/forms/value");
const submitItemCommunityActionRequest_1 = require("../../../../schemas/server/items/community/submitItemCommunityActionRequest");
const json_1 = require("../../../../utils/json");
const error_1 = require("../../../error");
const createServerSubmitItemCommunityCommentActionRouteHandler = (group) => async ({ req, res, localize, ctx }) => {
    if (!group.community.comment.submitHandler) {
        res.status(404).end();
        return;
    }
    const itemName = req.params.itemName;
    if (!itemName) {
        res.status(400).end();
        return;
    }
    const commentName = req.params.commentName;
    if (!commentName) {
        res.status(400).end();
        return;
    }
    const body = req.body;
    if (!(body instanceof Buffer)) {
        res.status(400).end();
        return;
    }
    const request = (0, json_1.parse)(body, submitItemCommunityActionRequest_1.serverSubmitItemCommunityActionRequestSchema);
    if (!request) {
        res.status(400).end();
        return;
    }
    const value = (0, value_1.parseServerFormsValue)(Object.fromEntries(new URLSearchParams(request.values)), group.community.comment.actions);
    if (!value) {
        res.status(400).end();
        return;
    }
    const response = await group.community.comment.submitHandler({
        ...ctx,
        itemName,
        commentName,
        value,
    });
    if ((0, error_1.handleError)(response, res, localize))
        return;
    res.json(response);
};
exports.createServerSubmitItemCommunityCommentActionRouteHandler = createServerSubmitItemCommunityCommentActionRouteHandler;
