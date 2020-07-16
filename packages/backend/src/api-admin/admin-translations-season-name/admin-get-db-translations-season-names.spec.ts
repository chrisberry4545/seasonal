import * as postgres from '../../postgres';
import { ITranslationsSeasonName } from '@chrisb-dev/seasonal-shared-models';
import { QueryResult } from 'pg';
import { adminGetDbTranslationsSeasonNames } from './admin-get-db-translations-season-names';

describe('adminGetDbTranslationsSeasonNames', () => {
  let mockGetSqlQuery: jest.SpyInstance;
  let mockQueryPostgres: jest.SpyInstance;
  const id = 'id';
  const sqlQuery = 'sql-query';
  const queryResult = {
    rows: [{}]
  } as QueryResult<ITranslationsSeasonName>;
  let result: ITranslationsSeasonName[];

  beforeEach(async () => {
    mockGetSqlQuery = jest.spyOn(postgres, 'getSqlQuery')
      .mockResolvedValue(sqlQuery);
    mockGetSqlQuery.mockClear();
    mockQueryPostgres = jest.spyOn(postgres, 'queryPostgres')
      .mockResolvedValue(queryResult);
    mockQueryPostgres.mockClear();
    result = await adminGetDbTranslationsSeasonNames(id);
  });

  test('calls getSqlQuery with the correct value', () =>
    expect(mockGetSqlQuery).toHaveBeenCalledWith(`${__dirname}/admin-get-db-translations-season-names.sql`));

  test('calls queryPostgres with the correct values', () =>
    expect(mockQueryPostgres).toHaveBeenCalledWith(
      sqlQuery,
      [id]
    ));

  test('returns the expected result', () => expect(result).toBe(queryResult.rows));

});
