"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverSubmitItemActionRequestSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.serverSubmitItemActionRequestSchema = typebox_1.Type.Object({
    values: typebox_1.Type.String(),
});
