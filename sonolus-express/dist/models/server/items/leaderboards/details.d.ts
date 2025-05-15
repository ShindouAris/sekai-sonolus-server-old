import { ServerItemLeaderboardDetails } from '@sonolus/core';
import { Localize } from '../../../../utils/localization';
import { ServerItemLeaderboardRecordModel } from './records/record';
export type ServerItemLeaderboardDetailsModel = {
    topRecords: ServerItemLeaderboardRecordModel[];
};
export declare const toServerItemLeaderboardDetails: (localize: Localize, details: ServerItemLeaderboardDetailsModel) => ServerItemLeaderboardDetails;
