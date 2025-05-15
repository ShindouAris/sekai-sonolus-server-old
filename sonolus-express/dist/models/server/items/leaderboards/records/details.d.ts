import { ServerItemLeaderboardRecordDetails } from '@sonolus/core';
import { SonolusBase } from '../../../../../sonolus/base';
import { Localize } from '../../../../../utils/localization';
import { ReplayItemModel } from '../../../../items/replay';
export type ServerItemLeaderboardRecordDetailsModel = {
    replays: ReplayItemModel[];
};
export declare const toServerItemLeaderboardRecordDetails: (sonolus: SonolusBase, localize: Localize, details: ServerItemLeaderboardRecordDetailsModel) => ServerItemLeaderboardRecordDetails;
