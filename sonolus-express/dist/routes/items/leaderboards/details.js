"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServerItemLeaderboardDetailsRouteHandler = void 0;
const details_1 = require("../../../models/server/items/leaderboards/details");
const error_1 = require("../../error");
const createServerItemLeaderboardDetailsRouteHandler = (group) => async ({ req, res, localize, ctx }) => {
    if (!group.leaderboard.detailsHandler) {
        res.status(404).end();
        return;
    }
    const itemName = req.params.itemName;
    if (!itemName) {
        res.status(400).end();
        return;
    }
    const leaderboardName = req.params.leaderboardName;
    if (!leaderboardName) {
        res.status(400).end();
        return;
    }
    const response = await group.leaderboard.detailsHandler({
        ...ctx,
        itemName,
        leaderboardName,
    });
    if ((0, error_1.handleError)(response, res, localize))
        return;
    res.json((0, details_1.toServerItemLeaderboardDetails)(localize, response));
};
exports.createServerItemLeaderboardDetailsRouteHandler = createServerItemLeaderboardDetailsRouteHandler;
