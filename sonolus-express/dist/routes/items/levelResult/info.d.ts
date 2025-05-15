import { ServerLevelResultInfoModel } from '../../../models';
import { ServerFormsModel } from '../../../models/server/forms/form';
import { ServerOptionsModel } from '../../../models/server/options/option';
import { SonolusLevelResult } from '../../../sonolus/levelResult';
import { SonolusCtx } from '../../ctx';
import { HandlerResponse, SonolusRouteHandler } from '../../handler';
export type ServerLevelResultInfoHandler<TConfigurationOptions extends ServerOptionsModel, TSubmits extends ServerFormsModel> = (ctx: SonolusCtx<TConfigurationOptions>) => HandlerResponse<ServerLevelResultInfoModel<TSubmits>, 401>;
export declare const createDefaultServerLevelResultInfoHandler: <TConfigurationOptions extends ServerOptionsModel, TSubmits extends ServerFormsModel>(levelResult: SonolusLevelResult<TConfigurationOptions, TSubmits>) => ServerLevelResultInfoHandler<TConfigurationOptions, TSubmits>;
export declare const createServerLevelResultInfoRouteHandler: <TConfigurationOptions extends ServerOptionsModel, TSubmits extends ServerFormsModel>(levelResult: SonolusLevelResult<TConfigurationOptions, TSubmits>) => SonolusRouteHandler<TConfigurationOptions>;
