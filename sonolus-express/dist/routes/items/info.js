"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServerItemInfoRouteHandler = exports.createDefaultServerItemInfoHandler = void 0;
const core_1 = require("@sonolus/core");
const info_1 = require("../../models/server/items/info");
const error_1 = require("../error");
const createDefaultServerItemInfoHandler = (sonolus, group) => () => ({
    creates: group.creates,
    searches: group.searches,
    sections: [
        {
            title: { en: core_1.Text.Newest },
            itemType: group.type,
            items: group.items.slice(0, 5),
        },
    ],
    banner: sonolus.banner,
});
exports.createDefaultServerItemInfoHandler = createDefaultServerItemInfoHandler;
const createServerItemInfoRouteHandler = (sonolus, group) => async ({ res, localize, ctx }) => {
    const response = await group.infoHandler(ctx);
    if ((0, error_1.handleError)(response, res, localize))
        return;
    res.json((0, info_1.toServerItemInfo)(sonolus, localize, response, group.creates, group.searches));
};
exports.createServerItemInfoRouteHandler = createServerItemInfoRouteHandler;
