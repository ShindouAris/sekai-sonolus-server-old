"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
const handleError = (response, res, localize) => {
    if (typeof response === 'number') {
        res.status(response).end();
        return true;
    }
    if (Array.isArray(response)) {
        const [code, text] = response;
        const body = {
            message: localize(text),
        };
        res.status(code).json(body);
        return true;
    }
    return false;
};
exports.handleError = handleError;
