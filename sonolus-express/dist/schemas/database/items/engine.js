"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseEngineItemSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const srl_1 = require("../../srl");
const localizationText_1 = require("../localizationText");
const tag_1 = require("../tag");
exports.databaseEngineItemSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    version: typebox_1.Type.Literal(13),
    title: localizationText_1.localizationTextSchema,
    subtitle: localizationText_1.localizationTextSchema,
    author: localizationText_1.localizationTextSchema,
    tags: typebox_1.Type.Array(tag_1.databaseTagSchema),
    description: typebox_1.Type.Optional(localizationText_1.localizationTextSchema),
    skin: typebox_1.Type.String(),
    background: typebox_1.Type.String(),
    effect: typebox_1.Type.String(),
    particle: typebox_1.Type.String(),
    thumbnail: srl_1.srlSchema,
    playData: srl_1.srlSchema,
    watchData: srl_1.srlSchema,
    previewData: srl_1.srlSchema,
    tutorialData: srl_1.srlSchema,
    rom: typebox_1.Type.Optional(srl_1.srlSchema),
    configuration: srl_1.srlSchema,
    meta: typebox_1.Type.Optional(typebox_1.Type.Unknown()),
});
