import { Srl } from '../../core/srl';
import { LocalizationText } from '../localization';
import { DatabaseTag } from '../tag';
export interface DatabaseParticleItem {
    name: string;
    version: 3;
    title: LocalizationText;
    subtitle: LocalizationText;
    author: LocalizationText;
    tags: DatabaseTag[];
    description?: LocalizationText;
    thumbnail: Srl;
    data: Srl;
    texture: Srl;
}
