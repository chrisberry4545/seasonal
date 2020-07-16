import { ITranslationsRegionName } from '@chrisb-dev/seasonal-shared-models';
import { adminGetDbTranslationsRegionNames } from './admin-get-db-translations-region-names';

export const adminGetOneDbTranslationsRegionName = async (
  id: string
): Promise<ITranslationsRegionName | undefined> => {
  const results = await adminGetDbTranslationsRegionNames(id);
  return results && results[0];
};
