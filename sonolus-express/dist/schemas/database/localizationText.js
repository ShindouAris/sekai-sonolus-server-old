"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localizationTextSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.localizationTextSchema = typebox_1.Type.Record(typebox_1.Type.String(), typebox_1.Type.String());
