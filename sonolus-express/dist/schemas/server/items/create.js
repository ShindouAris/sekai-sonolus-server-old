"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverCreateItemRequestSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.serverCreateItemRequestSchema = typebox_1.Type.Object({
    values: typebox_1.Type.String(),
});
