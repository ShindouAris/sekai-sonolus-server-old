"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverSubmitLevelResultRequestSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const replay_1 = require("../replay");
exports.serverSubmitLevelResultRequestSchema = typebox_1.Type.Object({
    replay: replay_1.replayItemSchema,
    values: typebox_1.Type.String(),
});
