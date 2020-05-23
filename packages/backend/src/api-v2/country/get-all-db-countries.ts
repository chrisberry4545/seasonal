import { queryPostgres, getSqlQuery } from '../../postgres';
import { ICountry } from '@chrisb-dev/seasonal-shared-models';

export const getAllDbCountries = async (): Promise<ICountry[]> => {
  const getAllCountriesQuery = await getSqlQuery(`${__dirname}/get-all-db-countries.sql`);
  const result = await queryPostgres<ICountry>(getAllCountriesQuery);
  return result.rows;
};
