import {
  getDbSeasonsWithFood
} from './get-db-seasons-with-food';
import * as postgres from '../../postgres';
import { IHydratedSeason, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { QueryResult } from 'pg';

describe('getSeasonsWithFood', () => {
  let result: IHydratedSeason[] | null;
  const queryResult = {
    rows: [{}]
  } as QueryResult<IHydratedSeason[]>;
  const seasonIndex = 1;
  const regionId = 'regionId';
  const language = LANGUAGES.EN;

  let mockQueryPostgres: jest.SpyInstance;
  let mockGetSqlQuery: jest.SpyInstance;
  const sqlQueryResult = 'sql-query';

  beforeEach(async () => {
    mockQueryPostgres = jest.spyOn(postgres, 'queryPostgres')
      .mockResolvedValue(queryResult);
    mockGetSqlQuery = jest.spyOn(postgres, 'getSqlQuery')
      .mockResolvedValue(sqlQueryResult);
    result = await getDbSeasonsWithFood(seasonIndex, regionId, language);
  });

  test('calls getSqlQuery with the correct', () =>
    expect(mockGetSqlQuery).toHaveBeenCalledWith((`${__dirname}/get-db-seasons-with-food.sql`)));

  test('calls queryPostgres with the correct values', () =>
    expect(mockQueryPostgres).toHaveBeenCalledWith(
      sqlQueryResult,
      [regionId, seasonIndex, language]
    ));

  test('returns the expected result', () => expect(result).toBe(queryResult.rows));

});
