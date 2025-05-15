"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toServerItemLeaderboardRecordDetails = void 0;
const replay_1 = require("../../../../items/replay");
const toServerItemLeaderboardRecordDetails = (sonolus, localize, details) => ({
    replays: details.replays.map((replay) => (0, replay_1.toReplayItem)(sonolus, localize, replay)),
});
exports.toServerItemLeaderboardRecordDetails = toServerItemLeaderboardRecordDetails;
