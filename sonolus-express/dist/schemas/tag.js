"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.tagSchema = typebox_1.Type.Object({
    title: typebox_1.Type.String(),
    icon: typebox_1.Type.Optional(typebox_1.Type.String()),
});
