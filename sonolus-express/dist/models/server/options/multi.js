"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toServerMultiOption = exports.serializeServerMultiOptionValue = exports.normalizeServerMultiOptionValue = exports.parseRawServerMultiOptionValue = void 0;
const parseRawServerMultiOptionValue = (value, option) => {
    if (typeof value !== 'string')
        return;
    const names = new Set(value.split(','));
    return Object.fromEntries(Object.keys(option.values).map((name) => [name, names.has(name)]));
};
exports.parseRawServerMultiOptionValue = parseRawServerMultiOptionValue;
const normalizeServerMultiOptionValue = (value, option) => value ?? Object.fromEntries(Object.entries(option.values).map(([name, { def }]) => [name, def]));
exports.normalizeServerMultiOptionValue = normalizeServerMultiOptionValue;
const serializeServerMultiOptionValue = (value) => Object.entries(value)
    .filter(([, value]) => value)
    .map(([name]) => name)
    .join(',');
exports.serializeServerMultiOptionValue = serializeServerMultiOptionValue;
const toServerMultiOption = (localize, query, option) => ({
    query,
    name: localize(option.name),
    description: option.description && localize(option.description),
    required: option.required,
    type: option.type,
    def: Object.values(option.values).map(({ def }) => def),
    values: Object.entries(option.values).map(([name, { title }]) => ({
        name,
        title: localize(title),
    })),
});
exports.toServerMultiOption = toServerMultiOption;
