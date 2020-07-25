
import * as postgres from '../../postgres';
import { ITranslationsCountryName, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { QueryResult } from 'pg';
import { adminEditDbTranslationsCountryName } from './admin-edit-db-translations-country-name';

describe('adminEditDbTranslationsCountryName', () => {
  let mockGetSqlQuery: jest.SpyInstance;
  let mockQueryPostgres: jest.SpyInstance;
  const translations = {
    countryId: 'countryId',
    id: 'id',
    languages: [LANGUAGES.EN_GB],
    name: 'test'
  } as ITranslationsCountryName;
  const sqlQuery = 'sql-query';
  const queryResult = {
    rows: [{}]
  } as QueryResult<ITranslationsCountryName>;
  let result: ITranslationsCountryName;

  beforeEach(async () => {
    mockGetSqlQuery = jest.spyOn(postgres, 'getSqlQuery')
      .mockResolvedValue(sqlQuery);
    mockGetSqlQuery.mockClear();
    mockQueryPostgres = jest.spyOn(postgres, 'queryPostgres')
      .mockResolvedValue(queryResult);
    mockQueryPostgres.mockClear();
    result = await adminEditDbTranslationsCountryName(translations);
  });

  test('calls getSqlQuery with the correct value', () =>
    expect(mockGetSqlQuery).toHaveBeenCalledWith(`${__dirname}/admin-edit-translations-country-name.sql`));

  test('calls queryPostgres with the correct values', () =>
    expect(mockQueryPostgres).toHaveBeenCalledWith(
      sqlQuery,
      [
        translations.id,
        translations.name,
        translations.countryId,
        translations.languages
      ]
    ));

  test('returns the expected result', () => expect(result).toBe(queryResult.rows[0]));

});
