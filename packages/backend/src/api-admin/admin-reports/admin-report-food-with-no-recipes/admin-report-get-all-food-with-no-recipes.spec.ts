import * as postgres from '../../../postgres';
import { IFood } from '@chrisb-dev/seasonal-shared-models';
import { QueryResult } from 'pg';
import { adminReportGetAllFoodWithNoRecipes } from './admin-report-get-all-food-with-no-recipes';

describe('adminReportGetAllFoodWithNoRecipes', () => {
  let mockGetSqlQuery: jest.SpyInstance;
  let mockQueryPostgres: jest.SpyInstance;
  const sqlQuery = 'sql-query';
  const queryResult = {
    rows: [{}]
  } as QueryResult<IFood>;
  let result: IFood[];

  beforeEach(async () => {
    mockGetSqlQuery = jest.spyOn(postgres, 'getSqlQuery')
      .mockResolvedValue(sqlQuery);
    mockGetSqlQuery.mockClear();
    mockQueryPostgres = jest.spyOn(postgres, 'queryPostgres')
      .mockResolvedValue(queryResult);
    mockQueryPostgres.mockClear();
    result = await adminReportGetAllFoodWithNoRecipes();
  });

  test('calls getSqlQuery with the correct value', () =>
    expect(mockGetSqlQuery)
      .toHaveBeenCalledWith(`${__dirname}/admin-report-food-with-no-recipes.sql`));

  test('calls queryPostgres with the correct values', () =>
    expect(mockQueryPostgres).toHaveBeenCalledWith(
      sqlQuery
    ));

  test('returns the expected result', () => expect(result).toBe(queryResult.rows));

});
