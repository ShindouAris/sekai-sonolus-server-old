"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServerCreateRoomRouteHandler = void 0;
const createRoom_1 = require("../../schemas/server/multiplayer/createRoom");
const json_1 = require("../../utils/json");
const error_1 = require("../error");
const createServerCreateRoomRouteHandler = (multiplayer) => async ({ req, res, localize, ctx }) => {
    if (!multiplayer.createHandler) {
        res.status(404).end();
        return;
    }
    const body = req.body;
    if (!(body instanceof Buffer)) {
        res.status(400).end();
        return;
    }
    const request = (0, json_1.parse)(body, createRoom_1.serverCreateRoomRequestSchema);
    if (!request) {
        res.status(400).end();
        return;
    }
    const response = await multiplayer.createHandler(ctx);
    if ((0, error_1.handleError)(response, res, localize))
        return;
    res.json(response);
};
exports.createServerCreateRoomRouteHandler = createServerCreateRoomRouteHandler;
