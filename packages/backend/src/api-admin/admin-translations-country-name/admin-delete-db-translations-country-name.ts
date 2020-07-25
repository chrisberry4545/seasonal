import { queryPostgres, getSqlQuery } from '../../postgres';
import { ITranslationsCountryName } from '@chrisb-dev/seasonal-shared-models';

export const adminDeleteDbTranslationsCountryName = async (
  id: string
): Promise<ITranslationsCountryName> => {
  const query = await getSqlQuery(`${__dirname}/admin-delete-translations-country-name.sql`);
  const result = await queryPostgres<ITranslationsCountryName>(
    query,
    [id]
  );
  return result.rows && result.rows[0];
};
