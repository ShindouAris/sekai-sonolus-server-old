"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseServerInfoSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const srl_1 = require("../srl");
const localizationText_1 = require("./localizationText");
exports.databaseServerInfoSchema = typebox_1.Type.Object({
    title: localizationText_1.localizationTextSchema,
    description: typebox_1.Type.Optional(localizationText_1.localizationTextSchema),
    banner: typebox_1.Type.Optional(srl_1.srlSchema),
});
