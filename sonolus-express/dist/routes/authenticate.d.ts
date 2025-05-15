import { ServerAuthenticateResponse, ServiceUserProfile } from '@sonolus/core';
import { ServerOptionsModel } from '../models/server/options/option';
import { SonolusBase } from '../sonolus/base';
import { Sonolus } from '../sonolus/sonolus';
import { SonolusCtx } from './ctx';
import { HandlerResponse, SonolusRouteHandler } from './handler';
export type ServerAuthenticateHandler<TConfigurationOptions extends ServerOptionsModel> = (ctx: SonolusCtx<TConfigurationOptions> & {
    userProfile: ServiceUserProfile;
}) => HandlerResponse<ServerAuthenticateResponse, 401>;
export declare const createServerAuthenticateRouteHandler: <TConfigurationOptions extends ServerOptionsModel>(sonolus: SonolusBase & Pick<Sonolus<TConfigurationOptions>, "authenticateHandler">) => SonolusRouteHandler<TConfigurationOptions>;
