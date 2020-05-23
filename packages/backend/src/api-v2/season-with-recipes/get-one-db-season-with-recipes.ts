import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { getDbSeasonsWithRecipes } from './get-db-seasons-with-recipes';

export const getOneDbSeasonWithRecipes = async (
  seasonIndex: number,
  regionId: string
): Promise<IHydratedSeason | undefined> => {
  const result = await getDbSeasonsWithRecipes(seasonIndex, regionId);
  return result && result[0];
};
