import { IHydratedSeason, IRecipe } from '@chrisb-dev/seasonal-shared-models';
import * as filterRecipesByDiet from '../food/filter-recipes-by-diet';
import * as getOneCachedSeasonWithRecipes from './get-one-cached-season-with-recipes';
import { getOneCachedSeasonsWithFilteredRecipes } from './get-one-cached-season-with-filtered-recipes';

describe('getOneCachedSeasonsWithFilteredRecipes', () => {
  let mockFilterRecipesByDiet: jest.SpyInstance;
  const cachedSeasonsWithRecipes = {
    recipes: [{}]
  } as IHydratedSeason;
  const filteredRecipes = [{}, {}] as IRecipe[];
  const seasonIndex = 1;
  const isVegetarian = true;
  const isVegan = false;
  let result: IHydratedSeason | undefined;

  beforeEach(async () => {
    jest.spyOn(getOneCachedSeasonWithRecipes, 'getOneCachedSeasonWithRecipes')
      .mockReturnValue(() => Promise.resolve(cachedSeasonsWithRecipes));
    mockFilterRecipesByDiet = jest.spyOn(filterRecipesByDiet, 'filterRecipesByDiet')
      .mockReturnValue(filteredRecipes);
    mockFilterRecipesByDiet.mockClear();
    result = await getOneCachedSeasonsWithFilteredRecipes(
      seasonIndex, isVegetarian, isVegan, 'regionId'
    );
  });

  test('filters the recipes of the results', () =>
    expect(mockFilterRecipesByDiet).toHaveBeenCalledWith(
      cachedSeasonsWithRecipes.recipes,
      isVegetarian,
      isVegan
    ));

  test('returns the expected recipes', () => expect(result!.recipes).toBe(filteredRecipes));

});
