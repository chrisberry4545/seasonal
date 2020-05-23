import * as postgres from '../../postgres';
import { IRecipe } from '@chrisb-dev/seasonal-shared-models';
import { QueryResult } from 'pg';
import { adminCreateDbRecipe } from './admin-create-db-recipe';

describe('adminCreateDbRecipe', () => {
  let mockGetSqlQuery: jest.SpyInstance;
  let mockQueryPostgres: jest.SpyInstance;
  const recipe = {
    imageUrlSmall: 'img',
    isVegan: false,
    isVegetarian: true,
    linkUrl: 'link',
    name: 'name',
    primaryFoodInRecipeIds: ['primary'],
    secondaryFoodInRecipeIds: ['secondary']
  } as IRecipe;
  const sqlQuery = 'sql-query';
  const queryResult = {
    rows: [{}]
  } as QueryResult<IRecipe>;
  let result: IRecipe;

  beforeEach(async () => {
    mockGetSqlQuery = jest.spyOn(postgres, 'getSqlQuery')
      .mockResolvedValue(sqlQuery);
    mockGetSqlQuery.mockClear();
    mockQueryPostgres = jest.spyOn(postgres, 'queryPostgres')
      .mockResolvedValue(queryResult);
    mockQueryPostgres.mockClear();
    result = await adminCreateDbRecipe(recipe);
  });

  test('calls getSqlQuery with the correct value', () =>
    expect(mockGetSqlQuery).toHaveBeenCalledWith(`${__dirname}/admin-create-recipe.sql`));

  test('calls queryPostgres with the correct values', () =>
    expect(mockQueryPostgres).toHaveBeenCalledWith(
      sqlQuery,
      [
        recipe.linkUrl,
        recipe.imageUrlSmall,
        recipe.isVegetarian,
        recipe.isVegan,
        recipe.name,
        recipe.primaryFoodInRecipeIds,
        recipe.secondaryFoodInRecipeIds
      ]
    ));

  test('returns the expected result', () => expect(result).toBe(queryResult.rows[0]));

});
