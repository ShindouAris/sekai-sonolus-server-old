import { LocalizationText, ServerItemLeaderboardRecord } from '@sonolus/core';
import { Localize } from '../../../../../utils/localization';
export type ServerItemLeaderboardRecordModel = {
    name: string;
    rank: LocalizationText;
    player: string;
    value: LocalizationText;
};
export declare const toServerItemLeaderboardRecord: (localize: Localize, record: ServerItemLeaderboardRecordModel) => ServerItemLeaderboardRecord;
