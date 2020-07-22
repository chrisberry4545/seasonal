import { queryPostgres, getSqlQuery } from '../../postgres';
import { ICountry, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';

export const getAllDbCountries = async (
  language: LANGUAGES
): Promise<ICountry[]> => {
  const getAllCountriesQuery = await getSqlQuery(`${__dirname}/get-all-db-countries.sql`);
  const result = await queryPostgres<ICountry>(getAllCountriesQuery, [language]);
  return result.rows;
};
