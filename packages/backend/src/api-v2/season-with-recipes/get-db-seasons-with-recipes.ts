import { queryPostgres, getSqlQuery } from '../../postgres';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';

export const getDbSeasonsWithRecipes = async (
  seasonIndex: number | null,
  regionId: string
): Promise<IHydratedSeason[]> => {
  const result = await queryPostgres<IHydratedSeason>(
    await getSqlQuery(`${__dirname}/get-db-seasons-with-recipes.sql`),
    [regionId, seasonIndex]
  );
  return result.rows;
};
