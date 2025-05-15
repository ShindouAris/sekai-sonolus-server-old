"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toServerForms = exports.toServerForm = void 0;
const option_1 = require("../options/option");
const toServerForm = (localize, type, form) => ({
    type,
    title: localize(form.title),
    icon: form.icon,
    description: form.description && localize(form.description),
    help: form.help && localize(form.help),
    requireConfirmation: form.requireConfirmation,
    options: Object.entries(form.options).map(([query, option]) => (0, option_1.toServerOption)(localize, query, option)),
});
exports.toServerForm = toServerForm;
const toServerForms = (localize, pick, forms) => Object.entries(pick)
    .map(([type, value]) => 
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
value && (0, exports.toServerForm)(localize, type, value === true ? forms[type] : value))
    .filter((form) => !!form);
exports.toServerForms = toServerForms;
