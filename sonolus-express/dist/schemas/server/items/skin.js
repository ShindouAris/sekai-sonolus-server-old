"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skinItemSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const srl_1 = require("../../srl");
const tag_1 = require("../../tag");
exports.skinItemSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    source: typebox_1.Type.Optional(typebox_1.Type.Union([typebox_1.Type.String(), typebox_1.Type.Undefined()])),
    version: typebox_1.Type.Literal(4),
    title: typebox_1.Type.String(),
    subtitle: typebox_1.Type.String(),
    author: typebox_1.Type.String(),
    tags: typebox_1.Type.Array(tag_1.tagSchema),
    thumbnail: srl_1.srlSchema,
    data: srl_1.srlSchema,
    texture: srl_1.srlSchema,
});
