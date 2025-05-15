"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.engineItemSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const srl_1 = require("../../srl");
const tag_1 = require("../../tag");
const background_1 = require("./background");
const effect_1 = require("./effect");
const particle_1 = require("./particle");
const skin_1 = require("./skin");
exports.engineItemSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    source: typebox_1.Type.Optional(typebox_1.Type.String()),
    version: typebox_1.Type.Literal(13),
    title: typebox_1.Type.String(),
    subtitle: typebox_1.Type.String(),
    author: typebox_1.Type.String(),
    tags: typebox_1.Type.Array(tag_1.tagSchema),
    skin: skin_1.skinItemSchema,
    background: background_1.backgroundItemSchema,
    effect: effect_1.effectItemSchema,
    particle: particle_1.particleItemSchema,
    thumbnail: srl_1.srlSchema,
    playData: srl_1.srlSchema,
    watchData: srl_1.srlSchema,
    previewData: srl_1.srlSchema,
    tutorialData: srl_1.srlSchema,
    rom: typebox_1.Type.Optional(srl_1.srlSchema),
    configuration: srl_1.srlSchema,
});
