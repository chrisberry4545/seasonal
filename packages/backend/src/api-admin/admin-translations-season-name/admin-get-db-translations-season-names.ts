import { queryPostgres, getSqlQuery } from '../../postgres';
import { ITranslationsSeasonName } from '@chrisb-dev/seasonal-shared-models';

export const adminGetDbTranslationsSeasonNames = async (
  id: string | null
): Promise<ITranslationsSeasonName[]> => {
  const query = await getSqlQuery(`${__dirname}/admin-get-db-translations-season-names.sql`);
  const result = await queryPostgres<ITranslationsSeasonName>(
    query,
    [id]
  );
  return result.rows;
};
