"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServerLevelResultInfoRouteHandler = exports.createDefaultServerLevelResultInfoHandler = void 0;
const info_1 = require("../../../models/server/items/levelResult/info");
const error_1 = require("../../error");
const createDefaultServerLevelResultInfoHandler = (levelResult) => () => ({
    submits: levelResult.submits,
});
exports.createDefaultServerLevelResultInfoHandler = createDefaultServerLevelResultInfoHandler;
const createServerLevelResultInfoRouteHandler = (levelResult) => async ({ res, localize, ctx }) => {
    const response = await levelResult.infoHandler(ctx);
    if ((0, error_1.handleError)(response, res, localize))
        return;
    res.json((0, info_1.toServerLevelResultInfo)(localize, response, levelResult.submits));
};
exports.createServerLevelResultInfoRouteHandler = createServerLevelResultInfoRouteHandler;
