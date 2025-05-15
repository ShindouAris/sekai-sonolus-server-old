"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toServerServerItemOption = exports.serializeServerServerItemOptionValue = exports.normalizeServerServerItemOptionValue = exports.parseRawServerServerItemOptionValue = void 0;
const typebox_1 = require("@sinclair/typebox");
const sil_1 = require("../../../schemas/sil");
const json_1 = require("../../../utils/json");
const parseRawServerServerItemOptionValue = (value) => {
    if (typeof value !== 'string')
        return;
    return (0, json_1.parse)(value, typebox_1.Type.Union([sil_1.silSchema, typebox_1.Type.Null()]));
};
exports.parseRawServerServerItemOptionValue = parseRawServerServerItemOptionValue;
const normalizeServerServerItemOptionValue = (value, option) => (value !== undefined ? value : option.def);
exports.normalizeServerServerItemOptionValue = normalizeServerServerItemOptionValue;
const serializeServerServerItemOptionValue = (value) => JSON.stringify(value);
exports.serializeServerServerItemOptionValue = serializeServerServerItemOptionValue;
const toServerServerItemOption = (localize, query, option) => ({
    query,
    name: localize(option.name),
    description: option.description && localize(option.description),
    required: option.required,
    type: option.type,
    itemType: option.itemType,
    def: option.def,
    allowOtherServers: option.allowOtherServers,
});
exports.toServerServerItemOption = toServerServerItemOption;
