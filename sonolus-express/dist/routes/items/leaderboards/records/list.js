"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServerItemLeaderboardRecordListRouteHandler = void 0;
const list_1 = require("../../../../models/server/items/leaderboards/records/list");
const error_1 = require("../../../error");
const createServerItemLeaderboardRecordListRouteHandler = (group) => async ({ req, res, localize, ctx }) => {
    if (!group.leaderboard.record.listHandler) {
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
    const response = await group.leaderboard.record.listHandler({
        ...ctx,
        itemName,
        leaderboardName,
        page: +(req.query.page ?? '') || 0,
        cursor: req.query.cursor && `${req.query.cursor}`,
    });
    if ((0, error_1.handleError)(response, res, localize))
        return;
    res.json((0, list_1.toServerItemLeaderboardRecordList)(localize, response));
};
exports.createServerItemLeaderboardRecordListRouteHandler = createServerItemLeaderboardRecordListRouteHandler;
