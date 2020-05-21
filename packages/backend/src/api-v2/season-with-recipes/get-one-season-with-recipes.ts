import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { getSeasonsWithRecipes } from './get-seasons-with-recipes';

export const getOneSeasonWithRecipes = async (
  seasonIndex: number,
  regionId: string
): Promise<IHydratedSeason | undefined> => {
  const result = await getSeasonsWithRecipes(seasonIndex, regionId);
  return result && result[0];
};
