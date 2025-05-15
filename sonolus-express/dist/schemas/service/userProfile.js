"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceUserProfileSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.serviceUserProfileSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Unsafe(typebox_1.Type.String()),
    handle: typebox_1.Type.String(),
    name: typebox_1.Type.String(),
    avatarForegroundColor: typebox_1.Type.String(),
    avatarBackgroundColor: typebox_1.Type.String(),
    aboutMe: typebox_1.Type.String(),
    favorites: typebox_1.Type.Array(typebox_1.Type.String()),
});
