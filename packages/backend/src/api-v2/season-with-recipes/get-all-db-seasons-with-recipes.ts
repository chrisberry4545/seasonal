import { IHydratedSeason, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { getDbSeasonsWithRecipes } from './get-db-seasons-with-recipes';

export const getAllDbSeasonsWithRecipes = async (
  regionId: string,
  language: LANGUAGES
): Promise<IHydratedSeason[]> => getDbSeasonsWithRecipes(
  null, regionId, language
);
