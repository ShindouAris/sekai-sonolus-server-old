import { ServerCreateRoomResponse } from '@sonolus/core';
import { ServerFormsModel } from '../../models/server/forms/form';
import { ServerOptionsModel } from '../../models/server/options/option';
import { SonolusMultiplayer } from '../../sonolus/multiplayer';
import { SonolusCtx } from '../ctx';
import { HandlerResponse, SonolusRouteHandler } from '../handler';
export type ServerCreateRoomHandler<TConfigurationOptions extends ServerOptionsModel> = (ctx: SonolusCtx<TConfigurationOptions>) => HandlerResponse<ServerCreateRoomResponse, 401>;
export declare const createServerCreateRoomRouteHandler: <TConfigurationOptions extends ServerOptionsModel, TCreates extends ServerFormsModel>(multiplayer: SonolusMultiplayer<TConfigurationOptions, TCreates>) => SonolusRouteHandler<TConfigurationOptions>;
