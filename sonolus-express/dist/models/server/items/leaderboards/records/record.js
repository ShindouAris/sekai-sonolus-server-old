"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toServerItemLeaderboardRecord = void 0;
const toServerItemLeaderboardRecord = (localize, record) => ({
    name: record.name,
    rank: localize(record.rank),
    player: record.player,
    value: localize(record.value),
});
exports.toServerItemLeaderboardRecord = toServerItemLeaderboardRecord;
