import * as postgres from '../../postgres';
import { IFood } from '@chrisb-dev/seasonal-shared-models';
import { QueryResult } from 'pg';
import { adminCreateDbFood } from './admin-create-db-food';

describe('adminCreateDbFood', () => {
  let mockGetSqlQuery: jest.SpyInstance;
  let mockQueryPostgres: jest.SpyInstance;
  const food = {
    badgeIds: ['badge'],
    description: 'desc',
    imageUrlSmall: 'image',
    name: 'test',
    substituteFoodIds: ['sub']
  } as IFood;
  const sqlQuery = 'sql-query';
  const queryResult = {
    rows: [{}]
  } as QueryResult<IFood>;
  let result: IFood;

  beforeEach(async () => {
    mockGetSqlQuery = jest.spyOn(postgres, 'getSqlQuery')
      .mockResolvedValue(sqlQuery);
    mockGetSqlQuery.mockClear();
    mockQueryPostgres = jest.spyOn(postgres, 'queryPostgres')
      .mockResolvedValue(queryResult);
    mockQueryPostgres.mockClear();
    result = await adminCreateDbFood(food);
  });

  test('calls getSqlQuery with the correct value', () =>
    expect(mockGetSqlQuery).toHaveBeenCalledWith(`${__dirname}/admin-create-food.sql`));

  test('calls queryPostgres with the correct values', () =>
    expect(mockQueryPostgres).toHaveBeenCalledWith(
      sqlQuery,
      [
        food.name,
        food.description,
        food.imageUrlSmall,
        food.substituteFoodIds,
        food.badgeIds
      ]
    ));

  test('returns the expected result', () => expect(result).toBe(queryResult.rows[0]));

});
