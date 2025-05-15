"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverJoinRoomRequestSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const userProfile_1 = require("../../service/userProfile");
exports.serverJoinRoomRequestSchema = typebox_1.Type.Object({
    type: typebox_1.Type.Literal('authenticateMultiplayer'),
    address: typebox_1.Type.String(),
    room: typebox_1.Type.String(),
    time: typebox_1.Type.Number(),
    userProfile: userProfile_1.serviceUserProfileSchema,
});
