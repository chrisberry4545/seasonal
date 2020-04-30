import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { getSeasonsWithRecipes } from './get-seasons-with-recipes';

export const getAllSeasonsWithRecipes = async (
  regionId: string
): Promise<IHydratedSeason[]> => getSeasonsWithRecipes(null, regionId);
