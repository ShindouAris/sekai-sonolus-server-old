import { localize } from '@sonolus/core';
import { config } from '../../config.js';
import { mapValues } from '../../utils/object.js';
import { format as _format } from '../../utils/string.js';
export const format = (template, values) => mapValues(template, (locale, template) => _format(template, values.map((value) => localize(value, locale, config.sonolus.fallbackLocale))));
export const join = (separator, values) => mapValues(separator, (locale, separator) => values
    .map((value) => localize(value, locale, config.sonolus.fallbackLocale))
    .join(separator));
