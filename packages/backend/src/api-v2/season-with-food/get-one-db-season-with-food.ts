import { IHydratedSeason, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { getDbSeasonsWithFood } from './get-db-seasons-with-food';

export const getOneDbSeasonWithFood = async (
  seasonIndex: number,
  regionId: string,
  language: LANGUAGES
): Promise<IHydratedSeason | undefined> => {
  const result = await getDbSeasonsWithFood(
    seasonIndex,
    regionId,
    language
  );
  return result && result[0];
};
