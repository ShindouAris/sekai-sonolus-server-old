import { ServerFormsModel } from '../models/server/forms/form';
import { ServerOptionsModel } from '../models/server/options/option';
import { ServerCreateRoomHandler } from '../routes/multiplayer/create';
import { ServerJoinRoomHandler } from '../routes/multiplayer/join';
import { SonolusBase } from './base';
export declare class SonolusMultiplayer<TConfigurationOptions extends ServerOptionsModel, TCreates extends ServerFormsModel> {
    private readonly _getCreates;
    createHandler?: ServerCreateRoomHandler<TConfigurationOptions>;
    joinHandler?: ServerJoinRoomHandler<TConfigurationOptions, TCreates>;
    private readonly _createRouteHandler;
    private readonly _joinRouteHandler;
    constructor(sonolus: SonolusBase, getCreates: () => TCreates);
    get creates(): TCreates;
}
