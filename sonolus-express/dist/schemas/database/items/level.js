"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseLevelItemSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const srl_1 = require("../../srl");
const localizationText_1 = require("../localizationText");
const tag_1 = require("../tag");
const databaseUseItemSchema = typebox_1.Type.Union([
    typebox_1.Type.Object({ useDefault: typebox_1.Type.Literal(true) }),
    typebox_1.Type.Object({ useDefault: typebox_1.Type.Literal(false), item: typebox_1.Type.String() }),
]);
exports.databaseLevelItemSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    version: typebox_1.Type.Literal(1),
    rating: typebox_1.Type.Number(),
    title: localizationText_1.localizationTextSchema,
    artists: localizationText_1.localizationTextSchema,
    author: localizationText_1.localizationTextSchema,
    tags: typebox_1.Type.Array(tag_1.databaseTagSchema),
    description: typebox_1.Type.Optional(localizationText_1.localizationTextSchema),
    engine: typebox_1.Type.String(),
    useSkin: databaseUseItemSchema,
    useBackground: databaseUseItemSchema,
    useEffect: databaseUseItemSchema,
    useParticle: databaseUseItemSchema,
    cover: srl_1.srlSchema,
    bgm: srl_1.srlSchema,
    preview: typebox_1.Type.Optional(srl_1.srlSchema),
    data: srl_1.srlSchema,
    meta: typebox_1.Type.Optional(typebox_1.Type.Unknown()),
});
