"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toServerToggleOption = exports.serializeServerToggleOptionValue = exports.normalizeServerToggleOptionValue = exports.parseRawServerToggleOptionValue = void 0;
const parseRawServerToggleOptionValue = (value) => {
    if (typeof value !== 'string')
        return;
    return value !== '0';
};
exports.parseRawServerToggleOptionValue = parseRawServerToggleOptionValue;
const normalizeServerToggleOptionValue = (value, option) => value ?? option.def;
exports.normalizeServerToggleOptionValue = normalizeServerToggleOptionValue;
const serializeServerToggleOptionValue = (value) => `${+value}`;
exports.serializeServerToggleOptionValue = serializeServerToggleOptionValue;
const toServerToggleOption = (localize, query, option) => ({
    query,
    name: localize(option.name),
    description: option.description && localize(option.description),
    required: option.required,
    type: option.type,
    def: option.def,
});
exports.toServerToggleOption = toServerToggleOption;
