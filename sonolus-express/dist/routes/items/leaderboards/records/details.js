"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServerItemLeaderboardRecordDetailsRouteHandler = void 0;
const details_1 = require("../../../../models/server/items/leaderboards/records/details");
const error_1 = require("../../../error");
const createServerItemLeaderboardRecordDetailsRouteHandler = (sonolus, group) => async ({ req, res, localize, ctx }) => {
    if (!group.leaderboard.record.detailsHandler) {
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
    const recordName = req.params.recordName;
    if (!recordName) {
        res.status(400).end();
        return;
    }
    const response = await group.leaderboard.record.detailsHandler({
        ...ctx,
        itemName,
        leaderboardName,
        recordName,
    });
    if ((0, error_1.handleError)(response, res, localize))
        return;
    res.json((0, details_1.toServerItemLeaderboardRecordDetails)(sonolus, localize, response));
};
exports.createServerItemLeaderboardRecordDetailsRouteHandler = createServerItemLeaderboardRecordDetailsRouteHandler;
