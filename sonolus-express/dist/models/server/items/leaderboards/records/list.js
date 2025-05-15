"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toServerItemLeaderboardRecordList = void 0;
const record_1 = require("./record");
const toServerItemLeaderboardRecordList = (localize, list) => ({
    pageCount: list.pageCount,
    cursor: list.cursor,
    records: list.records.map((record) => (0, record_1.toServerItemLeaderboardRecord)(localize, record)),
});
exports.toServerItemLeaderboardRecordList = toServerItemLeaderboardRecordList;
