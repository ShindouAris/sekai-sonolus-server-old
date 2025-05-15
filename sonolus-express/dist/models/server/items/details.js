"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toServerItemDetails = void 0;
const form_1 = require("../../server/forms/form");
const section_1 = require("../../server/items/section");
const leaderboard_1 = require("./leaderboards/leaderboard");
const toServerItemDetails = (sonolus, localize, toItem, details, searches, actions) => ({
    item: toItem(sonolus, localize, details.item),
    description: details.description && localize(details.description),
    actions: (0, form_1.toServerForms)(localize, details.actions, actions),
    hasCommunity: details.hasCommunity,
    leaderboards: details.leaderboards.map((leaderboard) => (0, leaderboard_1.toServerItemLeaderboard)(localize, leaderboard)),
    sections: (0, section_1.toServerItemSections)(sonolus, localize, details.sections, searches),
});
exports.toServerItemDetails = toServerItemDetails;
