import * as postgres from '../../postgres';
import { IRegionFoodSeasonMap } from '@chrisb-dev/seasonal-shared-models';
import { QueryResult } from 'pg';
import { adminCreateDbRegionFoodSeasonMap } from './admin-create-db-region-food-season-map';

describe('adminCreateDbRegionFoodSeasonMap', () => {
  let mockGetSqlQuery: jest.SpyInstance;
  let mockQueryPostgres: jest.SpyInstance;
  const regionFoodSeasonMap = {
    foodId: 'food',
    regionId: 'region',
    seasonId: 'season'
  } as IRegionFoodSeasonMap;
  const sqlQuery = 'sql-query';
  const queryResult = {
    rows: [{}]
  } as QueryResult<IRegionFoodSeasonMap>;
  let result: IRegionFoodSeasonMap;

  beforeEach(async () => {
    mockGetSqlQuery = jest.spyOn(postgres, 'getSqlQuery')
      .mockResolvedValue(sqlQuery);
    mockGetSqlQuery.mockClear();
    mockQueryPostgres = jest.spyOn(postgres, 'queryPostgres')
      .mockResolvedValue(queryResult);
    mockQueryPostgres.mockClear();
    result = await adminCreateDbRegionFoodSeasonMap(regionFoodSeasonMap);
  });

  test('calls getSqlQuery with the correct value', () =>
    expect(mockGetSqlQuery).toHaveBeenCalledWith(`${__dirname}/admin-create-region-food-season-map.sql`));

  test('calls queryPostgres with the correct values', () =>
    expect(mockQueryPostgres).toHaveBeenCalledWith(
      sqlQuery,
      [
        regionFoodSeasonMap.regionId,
        regionFoodSeasonMap.foodId,
        regionFoodSeasonMap.seasonId
      ]
    ));

  test('returns the expected result', () => expect(result).toBe(queryResult.rows[0]));

});
