"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServerPreUploadItemRouteHandler = void 0;
const extract_1 = require("../../utils/extract");
const error_1 = require("../error");
const createServerPreUploadItemRouteHandler = (group) => async ({ req, res, next, localize, ctx }) => {
    if (!group.preUploadHandler) {
        res.status(404).end();
        return;
    }
    const key = (0, extract_1.extractString)(req.headers['sonolus-upload-key']);
    if (key === undefined) {
        res.status(400).end();
        return;
    }
    const response = await group.preUploadHandler({ ...ctx, key });
    if ((0, error_1.handleError)(response, res, localize))
        return;
    next();
};
exports.createServerPreUploadItemRouteHandler = createServerPreUploadItemRouteHandler;
