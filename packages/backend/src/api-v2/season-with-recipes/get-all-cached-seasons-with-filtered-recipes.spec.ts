import { IHydratedSeason, IRecipe, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import * as filterRecipesByDiet from '../food/filter-recipes-by-diet';
import * as getAllCachedSeasonsWithRecipes from './get-all-cached-seasons-with-recipes';
import { getAllCachedSeasonsWithFilteredRecipes } from './get-all-cached-seasons-with-filtered-recipes';

describe('getAllCachedSeasonsWithFilteredRecipes', () => {
  let mockFilterRecipesByDiet: jest.SpyInstance;
  const allCachedSeasonsWithRecipes = [{
    recipes: [{}]
  }] as IHydratedSeason[];
  const filteredRecipes = [{}, {}] as IRecipe[];
  const isVegetarian = true;
  const isVegan = false;
  let result: IHydratedSeason[];

  beforeEach(async () => {
    jest.spyOn(getAllCachedSeasonsWithRecipes, 'getAllCachedSeasonsWithRecipes')
      .mockReturnValue(() => Promise.resolve(allCachedSeasonsWithRecipes));
    mockFilterRecipesByDiet = jest.spyOn(filterRecipesByDiet, 'filterRecipesByDiet')
      .mockReturnValue(filteredRecipes);
    mockFilterRecipesByDiet.mockClear();
    result = await getAllCachedSeasonsWithFilteredRecipes(
      isVegetarian, isVegan, 'regionId', LANGUAGES.EN_US
    );
  });

  test('filters the recipes of the results', () =>
    expect(mockFilterRecipesByDiet).toHaveBeenCalledWith(
      allCachedSeasonsWithRecipes[0].recipes,
      isVegetarian,
      isVegan
    ));

  test('returns the expected recipes', () => expect(result[0].recipes).toBe(filteredRecipes));

});
