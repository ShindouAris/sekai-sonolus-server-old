"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toServerSelectOption = exports.serializeServerSelectOptionValue = exports.normalizeServerSelectOptionValue = exports.parseRawServerSelectOptionValue = void 0;
const parseRawServerSelectOptionValue = (value, option) => {
    if (typeof value !== 'string')
        return;
    return option.values[value] ? value : undefined;
};
exports.parseRawServerSelectOptionValue = parseRawServerSelectOptionValue;
const normalizeServerSelectOptionValue = (value, option) => value ?? option.def;
exports.normalizeServerSelectOptionValue = normalizeServerSelectOptionValue;
const serializeServerSelectOptionValue = (value) => value;
exports.serializeServerSelectOptionValue = serializeServerSelectOptionValue;
const toServerSelectOption = (localize, query, option) => ({
    query,
    name: localize(option.name),
    description: option.description && localize(option.description),
    required: option.required,
    type: option.type,
    def: option.def,
    values: Object.entries(option.values).map(([name, title]) => ({
        name,
        title: localize(title),
    })),
});
exports.toServerSelectOption = toServerSelectOption;
