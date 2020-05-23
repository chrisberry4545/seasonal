import * as getPostgresInstance from './get-postgres-instance';
import { PoolClient } from 'pg';
import { queryPostgres } from './query-postgres';

describe('queryPostgres', () => {
  let mockDb: PoolClient;
  const mockQueryResult = {
    rows: [{
      test_1: 'abc',

      testTwo: 'abc',

      test_three: 'abc'
    }]
  };
  const query = 'query';
  const values = ['v1'];
  let result: {};

  beforeEach(async () => {
    mockDb = {
      query: jest.fn().mockResolvedValue(mockQueryResult) as any,
      release: jest.fn() as any
    } as PoolClient;
    jest.spyOn(getPostgresInstance, 'getPostgresInstance')
      .mockResolvedValue(mockDb);
    result = await queryPostgres(query, values);
  });

  test('queries the database', () =>
    expect(mockDb.query).toHaveBeenCalledWith({ text: query, values }));

  test('releases the db pool', () => expect(mockDb.release).toHaveBeenCalled());

  test('returns the result with snake case updates to camel case', () =>
    expect(result).toEqual({
      rows: [{
        test1: 'abc',

        testTwo: 'abc',

        testThree: 'abc'
      }]
    }));

});
