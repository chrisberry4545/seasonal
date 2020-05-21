import {
  getDbFoodDetails
} from './get-db-food-details';
import * as postgres from '../../postgres';
import { IHydratedFood } from '@chrisb-dev/seasonal-shared-models';
import { QueryResult } from 'pg';

describe('getDbFoodDetails', () => {
  let result: IHydratedFood | undefined;
  const foodId = 'id';
  const regionId = 'regionId';

  let mockQueryPostgres: jest.SpyInstance;
  let mockGetSqlQuery: jest.SpyInstance;
  const sqlQueryResult = 'sql-query';

  beforeEach(async () => {
    mockGetSqlQuery = jest.spyOn(postgres, 'getSqlQuery')
      .mockResolvedValue(sqlQueryResult);
  });

  describe('when a food item is found', () => {
    const queryResult = {
      rows: [{}]
    } as QueryResult<IHydratedFood[]>;

    beforeEach(async () => {
      mockQueryPostgres = jest.spyOn(postgres, 'queryPostgres')
        .mockResolvedValue(queryResult);
      result = await getDbFoodDetails(foodId, regionId);
    });

    test('calls getSqlQuery with the correct', () =>
      expect(mockGetSqlQuery).toHaveBeenCalledWith((`${__dirname}/get-db-food-details.sql`)));

    test('calls queryPostgres with the correct values', () =>
      expect(mockQueryPostgres).toHaveBeenCalledWith(
        sqlQueryResult,
        [regionId, foodId]
      ));

    test('returns the expected result', () => expect(result).toBe(queryResult.rows[0]));

  });

  describe('when no food is found', () => {
    const queryResult = {
      rows: [] as any
    } as QueryResult<IHydratedFood[]>;

    beforeEach(async () => {
      mockQueryPostgres = jest.spyOn(postgres, 'queryPostgres')
        .mockResolvedValue(queryResult);
      result = await getDbFoodDetails(foodId, regionId);
    });

    test('returns undefined', () => expect(result).toBeUndefined());

  });

});
