import { LocalizationText } from '@sonolus/core';
import { Response } from 'express';
import { Localize } from '../utils';
export type ServerError<E extends number> = E | [E, LocalizationText];
export declare const handleError: <T>(response: T | ServerError<number>, res: Response, localize: Localize) => response is ServerError<number>;
