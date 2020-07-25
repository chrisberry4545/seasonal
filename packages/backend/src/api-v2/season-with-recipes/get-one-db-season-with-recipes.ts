import { IHydratedSeason, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { getDbSeasonsWithRecipes } from './get-db-seasons-with-recipes';

export const getOneDbSeasonWithRecipes = async (
  seasonIndex: number,
  regionId: string,
  language?: LANGUAGES
): Promise<IHydratedSeason | undefined> => {
  const result = await getDbSeasonsWithRecipes(seasonIndex, regionId, language);
  return result && result[0];
};
