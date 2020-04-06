import { queryPostgres, getSqlQuery } from '../postgres';
import { IHydratedSeason, IBaseSeason } from '@chrisb-dev/seasonal-shared-models';

export const getAllSeasonData = async (): Promise<IBaseSeason[]> => {
  const getAllSeasonsQuery = await getSqlQuery('get-basic-seasons.sql');
  const result = await queryPostgres<IBaseSeason>(getAllSeasonsQuery);
  return result.rows;
};

const getSeasonDataWithFoodQuery = (): Promise<string> =>
  getSqlQuery('get-seasons-with-food.sql');

export const getSeasonsDataWithFoodBySeasonIndex = async (
  seasonIndex: number,
  regionId?: string
): Promise<IHydratedSeason> => {
  const result = await queryPostgres<IHydratedSeason>(
    await getSeasonDataWithFoodQuery(),
    [regionId, seasonIndex]
  );
  return result.rows[0];
};

export const getAllSeasonDataWithFood = async (
  regionId?: string
): Promise<IHydratedSeason[]> => {
  const result = await queryPostgres<IHydratedSeason>(
    await getSeasonDataWithFoodQuery(),
    [regionId, null]
  );
  return result.rows;
};

const getSeasonDataWithRecipesQuery = () =>
  getSqlQuery('get-seasons-with-recipes.sql');

export const getSeasonsDataWithRecipesBySeasonIndex = async (
  seasonIndex: number,
  regionId?: string
): Promise<IHydratedSeason  > => {
  const result = await queryPostgres<IHydratedSeason>(
    await getSeasonDataWithRecipesQuery(),
    [regionId, seasonIndex]
  );
  return result.rows[0];
};

export const getAllSeasonDataWithRecipes = async (
  regionId?: string
): Promise<IHydratedSeason[]> => {
  const result = await queryPostgres<IHydratedSeason>(
    await getSeasonDataWithRecipesQuery(),
    [regionId, null]
  );
  return result.rows;
};
