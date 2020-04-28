import { queryPostgres, getSqlQueryV2 } from '../postgres';
import { ICountry } from '@chrisb-dev/seasonal-shared-models';

export const getAllDbCountries = async (): Promise<ICountry[]> => {
  const getAllCountriesQuery = await getSqlQueryV2(`${__dirname}/get-countries.sql`);
  const result = await queryPostgres<ICountry>(getAllCountriesQuery);
  return result.rows;
};
