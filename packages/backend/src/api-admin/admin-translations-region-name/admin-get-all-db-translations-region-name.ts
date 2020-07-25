import { ITranslationsRegionName } from '@chrisb-dev/seasonal-shared-models';
import { adminGetDbTranslationsRegionNames } from './admin-get-db-translations-region-names';

export const adminGetAllDbTranslationsRegionNames = async (): Promise<ITranslationsRegionName[]> =>
  adminGetDbTranslationsRegionNames(null);
