import { ReplayItem, ServerSubmitLevelResultResponse } from '@sonolus/core';
import { ServerFormsModel } from '../../../models/server/forms/form';
import { ServerFormsValue } from '../../../models/server/forms/value';
import { ServerOptionsModel } from '../../../models/server/options/option';
import { SonolusLevelResult } from '../../../sonolus/levelResult';
import { SonolusCtx } from '../../ctx';
import { HandlerResponse, SonolusRouteHandler } from '../../handler';
export type ServerSubmitLevelResultHandler<TConfigurationOptions extends ServerOptionsModel, TSubmits extends ServerFormsModel> = (ctx: SonolusCtx<TConfigurationOptions> & {
    replay: ReplayItem;
    value: ServerFormsValue<TSubmits>;
}) => HandlerResponse<ServerSubmitLevelResultResponse, 400 | 401>;
export declare const createServerSubmitLevelResultRouteHandler: <TConfigurationOptions extends ServerOptionsModel, TSubmits extends ServerFormsModel>(levelResult: SonolusLevelResult<TConfigurationOptions, TSubmits>) => SonolusRouteHandler<TConfigurationOptions>;
