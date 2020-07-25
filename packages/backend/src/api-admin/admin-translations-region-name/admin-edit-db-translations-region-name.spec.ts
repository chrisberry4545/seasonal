
import * as postgres from '../../postgres';
import { ITranslationsRegionName, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { QueryResult } from 'pg';
import { adminEditDbTranslationsRegionName } from './admin-edit-db-translations-region-name';

describe('adminEditDbTranslationsRegionName', () => {
  let mockGetSqlQuery: jest.SpyInstance;
  let mockQueryPostgres: jest.SpyInstance;
  const translations = {
    id: 'id',
    languages: [LANGUAGES.EN_GB],
    name: 'test',
    regionId: 'regionId'
  } as ITranslationsRegionName;
  const sqlQuery = 'sql-query';
  const queryResult = {
    rows: [{}]
  } as QueryResult<ITranslationsRegionName>;
  let result: ITranslationsRegionName;

  beforeEach(async () => {
    mockGetSqlQuery = jest.spyOn(postgres, 'getSqlQuery')
      .mockResolvedValue(sqlQuery);
    mockGetSqlQuery.mockClear();
    mockQueryPostgres = jest.spyOn(postgres, 'queryPostgres')
      .mockResolvedValue(queryResult);
    mockQueryPostgres.mockClear();
    result = await adminEditDbTranslationsRegionName(translations);
  });

  test('calls getSqlQuery with the correct value', () =>
    expect(mockGetSqlQuery).toHaveBeenCalledWith(`${__dirname}/admin-edit-translations-region-name.sql`));

  test('calls queryPostgres with the correct values', () =>
    expect(mockQueryPostgres).toHaveBeenCalledWith(
      sqlQuery,
      [
        translations.id,
        translations.name,
        translations.regionId,
        translations.languages
      ]
    ));

  test('returns the expected result', () => expect(result).toBe(queryResult.rows[0]));

});
