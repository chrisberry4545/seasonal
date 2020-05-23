import * as postgres from '../../postgres';
import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared-models';
import { QueryResult } from 'pg';
import { adminCreateDbCountryRecipeNameMap } from './admin-create-db-country-recipe-name-map';

describe('adminCreateDbCountryRecipeNameMap', () => {
  let mockGetSqlQuery: jest.SpyInstance;
  let mockQueryPostgres: jest.SpyInstance;
  const countryFoodNameMap = {
    countryId: 'countryId',
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
    result = await adminCreateDbCountryRecipeNameMap(countryFoodNameMap);
  });

  test('calls getSqlQuery with the correct value', () =>
    expect(mockGetSqlQuery).toHaveBeenCalledWith(`${__dirname}/admin-create-country-to-recipe-name-map.sql`));

  test('calls queryPostgres with the correct values', () =>
    expect(mockQueryPostgres).toHaveBeenCalledWith(
      sqlQuery,
      [
        countryFoodNameMap.name,
        countryFoodNameMap.countryId,
        countryFoodNameMap.recipeId
      ]
    ));

  test('returns the expected result', () => expect(result).toBe(queryResult.rows[0]));

});
