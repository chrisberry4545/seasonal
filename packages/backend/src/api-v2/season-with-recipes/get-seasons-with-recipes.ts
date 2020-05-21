import { queryPostgres, getSqlQuery } from '../../postgres';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';

export const getSeasonsWithRecipes = async (
  seasonIndex: number | null,
  regionId: string
): Promise<IHydratedSeason[]> => {
  const result = await queryPostgres<IHydratedSeason>(
    await getSqlQuery(`${__dirname}/get-seasons-with-recipes.sql`),
    [regionId, seasonIndex]
  );
  return result.rows;
};
