import { ServerInfoModel } from '../models/server/info';
import { ServerOptionsModel } from '../models/server/options/option';
import { SonolusBase } from '../sonolus/base';
import { Sonolus } from '../sonolus/sonolus';
import { SonolusCtx } from './ctx';
import { HandlerResponse, SonolusRouteHandler } from './handler';
export type ServerInfoHandler<TConfigurationOptions extends ServerOptionsModel> = (ctx: SonolusCtx<TConfigurationOptions>) => HandlerResponse<ServerInfoModel<TConfigurationOptions>, 401>;
export declare const createDefaultServerInfoHandler: <TConfigurationOptions extends ServerOptionsModel>(sonolus: SonolusBase & Pick<Sonolus<TConfigurationOptions>, "configuration">) => ServerInfoHandler<TConfigurationOptions>;
export declare const createServerInfoRouteHandler: <TConfigurationOptions extends ServerOptionsModel>(sonolus: SonolusBase & Pick<Sonolus<TConfigurationOptions>, "configuration" | "serverInfoHandler">) => SonolusRouteHandler<TConfigurationOptions>;
