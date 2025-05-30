import { Srl } from '../../core/srl';
import { LocalizationText } from '../localization';
import { DatabaseTag } from '../tag';
export interface DatabaseBackgroundItem {
    name: string;
    version: 2;
    title: LocalizationText;
    subtitle: LocalizationText;
    author: LocalizationText;
    tags: DatabaseTag[];
    description?: LocalizationText;
    thumbnail: Srl;
    data: Srl;
    image: Srl;
    configuration: Srl;
}
