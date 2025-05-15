"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toServerSliderOption = exports.serializeServerSliderOptionValue = exports.normalizeServerSliderOptionValue = exports.parseRawServerSliderOptionValue = void 0;
const parseRawServerSliderOptionValue = (value) => {
    if (typeof value !== 'string')
        return;
    const parsed = +value;
    if (Number.isNaN(parsed))
        return;
    return parsed;
};
exports.parseRawServerSliderOptionValue = parseRawServerSliderOptionValue;
const normalizeServerSliderOptionValue = (value, option) => value !== undefined && value >= option.min && value <= option.max ? value : option.def;
exports.normalizeServerSliderOptionValue = normalizeServerSliderOptionValue;
const serializeServerSliderOptionValue = (value) => `${value}`;
exports.serializeServerSliderOptionValue = serializeServerSliderOptionValue;
const toServerSliderOption = (localize, query, option) => ({
    query,
    name: localize(option.name),
    description: option.description && localize(option.description),
    required: option.required,
    type: option.type,
    def: option.def,
    min: option.min,
    max: option.max,
    step: option.step,
    unit: option.unit && localize(option.unit),
});
exports.toServerSliderOption = toServerSliderOption;
