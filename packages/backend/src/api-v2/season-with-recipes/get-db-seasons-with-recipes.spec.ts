import {
  getDbSeasonsWithRecipes
} from './get-db-seasons-with-recipes';
import * as postgres from '../../postgres';
import { IHydratedSeason, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { QueryResult } from 'pg';

describe('getSeasonsWithRecipes', () => {
  let result: IHydratedSeason[];
  const queryResult = {
    rows: [{}]
  } as QueryResult<IHydratedSeason[]>;
  const seasonIndex = 1;
  const regionId = 'regionId';
  const language = LANGUAGES.EN_US;

  let mockQueryPostgres: jest.SpyInstance;
  let mockGetSqlQuery: jest.SpyInstance;
  const sqlQueryResult = 'sql-query';

  beforeEach(async () => {
    mockQueryPostgres = jest.spyOn(postgres, 'queryPostgres')
      .mockResolvedValue(queryResult);
    mockGetSqlQuery = jest.spyOn(postgres, 'getSqlQuery')
      .mockResolvedValue(sqlQueryResult);
    result = await getDbSeasonsWithRecipes(seasonIndex, regionId, language);
  });

  test('calls getSqlQuery with the correct', () =>
    expect(mockGetSqlQuery).toHaveBeenCalledWith((`${__dirname}/get-db-seasons-with-recipes.sql`)));

  test('calls queryPostgres with the correct values', () =>
    expect(mockQueryPostgres).toHaveBeenCalledWith(
      sqlQueryResult,
      [regionId, seasonIndex, language]
    ));

  test('returns the expected result', () => expect(result).toBe(queryResult.rows));

});
