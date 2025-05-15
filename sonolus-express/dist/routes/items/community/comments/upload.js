"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServerUploadItemCommunityCommentActionRouteHandler = void 0;
const extract_1 = require("../../../../utils/extract");
const error_1 = require("../../../error");
const createServerUploadItemCommunityCommentActionRouteHandler = (group) => async ({ req, res, localize, ctx }) => {
    if (!group.community.comment.uploadHandler) {
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
    const key = (0, extract_1.extractString)(req.headers['sonolus-upload-key']);
    if (key === undefined) {
        res.status(400).end();
        return;
    }
    const files = req.files;
    if (!Array.isArray(files)) {
        res.status(400).end();
        return;
    }
    const response = await group.community.comment.uploadHandler({
        ...ctx,
        itemName,
        commentName,
        key,
        files,
    });
    if ((0, error_1.handleError)(response, res, localize))
        return;
    res.json(response);
};
exports.createServerUploadItemCommunityCommentActionRouteHandler = createServerUploadItemCommunityCommentActionRouteHandler;
