import * as postgres from '../../postgres';
import { ITranslationsBadgeName } from '@chrisb-dev/seasonal-shared-models';
import { QueryResult } from 'pg';
import { adminDeleteDbTranslationsBadgeName } from './admin-delete-db-translations-badge-name';

describe('adminDeleteDbTranslationsBadgeName', () => {
  let mockGetSqlQuery: jest.SpyInstance;
  let mockQueryPostgres: jest.SpyInstance;
  const id = 'id';
  const sqlQuery = 'sql-query';
  const queryResult = {
    rows: [{}]
  } as QueryResult<ITranslationsBadgeName>;
  let result: ITranslationsBadgeName;

  beforeEach(async () => {
    mockGetSqlQuery = jest.spyOn(postgres, 'getSqlQuery')
      .mockResolvedValue(sqlQuery);
    mockGetSqlQuery.mockClear();
    mockQueryPostgres = jest.spyOn(postgres, 'queryPostgres')
      .mockResolvedValue(queryResult);
    mockQueryPostgres.mockClear();
    result = await adminDeleteDbTranslationsBadgeName(id);
  });

  test('calls getSqlQuery with the correct value', () =>
    expect(mockGetSqlQuery).toHaveBeenCalledWith(`${__dirname}/admin-delete-translations-badge-name.sql`));

  test('calls queryPostgres with the correct values', () =>
    expect(mockQueryPostgres).toHaveBeenCalledWith(
      sqlQuery,
      [id]
    ));

  test('returns the expected result', () => expect(result).toBe(queryResult.rows[0]));

});
