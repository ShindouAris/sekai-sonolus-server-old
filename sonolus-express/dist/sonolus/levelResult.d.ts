import { ServerFormsModel } from '../models/server/forms/form';
import { ServerOptionsModel } from '../models/server/options/option';
import { ServerLevelResultInfoHandler } from '../routes/items/levelResult/info';
import { ServerPreUploadLevelResultHandler } from '../routes/items/levelResult/preUpload';
import { ServerSubmitLevelResultHandler } from '../routes/items/levelResult/submit';
import { ServerUploadLevelResultHandler } from '../routes/items/levelResult/upload';
export type SonolusLevelResultOptions<TSubmits extends ServerFormsModel> = {
    submits?: TSubmits;
};
export declare class SonolusLevelResult<TConfigurationOptions extends ServerOptionsModel, TSubmits extends ServerFormsModel> {
    submits: TSubmits;
    infoHandler: ServerLevelResultInfoHandler<TConfigurationOptions, TSubmits>;
    submitHandler?: ServerSubmitLevelResultHandler<TConfigurationOptions, TSubmits>;
    preUploadHandler?: ServerPreUploadLevelResultHandler<TConfigurationOptions>;
    uploadHandler?: ServerUploadLevelResultHandler<TConfigurationOptions>;
    private readonly _infoRouteHandler;
    private readonly _submitRouteHandler;
    private readonly _preUploadRouteHandler;
    private readonly _uploadRouteHandler;
    constructor(options?: SonolusLevelResultOptions<TSubmits>);
}
