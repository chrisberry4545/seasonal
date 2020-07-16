import { ITranslationsSeasonName } from '@chrisb-dev/seasonal-shared-models';
import { adminGetDbTranslationsSeasonNames } from './admin-get-db-translations-season-names';

export const adminGetAllDbTranslationsSeasonNames = async (): Promise<ITranslationsSeasonName[]> =>
  adminGetDbTranslationsSeasonNames(null);
