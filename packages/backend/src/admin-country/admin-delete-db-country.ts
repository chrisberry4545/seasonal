import { queryPostgres, getSqlQueryV2 } from '../postgres';
import { ICountry } from '@chrisb-dev/seasonal-shared-models';

export const adminDeleteDbCountry = async (
  id: string
): Promise<ICountry> => {
  const query = await getSqlQueryV2(`${__dirname}/admin-delete-country.sql`);
  const result = await queryPostgres<ICountry>(
    query,
    [id]
  );
  return result.rows && result.rows[0];
};
