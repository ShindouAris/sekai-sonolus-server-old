"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServerItemCommunityInfoRouteHandler = void 0;
const info_1 = require("../../../models/server/items/community/info");
const error_1 = require("../../error");
const createServerItemCommunityInfoRouteHandler = (group) => async ({ req, res, localize, ctx }) => {
    if (!group.community.infoHandler) {
        res.status(404).end();
        return;
    }
    const itemName = req.params.itemName;
    if (!itemName) {
        res.status(400).end();
        return;
    }
    const response = await group.community.infoHandler({ ...ctx, itemName });
    if ((0, error_1.handleError)(response, res, localize))
        return;
    res.json((0, info_1.toServerItemCommunityInfo)(localize, response, group.community.actions, group.community.comment.actions));
};
exports.createServerItemCommunityInfoRouteHandler = createServerItemCommunityInfoRouteHandler;
