"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toServerItemLeaderboard = void 0;
const toServerItemLeaderboard = (localize, leaderboard) => ({
    name: leaderboard.name,
    title: localize(leaderboard.title),
    description: leaderboard.description && localize(leaderboard.description),
});
exports.toServerItemLeaderboard = toServerItemLeaderboard;
