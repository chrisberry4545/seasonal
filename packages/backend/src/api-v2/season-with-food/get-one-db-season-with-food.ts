import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { getDbSeasonsWithFood } from './get-db-seasons-with-food';

export const getOneDbSeasonWithFood = async (
  seasonIndex: number,
  regionId: string
): Promise<IHydratedSeason | undefined> => {
  const result = await getDbSeasonsWithFood(seasonIndex, regionId);
  return result && result[0];
};
