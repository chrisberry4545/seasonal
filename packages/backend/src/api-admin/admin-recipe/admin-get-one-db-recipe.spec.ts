import { IRecipe } from '@chrisb-dev/seasonal-shared-models';
import * as adminGetDbRecipes from './admin-get-db-recipes';
import { adminGetOneDbRecipe } from './admin-get-one-db-recipe';

describe('adminGetOneDbRecipe', () => {
  let mockAdminGetDbRecipes: jest.SpyInstance;
  const mockRecipes = [{}] as IRecipe[];
  const recipeId = 'recipeId';
  let result: IRecipe;

  beforeEach(async () => {
    mockAdminGetDbRecipes = jest.spyOn(adminGetDbRecipes, 'adminGetDbRecipes')
      .mockResolvedValue(mockRecipes);
    mockAdminGetDbRecipes.mockClear();
    result = await adminGetOneDbRecipe(recipeId);
  });

  test('calls adminGetDbRecipes', () =>
    expect(mockAdminGetDbRecipes).toHaveBeenCalledWith(recipeId));

  test('returns the expected result', () => expect(result).toBe(mockRecipes[0]));

});
