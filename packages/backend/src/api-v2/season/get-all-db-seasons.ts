import { queryPostgres, getSqlQuery } from '../../postgres';
import { IBaseSeason, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';

export const getAllDbSeasons = async (
  language: LANGUAGES
): Promise<IBaseSeason[]> => {
  const getAllSeasonsQuery = await getSqlQuery(`${__dirname}/get-all-db-seasons.sql`);
  const result = await queryPostgres<IBaseSeason>(getAllSeasonsQuery, [language]);
  return result.rows;
};
