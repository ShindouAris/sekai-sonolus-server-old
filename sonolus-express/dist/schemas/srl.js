"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.srlSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.srlSchema = typebox_1.Type.Object({
    hash: typebox_1.Type.Optional(typebox_1.Type.Union([typebox_1.Type.String(), typebox_1.Type.Null()])),
    url: typebox_1.Type.Optional(typebox_1.Type.Union([typebox_1.Type.String(), typebox_1.Type.Null()])),
});
