import { queryPostgres, getSqlQuery } from '../../postgres';
import { ITranslationsRegionName } from '@chrisb-dev/seasonal-shared-models';

export const adminDeleteDbTranslationsRegionName = async (
  id: string
): Promise<ITranslationsRegionName> => {
  const query = await getSqlQuery(`${__dirname}/admin-delete-translations-region-name.sql`);
  const result = await queryPostgres<ITranslationsRegionName>(
    query,
    [id]
  );
  return result.rows && result.rows[0];
};
