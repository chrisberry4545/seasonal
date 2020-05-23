
import * as postgres from '../../postgres';
import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared-models';
import { QueryResult } from 'pg';
import { adminEditDbCountryRecipeNameMap } from './admin-edit-db-country-recipe-name-map';

describe('adminEditDbCountryRecipeNameMap', () => {
  let mockGetSqlQuery: jest.SpyInstance;
  let mockQueryPostgres: jest.SpyInstance;
  const countryRecipeNameMap = {
    countryId: 'countryId',
    id: 'id',
    name: 'test',
    recipeId: 'foodId'
  } as ICountryRecipeNameMap;
  const sqlQuery = 'sql-query';
  const queryResult = {
    rows: [{}]
  } as QueryResult<ICountryRecipeNameMap>;
  let result: ICountryRecipeNameMap;

  beforeEach(async () => {
    mockGetSqlQuery = jest.spyOn(postgres, 'getSqlQuery')
      .mockResolvedValue(sqlQuery);
    mockGetSqlQuery.mockClear();
    mockQueryPostgres = jest.spyOn(postgres, 'queryPostgres')
      .mockResolvedValue(queryResult);
    mockQueryPostgres.mockClear();
    result = await adminEditDbCountryRecipeNameMap(countryRecipeNameMap);
  });

  test('calls getSqlQuery with the correct value', () =>
    expect(mockGetSqlQuery).toHaveBeenCalledWith(`${__dirname}/admin-edit-country-to-recipe-name-map.sql`));

  test('calls queryPostgres with the correct values', () =>
    expect(mockQueryPostgres).toHaveBeenCalledWith(
      sqlQuery,
      [
        countryRecipeNameMap.id,
        countryRecipeNameMap.name,
        countryRecipeNameMap.countryId,
        countryRecipeNameMap.recipeId
      ]
    ));

  test('returns the expected result', () => expect(result).toBe(queryResult.rows[0]));

});
