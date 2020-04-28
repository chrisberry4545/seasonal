import { queryPostgres, getSqlQueryV2 } from '../postgres';
import { ICountry } from '@chrisb-dev/seasonal-shared-models';

export const adminGetDbCountries = async (
  id: string | null
): Promise<ICountry[]> => {
  const query = await getSqlQueryV2(`${__dirname}/admin-get-countries.sql`);
  const result = await queryPostgres<ICountry>(
    query,
    [id]
  );
  return result.rows;
};
