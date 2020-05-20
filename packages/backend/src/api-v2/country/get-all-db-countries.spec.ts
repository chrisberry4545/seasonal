import {
  getAllDbCountries
} from './get-all-db-countries';
import * as postgres from '../../postgres';
import { ICountry } from '@chrisb-dev/seasonal-shared-models';
import { QueryResult } from 'pg';

describe('getAllDbCountries', () => {
  let result: ICountry[];
  const queryResult = {
    rows: [{}]
  } as QueryResult<ICountry[]>;

  let mockQueryPostgres: jest.SpyInstance;
  let mockGetSqlQuery: jest.SpyInstance;
  const sqlQueryResult = 'sql-query';

  beforeEach(async () => {
    mockGetSqlQuery = jest.spyOn(postgres, 'getSqlQuery')
      .mockResolvedValue(sqlQueryResult);
    mockQueryPostgres = jest.spyOn(postgres, 'queryPostgres')
      .mockResolvedValue(queryResult);
    result = await getAllDbCountries();
  });

  test('calls getSqlQuery with the correct', () =>
    expect(mockGetSqlQuery).toHaveBeenCalledWith((`${__dirname}/get-countries.sql`)));

  test('calls queryPostgres with the correct values', () =>
    expect(mockQueryPostgres).toHaveBeenCalledWith(
      sqlQueryResult
    ));

  test('returns the expected result', () => expect(result).toBe(queryResult.rows));

});
