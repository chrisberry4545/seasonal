import { ITranslationsSeasonName } from '@chrisb-dev/seasonal-shared-models';
import { adminGetDbTranslationsSeasonNames } from './admin-get-db-translations-season-names';

export const adminGetOneDbTranslationsSeasonName = async (
  id: string
): Promise<ITranslationsSeasonName | undefined> => {
  const results = await adminGetDbTranslationsSeasonNames(id);
  return results && results[0];
};
