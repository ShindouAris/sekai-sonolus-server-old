"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toServerTextAreaOption = exports.serializeServerTextAreaOptionValue = exports.normalizeServerTextAreaOptionValue = exports.parseRawServerTextAreaOptionValue = void 0;
const parseRawServerTextAreaOptionValue = (value) => {
    if (typeof value !== 'string')
        return;
    return value;
};
exports.parseRawServerTextAreaOptionValue = parseRawServerTextAreaOptionValue;
const normalizeServerTextAreaOptionValue = (value, option) => value !== undefined && (option.limit === 0 || value.length <= option.limit) ? value : option.def;
exports.normalizeServerTextAreaOptionValue = normalizeServerTextAreaOptionValue;
const serializeServerTextAreaOptionValue = (value) => value;
exports.serializeServerTextAreaOptionValue = serializeServerTextAreaOptionValue;
const toServerTextAreaOption = (localize, query, option) => ({
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
exports.toServerTextAreaOption = toServerTextAreaOption;
