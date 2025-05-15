"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServerInfoRouteHandler = exports.createDefaultServerInfoHandler = void 0;
const info_1 = require("../models/server/info");
const error_1 = require("./error");
const createDefaultServerInfoHandler = (sonolus) => () => ({
    title: sonolus.title,
    description: sonolus.description,
    buttons: [
        ...[
            'post',
            'playlist',
            'level',
            'replay',
            'skin',
            'background',
            'effect',
            'particle',
            'engine',
        ]
            .filter((type) => sonolus[type].items.length)
            .map((type) => ({ type })),
        { type: 'configuration' },
    ],
    configuration: {
        options: sonolus.configuration.options,
    },
    banner: sonolus.banner,
});
exports.createDefaultServerInfoHandler = createDefaultServerInfoHandler;
const createServerInfoRouteHandler = (sonolus) => async ({ res, localize, ctx }) => {
    const response = await sonolus.serverInfoHandler(ctx);
    if ((0, error_1.handleError)(response, res, localize))
        return;
    res.json((0, info_1.toServerInfo)(localize, response, sonolus.configuration.options));
};
exports.createServerInfoRouteHandler = createServerInfoRouteHandler;
