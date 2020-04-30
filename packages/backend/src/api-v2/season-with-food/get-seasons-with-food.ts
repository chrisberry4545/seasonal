import { queryPostgres, getSqlQueryV2 } from '../../postgres';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';

export const getSeasonsWithFood = async (
  seasonIndex: number | null,
  regionId: string
): Promise<IHydratedSeason[]> => {
  const result = await queryPostgres<IHydratedSeason>(
    await getSqlQueryV2(`${__dirname}/get-seasons-with-food.sql`),
    [regionId, seasonIndex]
  );
  return result.rows;
};
