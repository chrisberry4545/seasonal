import { IRecipe } from '@chrisb-dev/seasonal-shared-models';
import * as adminGetDbRecipes from './admin-get-db-recipes';
import { adminGetAllDbRecipes } from './admin-get-all-db-recipes';

describe('adminGetAllDbRecipes', () => {
  let mockAdminGetDbRecipes: jest.SpyInstance;
  const mockRecipes = [{}] as IRecipe[];
  let result: IRecipe[];

  beforeEach(async () => {
    mockAdminGetDbRecipes = jest.spyOn(adminGetDbRecipes, 'adminGetDbRecipes')
      .mockResolvedValue(mockRecipes);
    mockAdminGetDbRecipes.mockClear();
    result = await adminGetAllDbRecipes();
  });

  test('calls adminGetDbRecipes', () =>
    expect(mockAdminGetDbRecipes).toHaveBeenCalledWith(null));

  test('returns the expected result', () => expect(result).toBe(mockRecipes));

});
