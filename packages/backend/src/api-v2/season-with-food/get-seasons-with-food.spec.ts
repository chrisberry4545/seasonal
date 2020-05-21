import {
  getSeasonsWithFood
} from './get-seasons-with-food';
import * as postgres from '../../postgres';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { QueryResult } from 'pg';

describe('getSeasonsWithFood', () => {
  let result: IHydratedSeason[] | null;
  const queryResult = {
    rows: [{}]
  } as QueryResult<IHydratedSeason[]>;
  const seasonIndex = 1;
  const regionId = 'regionId';

  let mockQueryPostgres: jest.SpyInstance;
  let mockGetSqlQuery: jest.SpyInstance;
  const sqlQueryResult = 'sql-query';

  beforeEach(async () => {
    mockQueryPostgres = jest.spyOn(postgres, 'queryPostgres')
      .mockResolvedValue(queryResult);
    mockGetSqlQuery = jest.spyOn(postgres, 'getSqlQuery')
      .mockResolvedValue(sqlQueryResult);
    result = await getSeasonsWithFood(seasonIndex, regionId);
  });

  test('calls getSqlQuery with the correct', () =>
    expect(mockGetSqlQuery).toHaveBeenCalledWith((`${__dirname}/get-seasons-with-food.sql`)));

  test('calls queryPostgres with the correct values', () =>
    expect(mockQueryPostgres).toHaveBeenCalledWith(
      sqlQueryResult,
      [regionId, seasonIndex]
    ));

  test('returns the expected result', () => expect(result).toBe(queryResult.rows));

});
