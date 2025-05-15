"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playlistItemSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const srl_1 = require("../../srl");
const tag_1 = require("../../tag");
const level_1 = require("./level");
exports.playlistItemSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    source: typebox_1.Type.Optional(typebox_1.Type.String()),
    version: typebox_1.Type.Literal(1),
    title: typebox_1.Type.String(),
    subtitle: typebox_1.Type.String(),
    author: typebox_1.Type.String(),
    tags: typebox_1.Type.Array(tag_1.tagSchema),
    levels: typebox_1.Type.Array(level_1.levelItemSchema),
    thumbnail: typebox_1.Type.Optional(srl_1.srlSchema),
});
