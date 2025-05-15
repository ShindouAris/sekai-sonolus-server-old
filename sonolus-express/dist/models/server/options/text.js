"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toServerTextOption = exports.serializeServerTextOptionValue = exports.normalizeServerTextOptionValue = exports.parseRawServerTextOptionValue = void 0;
const parseRawServerTextOptionValue = (value) => {
    if (typeof value !== 'string')
        return;
    return value;
};
exports.parseRawServerTextOptionValue = parseRawServerTextOptionValue;
const normalizeServerTextOptionValue = (value, option) => value !== undefined && (option.limit === 0 || value.length <= option.limit) ? value : option.def;
exports.normalizeServerTextOptionValue = normalizeServerTextOptionValue;
const serializeServerTextOptionValue = (value) => value;
exports.serializeServerTextOptionValue = serializeServerTextOptionValue;
const toServerTextOption = (localize, query, option) => ({
    query,
    name: localize(option.name),
    description: option.description && localize(option.description),
    required: option.required,
    type: option.type,
    placeholder: localize(option.placeholder),
    def: option.def,
    limit: option.limit,
    shortcuts: option.shortcuts,
});
exports.toServerTextOption = toServerTextOption;
