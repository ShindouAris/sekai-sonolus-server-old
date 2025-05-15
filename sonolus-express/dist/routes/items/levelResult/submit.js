"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServerSubmitLevelResultRouteHandler = void 0;
const value_1 = require("../../../models/server/forms/value");
const submit_1 = require("../../../schemas/server/items/levelResult/submit");
const json_1 = require("../../../utils/json");
const error_1 = require("../../error");
const createServerSubmitLevelResultRouteHandler = (levelResult) => async ({ req, res, localize, ctx }) => {
    if (!levelResult.submitHandler) {
        res.status(404).end();
        return;
    }
    const body = req.body;
    if (!(body instanceof Buffer)) {
        res.status(400).end();
        return;
    }
    const request = (0, json_1.parse)(body, submit_1.serverSubmitLevelResultRequestSchema);
    if (!request) {
        res.status(400).end();
        return;
    }
    const value = (0, value_1.parseServerFormsValue)(Object.fromEntries(new URLSearchParams(request.values)), levelResult.submits);
    if (!value) {
        res.status(400).end();
        return;
    }
    const response = await levelResult.submitHandler({ ...ctx, replay: request.replay, value });
    if ((0, error_1.handleError)(response, res, localize))
        return;
    res.json(response);
};
exports.createServerSubmitLevelResultRouteHandler = createServerSubmitLevelResultRouteHandler;
