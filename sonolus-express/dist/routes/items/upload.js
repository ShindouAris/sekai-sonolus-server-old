"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServerUploadItemRouteHandler = void 0;
const extract_1 = require("../../utils/extract");
const error_1 = require("../error");
const createServerUploadItemRouteHandler = (group) => async ({ req, res, localize, ctx }) => {
    if (!group.uploadHandler) {
        res.status(404).end();
        return;
    }
    const key = (0, extract_1.extractString)(req.headers['sonolus-upload-key']);
    if (key === undefined) {
        res.status(400).end();
        return;
    }
    const files = req.files;
    if (!Array.isArray(files)) {
        res.status(400).end();
        return;
    }
    const response = await group.uploadHandler({ ...ctx, key, files });
    if ((0, error_1.handleError)(response, res, localize))
        return;
    res.json(response);
};
exports.createServerUploadItemRouteHandler = createServerUploadItemRouteHandler;
