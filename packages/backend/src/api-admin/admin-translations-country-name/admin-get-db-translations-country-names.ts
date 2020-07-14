import { queryPostgres, getSqlQuery } from '../../postgres';
import { ITranslationsCountryName } from '@chrisb-dev/seasonal-shared-models';

export const adminGetDbTranslationsCountryNames = async (
  id: string | null
): Promise<ITranslationsCountryName[]> => {
  const query = await getSqlQuery(`${__dirname}/admin-get-country-to-food-name-maps.sql`);
  const result = await queryPostgres<ITranslationsCountryName>(
    query,
    [id]
  );
  return result.rows;
};
