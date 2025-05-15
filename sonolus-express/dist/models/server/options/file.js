"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toServerFileOption = exports.serializeServerFileOptionValue = exports.normalizeServerFileOptionValue = exports.parseRawServerFileOptionValue = void 0;
const parseRawServerFileOptionValue = (value) => {
    if (typeof value !== 'string')
        return;
    return value;
};
exports.parseRawServerFileOptionValue = parseRawServerFileOptionValue;
const normalizeServerFileOptionValue = (value, option) => value ?? option.def;
exports.normalizeServerFileOptionValue = normalizeServerFileOptionValue;
const serializeServerFileOptionValue = (value) => value;
exports.serializeServerFileOptionValue = serializeServerFileOptionValue;
const toServerFileOption = (localize, query, option) => ({
    query,
    name: localize(option.name),
    description: option.description && localize(option.description),
    required: option.required,
    type: option.type,
    def: option.def,
});
exports.toServerFileOption = toServerFileOption;
