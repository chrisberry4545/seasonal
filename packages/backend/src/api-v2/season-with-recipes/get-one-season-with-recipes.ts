import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { getSeasonsWithRecipes } from './get-seasons-with-recipes';

export const getOneSeasonsWithRecipes = async (
  seasonIndex: number,
  regionId: string
): Promise<IHydratedSeason> => {
  const result = await getSeasonsWithRecipes(seasonIndex, regionId);
  return result && result[0];
};
