"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServerCreateItemRouteHandler = void 0;
const value_1 = require("../../models/server/forms/value");
const create_1 = require("../../schemas/server/items/create");
const json_1 = require("../../utils/json");
const error_1 = require("../error");
const createServerCreateItemRouteHandler = (group) => async ({ req, res, localize, ctx }) => {
    if (!group.createHandler) {
        res.status(404).end();
        return;
    }
    const body = req.body;
    if (!(body instanceof Buffer)) {
        res.status(400).end();
        return;
    }
    const request = (0, json_1.parse)(body, create_1.serverCreateItemRequestSchema);
    if (!request) {
        res.status(400).end();
        return;
    }
    const value = (0, value_1.parseServerFormsValue)(Object.fromEntries(new URLSearchParams(request.values)), group.creates);
    if (!value) {
        res.status(400).end();
        return;
    }
    const response = await group.createHandler({ ...ctx, value });
    if ((0, error_1.handleError)(response, res, localize))
        return;
    res.json(response);
};
exports.createServerCreateItemRouteHandler = createServerCreateItemRouteHandler;
