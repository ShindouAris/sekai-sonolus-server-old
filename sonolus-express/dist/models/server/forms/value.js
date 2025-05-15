"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseServerSearchesValue = exports.serializeRawServerFormsValue = exports.parseServerFormsValue = exports.serializeRawServerFormValue = exports.parseServerFormValue = exports.parseRawServerFormValue = void 0;
const value_1 = require("../options/value");
const parseRawServerFormValue = (value, type, form) => ({
    type,
    rawOptions: (0, value_1.parseRawServerOptionsValue)(value, form.options),
});
exports.parseRawServerFormValue = parseRawServerFormValue;
const parseServerFormValue = (value, type, form) => ({
    type,
    options: (0, value_1.parseServerOptionsValue)(value, form.options),
    rawOptions: (0, value_1.parseRawServerOptionsValue)(value, form.options),
});
exports.parseServerFormValue = parseServerFormValue;
const serializeRawServerFormValue = (value, type, form) => new URLSearchParams([
    ['type', type],
    ...Object.entries(form.options)
        .map(([key, option]) => {
        const rawValue = value.rawOptions[key];
        if (rawValue === undefined)
            return;
        return [key, (0, value_1.serializeRawServerOptionValue)(rawValue, option)];
    })
        .filter((kvp) => kvp !== undefined),
]).toString();
exports.serializeRawServerFormValue = serializeRawServerFormValue;
const parseServerFormsValue = (value, forms) => {
    const type = `${value.type}`;
    const form = forms[type];
    if (!form)
        return;
    return (0, exports.parseServerFormValue)(value, type, form);
};
exports.parseServerFormsValue = parseServerFormsValue;
const serializeRawServerFormsValue = (value, forms) => 
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
(0, exports.serializeRawServerFormValue)(value, value.type, forms[value.type]);
exports.serializeRawServerFormsValue = serializeRawServerFormsValue;
const quickForm = {
    title: {},
    requireConfirmation: false,
    options: {
        keywords: {
            name: {},
            required: false,
            type: 'text',
            placeholder: {},
            def: '',
            limit: 0,
            shortcuts: [],
        },
    },
};
const parseServerSearchesValue = (value, searches) => {
    const type = `${value.type}`;
    if (type === 'quick')
        return (0, exports.parseServerFormValue)(value, 'quick', quickForm);
    return (0, exports.parseServerFormsValue)(value, searches) ?? (0, exports.parseServerFormValue)({}, 'quick', quickForm);
};
exports.parseServerSearchesValue = parseServerSearchesValue;
