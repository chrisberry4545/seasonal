import * as postgres from '../../postgres';
import { ITranslationsCountryName } from '@chrisb-dev/seasonal-shared-models';
import { QueryResult } from 'pg';
import { adminGetDbTranslationsCountryNames } from './admin-get-db-translations-country-names';

describe('adminGetDbTranslationsCountryNames', () => {
  let mockGetSqlQuery: jest.SpyInstance;
  let mockQueryPostgres: jest.SpyInstance;
  const id = 'id';
  const sqlQuery = 'sql-query';
  const queryResult = {
    rows: [{}]
  } as QueryResult<ITranslationsCountryName>;
  let result: ITranslationsCountryName[];

  beforeEach(async () => {
    mockGetSqlQuery = jest.spyOn(postgres, 'getSqlQuery')
      .mockResolvedValue(sqlQuery);
    mockGetSqlQuery.mockClear();
    mockQueryPostgres = jest.spyOn(postgres, 'queryPostgres')
      .mockResolvedValue(queryResult);
    mockQueryPostgres.mockClear();
    result = await adminGetDbTranslationsCountryNames(id);
  });

  test('calls getSqlQuery with the correct value', () =>
    expect(mockGetSqlQuery).toHaveBeenCalledWith(`${__dirname}/admin-get-country-to-food-name-maps.sql`));

  test('calls queryPostgres with the correct values', () =>
    expect(mockQueryPostgres).toHaveBeenCalledWith(
      sqlQuery,
      [id]
    ));

  test('returns the expected result', () => expect(result).toBe(queryResult.rows));

});
