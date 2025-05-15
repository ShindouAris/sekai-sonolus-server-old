import { Srl } from '../../core/srl';
import { LocalizationText } from '../localization';
import { DatabaseTag } from '../tag';
export interface DatabaseEffectItem {
    name: string;
    version: 5;
    title: LocalizationText;
    subtitle: LocalizationText;
    author: LocalizationText;
    tags: DatabaseTag[];
    description?: LocalizationText;
    thumbnail: Srl;
    data: Srl;
    audio: Srl;
}
