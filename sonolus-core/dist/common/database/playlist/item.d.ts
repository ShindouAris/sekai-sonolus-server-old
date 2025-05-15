import { Srl } from '../../core/srl';
import { LocalizationText } from '../localization';
import { DatabaseTag } from '../tag';
export interface DatabasePlaylistItem {
    name: string;
    version: 1;
    title: LocalizationText;
    subtitle: LocalizationText;
    author: LocalizationText;
    tags: DatabaseTag[];
    description?: LocalizationText;
    levels: string[];
    thumbnail?: Srl;
}
