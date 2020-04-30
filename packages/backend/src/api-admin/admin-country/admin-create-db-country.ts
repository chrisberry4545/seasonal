import { ICountry } from '@chrisb-dev/seasonal-shared-models';
import { getSqlQuery, queryPostgres } from '../../postgres';

export const adminCreateDbCountry = async (
  item: ICountry
): Promise<ICountry> => {
  const query = await getSqlQuery(`${__dirname}/admin-create-country.sql`);
  const result = await queryPostgres<ICountry>(
    query,
    [item.name]
  );
  return result.rows && result.rows[0];
};
