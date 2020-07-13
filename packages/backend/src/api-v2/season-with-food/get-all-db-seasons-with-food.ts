import { IHydratedSeason, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { getDbSeasonsWithFood } from './get-db-seasons-with-food';

export const getAllDbSeasonsWithFood = async (
  regionId: string,
  language: LANGUAGES
): Promise<IHydratedSeason[]> => getDbSeasonsWithFood(null, regionId, language);
