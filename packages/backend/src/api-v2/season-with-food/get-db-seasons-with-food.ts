import { queryPostgres, getSqlQuery } from '../../postgres';
import { IHydratedSeason, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';

export const getDbSeasonsWithFood = async (
  seasonIndex: number | null,
  regionId: string,
  language?: LANGUAGES
): Promise<IHydratedSeason[]> => {
  const result = await queryPostgres<IHydratedSeason>(
    await getSqlQuery(`${__dirname}/get-db-seasons-with-food.sql`),
    [regionId, seasonIndex, language]
  );
  return result.rows;
};
