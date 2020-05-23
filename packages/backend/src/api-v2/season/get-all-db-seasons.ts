import { queryPostgres, getSqlQuery } from '../../postgres';
import { IBaseSeason } from '@chrisb-dev/seasonal-shared-models';

export const getAllDbSeasons = async (): Promise<IBaseSeason[]> => {
  const getAllSeasonsQuery = await getSqlQuery(`${__dirname}/get-all-db-seasons.sql`);
  const result = await queryPostgres<IBaseSeason>(getAllSeasonsQuery);
  return result.rows;
};
