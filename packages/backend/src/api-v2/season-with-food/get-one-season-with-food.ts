import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { getSeasonsWithFood } from './get-seasons-with-food';

export const getOneSeasonWithFood = async (
  seasonIndex: number,
  regionId: string
): Promise<IHydratedSeason | undefined> => {
  const result = await getSeasonsWithFood(seasonIndex, regionId);
  return result && result[0];
};
