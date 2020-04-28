import { queryPostgres, getSqlQueryV2 } from '../postgres';
import { ICountry } from '@chrisb-dev/seasonal-shared-models';

export const adminEditDbCountry = async (
  item: ICountry
): Promise<ICountry> => {
  const query = await getSqlQueryV2(`${__dirname}/admin-edit-country.sql`);
  const result = await queryPostgres<ICountry>(
    query,
    [
      item.id,
      item.name
    ]
  );
  return result.rows && result.rows[0];
};
