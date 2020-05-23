import * as postgres from '../../postgres';
import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared-models';
import { QueryResult } from 'pg';
import { adminDeleteDbCountryFoodNameMap } from './admin-delete-db-country-food-name-map';

describe('adminDeleteDbCountryFoodNameMap', () => {
  let mockGetSqlQuery: jest.SpyInstance;
  let mockQueryPostgres: jest.SpyInstance;
  const id = 'id';
  const sqlQuery = 'sql-query';
  const queryResult = {
    rows: [{}]
  } as QueryResult<ICountryFoodNameMap>;
  let result: ICountryFoodNameMap;

  beforeEach(async () => {
    mockGetSqlQuery = jest.spyOn(postgres, 'getSqlQuery')
      .mockResolvedValue(sqlQuery);
    mockGetSqlQuery.mockClear();
    mockQueryPostgres = jest.spyOn(postgres, 'queryPostgres')
      .mockResolvedValue(queryResult);
    mockQueryPostgres.mockClear();
    result = await adminDeleteDbCountryFoodNameMap(id);
  });

  test('calls getSqlQuery with the correct value', () =>
    expect(mockGetSqlQuery).toHaveBeenCalledWith(`${__dirname}/admin-delete-country-to-food-name-map.sql`));

  test('calls queryPostgres with the correct values', () =>
    expect(mockQueryPostgres).toHaveBeenCalledWith(
      sqlQuery,
      [id]
    ));

  test('returns the expected result', () => expect(result).toBe(queryResult.rows[0]));

});
