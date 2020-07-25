import { ITranslationsBadgeName } from '@chrisb-dev/seasonal-shared-models';
import { adminGetDbTranslationsBadgeNames } from './admin-get-db-translations-badge-names';

export const adminGetAllDbTranslationsBadgeNames = async (): Promise<ITranslationsBadgeName[]> =>
  adminGetDbTranslationsBadgeNames(null);
