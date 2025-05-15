"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toServerItemLeaderboardDetails = void 0;
const record_1 = require("./records/record");
const toServerItemLeaderboardDetails = (localize, details) => ({
    topRecords: details.topRecords.map((record) => (0, record_1.toServerItemLeaderboardRecord)(localize, record)),
});
exports.toServerItemLeaderboardDetails = toServerItemLeaderboardDetails;
