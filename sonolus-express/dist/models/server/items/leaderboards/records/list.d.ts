import { ServerItemLeaderboardRecordList } from '@sonolus/core';
import { Localize } from '../../../../../utils/localization';
import { ServerItemLeaderboardRecordModel } from './record';
export type ServerItemLeaderboardRecordListModel = {
    pageCount: number;
    cursor?: string;
    records: ServerItemLeaderboardRecordModel[];
};
export declare const toServerItemLeaderboardRecordList: (localize: Localize, list: ServerItemLeaderboardRecordListModel) => ServerItemLeaderboardRecordList;
