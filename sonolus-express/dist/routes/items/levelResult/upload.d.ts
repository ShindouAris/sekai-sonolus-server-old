import { ServerUploadLevelResultResponse } from '@sonolus/core';
import { ServerFormsModel } from '../../../models/server/forms/form';
import { ServerOptionsModel } from '../../../models/server/options/option';
import { SonolusLevelResult } from '../../../sonolus/levelResult';
import { SonolusCtx } from '../../ctx';
import { HandlerResponse, SonolusRouteHandler } from '../../handler';
export type ServerUploadLevelResultHandler<TConfigurationOptions extends ServerOptionsModel> = (ctx: SonolusCtx<TConfigurationOptions> & {
    key: string;
    files: Express.Multer.File[];
}) => HandlerResponse<ServerUploadLevelResultResponse, 400 | 401>;
export declare const createServerUploadLevelResultRouteHandler: <TConfigurationOptions extends ServerOptionsModel, TSubmits extends ServerFormsModel>(levelResult: SonolusLevelResult<TConfigurationOptions, TSubmits>) => SonolusRouteHandler<TConfigurationOptions>;
