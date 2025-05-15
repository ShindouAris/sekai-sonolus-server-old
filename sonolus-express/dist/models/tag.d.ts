import { DatabaseTag, Tag } from '@sonolus/core';
import { Localize } from '../utils/localization';
export declare const toTag: (localize: Localize, tag: DatabaseTag) => Tag;
export declare const toTags: (localize: Localize, tags: DatabaseTag[]) => Tag[];
