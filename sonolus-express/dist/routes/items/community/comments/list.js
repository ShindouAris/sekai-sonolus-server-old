"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServerItemCommunityCommentListRouteHandler = void 0;
const list_1 = require("../../../../models/server/items/community/comments/list");
const error_1 = require("../../../error");
const createServerItemCommunityCommentListRouteHandler = (group) => async ({ req, res, localize, ctx }) => {
    if (!group.community.comment.listHandler) {
        res.status(404).end();
        return;
    }
    const itemName = req.params.itemName;
    if (!itemName) {
        res.status(400).end();
        return;
    }
    const response = await group.community.comment.listHandler({
        ...ctx,
        itemName,
        page: +(req.query.page ?? '') || 0,
        cursor: req.query.cursor && `${req.query.cursor}`,
    });
    if ((0, error_1.handleError)(response, res, localize))
        return;
    res.json((0, list_1.toServerItemCommunityCommentList)(localize, response, group.community.comment.actions));
};
exports.createServerItemCommunityCommentListRouteHandler = createServerItemCommunityCommentListRouteHandler;
