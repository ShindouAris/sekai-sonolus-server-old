"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseTagSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const localizationText_1 = require("./localizationText");
exports.databaseTagSchema = typebox_1.Type.Object({
    title: localizationText_1.localizationTextSchema,
    icon: typebox_1.Type.Optional(typebox_1.Type.String()),
});
