
import * as postgres from '../../postgres';
import { ITranslationsSeasonName, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { QueryResult } from 'pg';
import { adminEditDbTranslationsSeasonName } from './admin-edit-db-translations-season-name';

describe('adminEditDbTranslationsSeasonName', () => {
  let mockGetSqlQuery: jest.SpyInstance;
  let mockQueryPostgres: jest.SpyInstance;
  const translations = {
    id: 'id',
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
    result = await adminEditDbTranslationsSeasonName(translations);
  });

  test('calls getSqlQuery with the correct value', () =>
    expect(mockGetSqlQuery).toHaveBeenCalledWith(`${__dirname}/admin-edit-translations-season-name.sql`));

  test('calls queryPostgres with the correct values', () =>
    expect(mockQueryPostgres).toHaveBeenCalledWith(
      sqlQuery,
      [
        translations.id,
        translations.name,
        translations.seasonId,
        translations.languages
      ]
    ));

  test('returns the expected result', () => expect(result).toBe(queryResult.rows[0]));

});
