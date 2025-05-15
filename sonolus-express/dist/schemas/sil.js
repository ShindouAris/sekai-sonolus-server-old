"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.silSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.silSchema = typebox_1.Type.Object({
    address: typebox_1.Type.String(),
    name: typebox_1.Type.String(),
});
