import { ServerJoinRoomResponse, ServiceUserProfile } from '@sonolus/core';
import { ServerFormsModel } from '../../models/server/forms/form';
import { ServerFormsValue } from '../../models/server/forms/value';
import { ServerOptionsModel } from '../../models/server/options/option';
import { SonolusBase } from '../../sonolus';
import { SonolusMultiplayer } from '../../sonolus/multiplayer';
import { SonolusCtx } from '../ctx';
import { HandlerResponse, SonolusRouteHandler } from '../handler';
export type ServerJoinRoomHandler<TConfigurationOptions extends ServerOptionsModel, TCreates extends ServerFormsModel> = (ctx: SonolusCtx<TConfigurationOptions> & {
    itemName: string;
    userProfile: ServiceUserProfile;
    authentication: Buffer;
    signature: Buffer;
    create?: {
        key: string;
        value: ServerFormsValue<TCreates>;
    };
}) => HandlerResponse<ServerJoinRoomResponse, 400 | 401 | 404>;
export declare const createServerJoinRoomRouteHandler: <TConfigurationOptions extends ServerOptionsModel, TCreates extends ServerFormsModel>(sonolus: SonolusBase, multiplayer: SonolusMultiplayer<TConfigurationOptions, TCreates>) => SonolusRouteHandler<TConfigurationOptions>;
