"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServerItemDetailsRouteHandler = exports.createDefaultServerItemDetailsHandler = void 0;
const core_1 = require("@sonolus/core");
const details_1 = require("../../models/server/items/details");
const error_1 = require("../error");
const createDefaultServerItemDetailsHandler = (group) => ({ itemName }) => {
    const item = group.items.find(({ name }) => name === itemName);
    if (!item)
        return 404;
    const index = group.items.indexOf(item);
    return {
        item,
        description: item.description,
        actions: group.actions,
        hasCommunity: false,
        leaderboards: [],
        sections: [
            {
                title: { en: core_1.Text.Recommended },
                icon: core_1.Icon.Star,
                itemType: group.type,
                items: group.items.slice(index + 1, index + 6),
            },
        ],
    };
};
exports.createDefaultServerItemDetailsHandler = createDefaultServerItemDetailsHandler;
const createServerItemDetailsRouteHandler = (sonolus, group, toItem) => async ({ req, res, localize, ctx }) => {
    const itemName = req.params.itemName;
    if (!itemName) {
        res.status(400).end();
        return;
    }
    const response = await group.detailsHandler({ ...ctx, itemName });
    if ((0, error_1.handleError)(response, res, localize))
        return;
    res.json((0, details_1.toServerItemDetails)(sonolus, localize, toItem, response, group.searches, group.actions));
};
exports.createServerItemDetailsRouteHandler = createServerItemDetailsRouteHandler;
