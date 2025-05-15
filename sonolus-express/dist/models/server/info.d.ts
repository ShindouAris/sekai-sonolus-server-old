import { LocalizationText, ServerInfo, ServerInfoButton, Srl } from '@sonolus/core';
import { Localize } from '../../utils/localization';
import { PickOptions, ServerOptionsModel } from './options/option';
export type ServerInfoModel<T extends ServerOptionsModel> = {
    title: LocalizationText;
    description?: LocalizationText;
    buttons: ServerInfoButton[];
    configuration: {
        options: PickOptions<T>;
    };
    banner?: Srl;
};
export declare const toServerInfo: <T extends ServerOptionsModel>(localize: Localize, serverInfo: ServerInfoModel<T>, options: T) => ServerInfo;
