import { queryPostgres, getSqlQuery } from '../../postgres';
import { ITranslationsSeasonName } from '@chrisb-dev/seasonal-shared-models';

export const adminDeleteDbTranslationsSeasonName = async (
  id: string
): Promise<ITranslationsSeasonName> => {
  const query = await getSqlQuery(`${__dirname}/admin-delete-translations-season-name.sql`);
  const result = await queryPostgres<ITranslationsSeasonName>(
    query,
    [id]
  );
  return result.rows && result.rows[0];
};
