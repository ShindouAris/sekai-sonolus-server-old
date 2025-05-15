"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseEffectItemSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const srl_1 = require("../../srl");
const localizationText_1 = require("../localizationText");
const tag_1 = require("../tag");
exports.databaseEffectItemSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    version: typebox_1.Type.Literal(5),
    title: localizationText_1.localizationTextSchema,
    subtitle: localizationText_1.localizationTextSchema,
    author: localizationText_1.localizationTextSchema,
    tags: typebox_1.Type.Array(tag_1.databaseTagSchema),
    description: typebox_1.Type.Optional(localizationText_1.localizationTextSchema),
    thumbnail: srl_1.srlSchema,
    data: srl_1.srlSchema,
    audio: srl_1.srlSchema,
    meta: typebox_1.Type.Optional(typebox_1.Type.Unknown()),
});
