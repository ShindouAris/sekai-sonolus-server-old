"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toServerLevelResultInfo = void 0;
const form_1 = require("../../forms/form");
const toServerLevelResultInfo = (localize, info, submits) => ({
    submits: info.submits && (0, form_1.toServerForms)(localize, info.submits, submits),
});
exports.toServerLevelResultInfo = toServerLevelResultInfo;
