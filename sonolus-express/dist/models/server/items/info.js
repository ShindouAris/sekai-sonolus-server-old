"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toServerItemInfo = void 0;
const form_1 = require("../../server/forms/form");
const section_1 = require("../../server/items/section");
const toServerItemInfo = (sonolus, localize, info, creates, searches) => ({
    creates: info.creates && (0, form_1.toServerForms)(localize, info.creates, creates),
    searches: info.searches && (0, form_1.toServerForms)(localize, info.searches, searches),
    sections: (0, section_1.toServerItemSections)(sonolus, localize, info.sections, searches),
    banner: info.banner,
});
exports.toServerItemInfo = toServerItemInfo;
