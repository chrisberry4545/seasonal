import {
  getAllDbSeasons
} from './get-all-db-seasons';
import * as postgres from '../../postgres';
import { IBaseSeason } from '@chrisb-dev/seasonal-shared-models';
import { QueryResult } from 'pg';

describe('getAllSeasons', () => {
  let result: IBaseSeason[];
  const queryResult = {
    rows: [{}]
  } as QueryResult<IBaseSeason[]>;

  let mockQueryPostgres: jest.SpyInstance;
  let mockGetSqlQuery: jest.SpyInstance;
  const sqlQueryResult = 'sql-query';

  beforeEach(async () => {
    mockQueryPostgres = jest.spyOn(postgres, 'queryPostgres')
      .mockResolvedValue(queryResult);
    mockGetSqlQuery = jest.spyOn(postgres, 'getSqlQuery')
      .mockResolvedValue(sqlQueryResult);
    result = await getAllDbSeasons();
  });

  test('calls getSqlQuery with the correct', () =>
    expect(mockGetSqlQuery).toHaveBeenCalledWith((`${__dirname}/get-all-db-seasons.sql`)));

  test('calls queryPostgres with the correct values', () =>
    expect(mockQueryPostgres).toHaveBeenCalledWith(
      sqlQueryResult
    ));

  test('returns the expected result', () => expect(result).toBe(queryResult.rows));

});
