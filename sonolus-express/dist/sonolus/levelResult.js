"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SonolusLevelResult = void 0;
const info_1 = require("../routes/items/levelResult/info");
const preUpload_1 = require("../routes/items/levelResult/preUpload");
const submit_1 = require("../routes/items/levelResult/submit");
const upload_1 = require("../routes/items/levelResult/upload");
class SonolusLevelResult {
    constructor(options = {}) {
        this.submits = options.submits ?? {};
        this.infoHandler = (0, info_1.createDefaultServerLevelResultInfoHandler)(this);
        this._infoRouteHandler = (0, info_1.createServerLevelResultInfoRouteHandler)(this);
        this._submitRouteHandler = (0, submit_1.createServerSubmitLevelResultRouteHandler)(this);
        this._preUploadRouteHandler = (0, preUpload_1.createServerPreUploadLevelResultRouteHandler)(this);
        this._uploadRouteHandler = (0, upload_1.createServerUploadLevelResultRouteHandler)(this);
    }
}
exports.SonolusLevelResult = SonolusLevelResult;
