import { LocalizationText, ServerItemLeaderboard } from '@sonolus/core';
import { Localize } from '../../../../utils/localization';
export type ServerItemLeaderboardModel = {
    name: string;
    title: LocalizationText;
    description?: LocalizationText;
};
export declare const toServerItemLeaderboard: (localize: Localize, leaderboard: ServerItemLeaderboardModel) => ServerItemLeaderboard;
