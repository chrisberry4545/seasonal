import * as postgres from '../../postgres';
import { IRecipe } from '@chrisb-dev/seasonal-shared-models';
import { QueryResult } from 'pg';
import { adminEditDbRecipe } from './admin-edit-db-recipe';

describe('adminEditDbRecipe', () => {
  let mockGetSqlQuery: jest.SpyInstance;
  let mockQueryPostgres: jest.SpyInstance;
  const recipe = {
    id: 'id',
    imageUrlSmall: 'img',
    isVegan: false,
    isVegetarian: true,
    linkUrl: 'link',
    name: 'name',
    primaryFoodInRecipeIds: ['primary'],
    secondaryFoodInRecipeId: ['secondary']
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
    result = await adminEditDbRecipe(recipe);
  });

  test('calls getSqlQuery with the correct value', () =>
    expect(mockGetSqlQuery).toHaveBeenCalledWith(`${__dirname}/admin-edit-recipe.sql`));

  test('calls queryPostgres with the correct values', () =>
    expect(mockQueryPostgres).toHaveBeenCalledWith(
      sqlQuery,
      [
        recipe.id,
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
