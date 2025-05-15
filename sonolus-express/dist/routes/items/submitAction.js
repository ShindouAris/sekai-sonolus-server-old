"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServerSubmitItemActionRouteHandler = void 0;
const value_1 = require("../../models/server/forms/value");
const submit_1 = require("../../schemas/server/items/submit");
const json_1 = require("../../utils/json");
const error_1 = require("../error");
const createServerSubmitItemActionRouteHandler = (group) => async ({ req, res, localize, ctx }) => {
    if (!group.submitActionHandler) {
        res.status(404).end();
        return;
    }
    const itemName = req.params.itemName;
    if (!itemName) {
        res.status(400).end();
        return;
    }
    const body = req.body;
    if (!(body instanceof Buffer)) {
        res.status(400).end();
        return;
    }
    const request = (0, json_1.parse)(body, submit_1.serverSubmitItemActionRequestSchema);
    if (!request) {
        res.status(400).end();
        return;
    }
    const value = (0, value_1.parseServerFormsValue)(Object.fromEntries(new URLSearchParams(request.values)), group.actions);
    if (!value) {
        res.status(400).end();
        return;
    }
    const response = await group.submitActionHandler({ ...ctx, itemName, value });
    if ((0, error_1.handleError)(response, res, localize))
        return;
    res.json(response);
};
exports.createServerSubmitItemActionRouteHandler = createServerSubmitItemActionRouteHandler;
