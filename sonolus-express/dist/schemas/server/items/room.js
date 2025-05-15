"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomItemSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const srl_1 = require("../../srl");
const tag_1 = require("../../tag");
exports.roomItemSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    title: typebox_1.Type.String(),
    subtitle: typebox_1.Type.String(),
    master: typebox_1.Type.String(),
    tags: typebox_1.Type.Array(tag_1.tagSchema),
    cover: typebox_1.Type.Optional(srl_1.srlSchema),
    bgm: typebox_1.Type.Optional(srl_1.srlSchema),
    preview: typebox_1.Type.Optional(srl_1.srlSchema),
});
