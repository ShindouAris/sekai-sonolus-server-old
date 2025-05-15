"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.levelItemSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const srl_1 = require("../../srl");
const tag_1 = require("../../tag");
const background_1 = require("./background");
const effect_1 = require("./effect");
const engine_1 = require("./engine");
const particle_1 = require("./particle");
const skin_1 = require("./skin");
const useItemSchema = (T) => typebox_1.Type.Union([
    typebox_1.Type.Object({
        useDefault: typebox_1.Type.Literal(true),
    }),
    typebox_1.Type.Object({
        useDefault: typebox_1.Type.Literal(false),
        item: T,
    }),
]);
exports.levelItemSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    source: typebox_1.Type.Optional(typebox_1.Type.String()),
    version: typebox_1.Type.Literal(1),
    rating: typebox_1.Type.Number(),
    title: typebox_1.Type.String(),
    artists: typebox_1.Type.String(),
    author: typebox_1.Type.String(),
    tags: typebox_1.Type.Array(tag_1.tagSchema),
    engine: engine_1.engineItemSchema,
    useSkin: useItemSchema(skin_1.skinItemSchema),
    useBackground: useItemSchema(background_1.backgroundItemSchema),
    useEffect: useItemSchema(effect_1.effectItemSchema),
    useParticle: useItemSchema(particle_1.particleItemSchema),
    cover: srl_1.srlSchema,
    bgm: srl_1.srlSchema,
    preview: typebox_1.Type.Optional(srl_1.srlSchema),
    data: srl_1.srlSchema,
});
