"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databasePostItemSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const srl_1 = require("../../srl");
const localizationText_1 = require("../localizationText");
const tag_1 = require("../tag");
exports.databasePostItemSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    version: typebox_1.Type.Literal(1),
    title: localizationText_1.localizationTextSchema,
    time: typebox_1.Type.Number(),
    author: localizationText_1.localizationTextSchema,
    tags: typebox_1.Type.Array(tag_1.databaseTagSchema),
    description: typebox_1.Type.Optional(localizationText_1.localizationTextSchema),
    thumbnail: typebox_1.Type.Optional(srl_1.srlSchema),
    meta: typebox_1.Type.Optional(typebox_1.Type.Unknown()),
});
