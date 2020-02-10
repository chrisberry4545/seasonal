import { queryPostgres, getSqlQuery } from '../postgres';
import { ICountry } from '@chrisb-dev/seasonal-shared';

export const adminCreateDbCountry = async (
  item: ICountry
): Promise<ICountry> => {
  const query = await getSqlQuery('admin-create-country.sql');
  const result = await queryPostgres<ICountry>(
    query,
    [item.name]
  );
  return result.rows && result.rows[0];
};

const adminGetCountries = async (
  id: string | null
): Promise<ICountry[]> => {
  const query = await getSqlQuery('admin-get-countries.sql');
  const result = await queryPostgres<ICountry>(
    query,
    [id]
  );
  return result.rows;
};

export const adminGetAllDbCountries = async (): Promise<ICountry[]> =>
  adminGetCountries(null);

export const adminGetOneDbCountry = async (
  id: string
): Promise<ICountry> => {
  const results = await adminGetCountries(id);
  return results && results[0];
};

export const adminEditDbCountry = async (
  item: ICountry
): Promise<ICountry> => {
  const query = await getSqlQuery('admin-edit-country.sql');
  const result = await queryPostgres<ICountry>(
    query,
    [
      item.id,
      item.name
    ]
  );
  return result.rows && result.rows[0];
};

export const adminDeleteDbCountry = async (
  id: string
): Promise<ICountry> => {
  const query = await getSqlQuery('admin-delete-country.sql');
  const result = await queryPostgres<ICountry>(
    query,
    [id]
  );
  return result.rows && result.rows[0];
};
