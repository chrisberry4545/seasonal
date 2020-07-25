import { ITranslationsCountryName } from '@chrisb-dev/seasonal-shared-models';
import { adminGetDbTranslationsCountryNames } from './admin-get-db-translations-country-names';

export const adminGetOneDbTranslationsCountryName = async (
  id: string
): Promise<ITranslationsCountryName | undefined> => {
  const results = await adminGetDbTranslationsCountryNames(id);
  return results && results[0];
};
