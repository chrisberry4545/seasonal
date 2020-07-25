import { ITranslationsBadgeName } from '@chrisb-dev/seasonal-shared-models';
import { adminGetDbTranslationsBadgeNames } from './admin-get-db-translations-badge-names';

export const adminGetOneDbTranslationsBadgeName = async (
  id: string
): Promise<ITranslationsBadgeName | undefined> => {
  const results = await adminGetDbTranslationsBadgeNames(id);
  return results && results[0];
};
