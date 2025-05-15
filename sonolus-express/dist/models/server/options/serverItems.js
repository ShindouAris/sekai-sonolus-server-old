"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toServerServerItemsOption = exports.serializeServerServerItemsOptionValue = exports.normalizeServerServerItemsOptionValue = exports.parseRawServerServerItemsOptionValue = void 0;
const typebox_1 = require("@sinclair/typebox");
const sil_1 = require("../../../schemas/sil");
const json_1 = require("../../../utils/json");
const parseRawServerServerItemsOptionValue = (value) => {
    if (typeof value !== 'string')
        return;
    return (0, json_1.parse)(value, typebox_1.Type.Array(sil_1.silSchema));
};
exports.parseRawServerServerItemsOptionValue = parseRawServerServerItemsOptionValue;
const normalizeServerServerItemsOptionValue = (value, option) => value !== undefined && (option.limit === 0 || value.length <= option.limit) ? value : option.def;
exports.normalizeServerServerItemsOptionValue = normalizeServerServerItemsOptionValue;
const serializeServerServerItemsOptionValue = (value) => JSON.stringify(value);
exports.serializeServerServerItemsOptionValue = serializeServerServerItemsOptionValue;
const toServerServerItemsOption = (localize, query, option) => ({
    query,
    name: localize(option.name),
    description: option.description && localize(option.description),
    required: option.required,
    type: option.type,
    itemType: option.itemType,
    def: option.def,
    allowOtherServers: option.allowOtherServers,
    limit: option.limit,
});
exports.toServerServerItemsOption = toServerServerItemsOption;
