"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SonolusMultiplayer = void 0;
const create_1 = require("../routes/multiplayer/create");
const join_1 = require("../routes/multiplayer/join");
class SonolusMultiplayer {
    constructor(sonolus, getCreates) {
        this._getCreates = getCreates;
        this._createRouteHandler = (0, create_1.createServerCreateRoomRouteHandler)(this);
        this._joinRouteHandler = (0, join_1.createServerJoinRoomRouteHandler)(sonolus, this);
    }
    get creates() {
        return this._getCreates();
    }
}
exports.SonolusMultiplayer = SonolusMultiplayer;
