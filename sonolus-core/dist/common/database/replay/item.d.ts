import { Srl } from '../../core/srl';
import { LocalizationText } from '../localization';
import { DatabaseTag } from '../tag';
export interface DatabaseReplayItem {
    name: string;
    version: 1;
    title: LocalizationText;
    subtitle: LocalizationText;
    author: LocalizationText;
    tags: DatabaseTag[];
    description?: LocalizationText;
    level: string;
    data: Srl;
    configuration: Srl;
}
