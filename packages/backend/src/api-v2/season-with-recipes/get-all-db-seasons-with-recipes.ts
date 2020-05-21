import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { getDbSeasonsWithRecipes } from './get-db-seasons-with-recipes';

export const getAllDbSeasonsWithRecipes = async (
  regionId: string
): Promise<IHydratedSeason[]> => getDbSeasonsWithRecipes(null, regionId);
