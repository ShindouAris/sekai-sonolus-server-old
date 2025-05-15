"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateServerRequestSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const userProfile_1 = require("../service/userProfile");
exports.authenticateServerRequestSchema = typebox_1.Type.Object({
    type: typebox_1.Type.Literal('authenticateServer'),
    address: typebox_1.Type.String(),
    time: typebox_1.Type.Number(),
    userProfile: userProfile_1.serviceUserProfileSchema,
});
