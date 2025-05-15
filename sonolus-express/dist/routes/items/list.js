"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateItems = exports.createServerItemListRouteHandler = exports.createDefaultServerItemListHandler = void 0;
const value_1 = require("../../models/server/forms/value");
const list_1 = require("../../models/server/items/list");
const error_1 = require("../error");
const createDefaultServerItemListHandler = (group, filter) => ({ search, page }) => {
    const items = filter(group.items, search.type === 'quick' ? `${search.options.keywords}` : '');
    return {
        searches: group.searches,
        ...(0, exports.paginateItems)(items, page),
    };
};
exports.createDefaultServerItemListHandler = createDefaultServerItemListHandler;
const createServerItemListRouteHandler = (sonolus, group, toItem) => async ({ req, res, localize, ctx }) => {
    const response = await group.listHandler({
        ...ctx,
        search: (0, value_1.parseServerSearchesValue)(req.query, group.searches),
        page: +(req.query.page ?? '') || 0,
        cursor: req.query.cursor && `${req.query.cursor}`,
    });
    if ((0, error_1.handleError)(response, res, localize))
        return;
    res.json((0, list_1.toServerItemList)(sonolus, localize, toItem, response, group.searches));
};
exports.createServerItemListRouteHandler = createServerItemListRouteHandler;
const paginateItems = (items, page, perPage = 20) => ({
    pageCount: Math.ceil(items.length / perPage),
    items: items.slice(page * perPage, (page + 1) * perPage),
});
exports.paginateItems = paginateItems;
