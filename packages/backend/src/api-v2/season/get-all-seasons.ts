import { queryPostgres, getSqlQueryV2 } from '../../postgres';
import { IBaseSeason } from '@chrisb-dev/seasonal-shared-models';

export const getAllSeasons = async (): Promise<IBaseSeason[]> => {
  const getAllSeasonsQuery = await getSqlQueryV2(`${__dirname}/get-all-seasons.sql`);
  const result = await queryPostgres<IBaseSeason>(getAllSeasonsQuery);
  return result.rows;
};
