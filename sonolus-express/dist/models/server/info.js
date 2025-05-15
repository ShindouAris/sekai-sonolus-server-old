"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toServerInfo = void 0;
const option_1 = require("./options/option");
const toServerInfo = (localize, serverInfo, options) => ({
    title: localize(serverInfo.title),
    description: serverInfo.description && localize(serverInfo.description),
    buttons: serverInfo.buttons,
    configuration: {
        options: (0, option_1.toServerOptions)(localize, serverInfo.configuration.options, options),
    },
    banner: serverInfo.banner,
});
exports.toServerInfo = toServerInfo;
