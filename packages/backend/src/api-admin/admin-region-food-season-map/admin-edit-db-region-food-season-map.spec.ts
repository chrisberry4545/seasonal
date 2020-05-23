import * as postgres from '../../postgres';
import { IRegionFoodSeasonMap } from '@chrisb-dev/seasonal-shared-models';
import { QueryResult } from 'pg';
import { adminEditDbRegionFoodSeasonMap } from './admin-edit-db-region-food-season-map';

describe('adminEditDbRegionFoodSeasonMap', () => {
  let mockGetSqlQuery: jest.SpyInstance;
  let mockQueryPostgres: jest.SpyInstance;
  const regionFoodSeasonMap = {
    foodId: 'food',
    id: 'id',
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
    result = await adminEditDbRegionFoodSeasonMap(regionFoodSeasonMap);
  });

  test('calls getSqlQuery with the correct value', () =>
    expect(mockGetSqlQuery).toHaveBeenCalledWith(`${__dirname}/admin-edit-region-food-season-map.sql`));

  test('calls queryPostgres with the correct values', () =>
    expect(mockQueryPostgres).toHaveBeenCalledWith(
      sqlQuery,
      [
        regionFoodSeasonMap.id,
        regionFoodSeasonMap.regionId,
        regionFoodSeasonMap.foodId,
        regionFoodSeasonMap.seasonId
      ]
    ));

  test('returns the expected result', () => expect(result).toBe(queryResult.rows[0]));

});
