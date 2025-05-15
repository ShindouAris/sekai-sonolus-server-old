"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServerJoinRoomRouteHandler = void 0;
const core_1 = require("@sonolus/core");
const node_crypto_1 = require("node:crypto");
const value_1 = require("../../models/server/forms/value");
const joinRoom_1 = require("../../schemas/server/multiplayer/joinRoom");
const json_1 = require("../../utils/json");
const error_1 = require("../error");
const createServerJoinRoomRouteHandler = (sonolus, multiplayer) => async ({ req, res, localize, ctx }) => {
    if (!multiplayer.joinHandler) {
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
    const request = (0, json_1.parse)(body, joinRoom_1.serverJoinRoomRequestSchema);
    if (!request) {
        res.status(400).end();
        return;
    }
    if (request.address !== sonolus.address) {
        res.status(400).end();
        return;
    }
    if (request.room !== itemName) {
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
    const signatureBuffer = Buffer.from(signature, 'base64');
    const result = await node_crypto_1.webcrypto.subtle.verify({ name: 'ECDSA', hash: 'SHA-256' }, signaturePublicKey, signatureBuffer, body);
    if (!result) {
        res.status(400).end();
        return;
    }
    const key = req.headers['sonolus-room-key'];
    const value = (0, value_1.parseServerFormsValue)(req.query, multiplayer.creates);
    const response = await multiplayer.joinHandler({
        ...ctx,
        itemName,
        userProfile: request.userProfile,
        authentication: body,
        signature: signatureBuffer,
        create: typeof key === 'string' && value ? { key, value } : undefined,
    });
    if ((0, error_1.handleError)(response, res, localize))
        return;
    res.json(response);
};
exports.createServerJoinRoomRouteHandler = createServerJoinRoomRouteHandler;
