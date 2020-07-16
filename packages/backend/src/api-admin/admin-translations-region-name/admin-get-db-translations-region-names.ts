import { queryPostgres, getSqlQuery } from '../../postgres';
import { ITranslationsRegionName } from '@chrisb-dev/seasonal-shared-models';

export const adminGetDbTranslationsRegionNames = async (
  id: string | null
): Promise<ITranslationsRegionName[]> => {
  const query = await getSqlQuery(`${__dirname}/admin-get-db-translations-region-names.sql`);
  const result = await queryPostgres<ITranslationsRegionName>(
    query,
    [id]
  );
  return result.rows;
};
