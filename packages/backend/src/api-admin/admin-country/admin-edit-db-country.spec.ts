import * as postgres from '../../postgres';
import { ICountry } from '@chrisb-dev/seasonal-shared-models';
import { QueryResult } from 'pg';
import { adminEditDbCountry } from './admin-edit-db-country';

describe('adminEditDbCountry', () => {
  let mockGetSqlQuery: jest.SpyInstance;
  let mockQueryPostgres: jest.SpyInstance;
  const country = {
    bounds: [
      [0, 0],
      [50, 50]
    ],
    id: 'id',
    name: 'test'
  } as ICountry;
  const sqlQuery = 'sql-query';
  const queryResult = {
    rows: [{}]
  } as QueryResult<ICountry>;
  let result: ICountry;

  beforeEach(async () => {
    mockGetSqlQuery = jest.spyOn(postgres, 'getSqlQuery')
      .mockResolvedValue(sqlQuery);
    mockGetSqlQuery.mockClear();
    mockQueryPostgres = jest.spyOn(postgres, 'queryPostgres')
      .mockResolvedValue(queryResult);
    mockQueryPostgres.mockClear();
    result = await adminEditDbCountry(country);
  });

  test('calls getSqlQuery with the correct value', () =>
    expect(mockGetSqlQuery).toHaveBeenCalledWith(`${__dirname}/admin-edit-country.sql`));

  test('calls queryPostgres with the correct values', () =>
    expect(mockQueryPostgres).toHaveBeenCalledWith(
      sqlQuery,
      [country.id, country.name, country.bounds]
    ));

  test('returns the expected result', () => expect(result).toBe(queryResult.rows[0]));

});
