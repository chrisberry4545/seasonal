import * as postgres from '../../postgres';
import { ITranslationsSeasonName, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { QueryResult } from 'pg';
import { adminCreateDbTranslationsSeasonName } from './admin-create-db-translations-season-name';

describe('adminCreateDbTranslationsSeasonName', () => {
  let mockGetSqlQuery: jest.SpyInstance;
  let mockQueryPostgres: jest.SpyInstance;
  const translations = {
    languages: [LANGUAGES.EN_GB],
    name: 'test',
    seasonId: 'seasonId'
  } as ITranslationsSeasonName;
  const sqlQuery = 'sql-query';
  const queryResult = {
    rows: [{}]
  } as QueryResult<ITranslationsSeasonName>;
  let result: ITranslationsSeasonName;

  beforeEach(async () => {
    mockGetSqlQuery = jest.spyOn(postgres, 'getSqlQuery')
      .mockResolvedValue(sqlQuery);
    mockGetSqlQuery.mockClear();
    mockQueryPostgres = jest.spyOn(postgres, 'queryPostgres')
      .mockResolvedValue(queryResult);
    mockQueryPostgres.mockClear();
    result = await adminCreateDbTranslationsSeasonName(translations);
  });

  test('calls getSqlQuery with the correct value', () =>
    expect(mockGetSqlQuery).toHaveBeenCalledWith(`${__dirname}/admin-create-translations-season-name.sql`));

  test('calls queryPostgres with the correct values', () =>
    expect(mockQueryPostgres).toHaveBeenCalledWith(
      sqlQuery,
      [
        translations.name,
        translations.seasonId,
        translations.languages
      ]
    ));

  test('returns the expected result', () => expect(result).toBe(queryResult.rows[0]));

});
