"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServerAuthenticateRouteHandler = void 0;
const core_1 = require("@sonolus/core");
const node_crypto_1 = require("node:crypto");
const authenticate_1 = require("../schemas/server/authenticate");
const json_1 = require("../utils/json");
const error_1 = require("./error");
const createServerAuthenticateRouteHandler = (sonolus) => async ({ req, res, localize, ctx }) => {
    if (!sonolus.authenticateHandler) {
        res.status(404).end();
        return;
    }
    const body = req.body;
    if (!(body instanceof Buffer)) {
        res.status(400).end();
        return;
    }
    const request = (0, json_1.parse)(body, authenticate_1.authenticateServerRequestSchema);
    if (!request) {
        res.status(400).end();
        return;
    }
    if (request.address !== sonolus.address) {
        res.status(400).end();
        return;
    }
    if (request.time + 60 * 1000 < Date.now()) {
        res.status(400).end();
        return;
    }
    const signature = req.headers['sonolus-signature'];
    if (typeof signature !== 'string') {
        res.status(400).end();
        return;
    }
    const signaturePublicKey = await (0, core_1.getSignaturePublicKey)();
    const result = await node_crypto_1.webcrypto.subtle.verify({ name: 'ECDSA', hash: 'SHA-256' }, signaturePublicKey, Buffer.from(signature, 'base64'), body);
    if (!result) {
        res.status(400).end();
        return;
    }
    const response = await sonolus.authenticateHandler({
        ...ctx,
        userProfile: request.userProfile,
    });
    if ((0, error_1.handleError)(response, res, localize))
        return;
    res.json(response);
};
exports.createServerAuthenticateRouteHandler = createServerAuthenticateRouteHandler;
