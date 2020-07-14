import { ITranslationsCountryName } from '@chrisb-dev/seasonal-shared-models';
import { adminGetDbTranslationsCountryNames } from './admin-get-db-translations-country-names';

export const adminGetAllDbTranslationsCountryNames = async (): Promise<ITranslationsCountryName[]> =>
  adminGetDbTranslationsCountryNames(null);
