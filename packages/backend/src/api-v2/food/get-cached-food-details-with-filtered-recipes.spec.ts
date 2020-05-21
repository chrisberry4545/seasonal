import { IRecipe, IHydratedFood } from '@chrisb-dev/seasonal-shared-models';
import * as filterRecipesByDiet from './filter-recipes-by-diet';
import * as getCachedFoodDetails from './get-cached-food-details';
import { getCachedFoodDetailsWithFilteredRecipes } from './get-cached-food-details-with-filtered-recipes';

describe('getCachedFoodDetailsWithFilteredRecipes', () => {
  let mockFilterRecipesByDiet: jest.SpyInstance;
  const cachedFoodWithRecipes = {
    primaryFoodInRecipe: [{}],
    secondaryFoodInRecipe: [{}, {}]
  } as IHydratedFood;
  const filteredRecipes = [{}, {}] as IRecipe[];
  const foodId = 'foodId';
  const isVegetarian = true;
  const isVegan = false;
  let result: IHydratedFood | undefined;

  beforeEach(async () => {
    jest.spyOn(getCachedFoodDetails, 'getCachedFoodDetails')
      .mockReturnValue(() => Promise.resolve(cachedFoodWithRecipes));
    mockFilterRecipesByDiet = jest.spyOn(filterRecipesByDiet, 'filterRecipesByDiet')
      .mockReturnValue(filteredRecipes);
    mockFilterRecipesByDiet.mockClear();
    result = await getCachedFoodDetailsWithFilteredRecipes(
      foodId, isVegetarian, isVegan, 'regionId'
    );
  });

  test('filters the primary recipes of the results', () =>
    expect(mockFilterRecipesByDiet).toHaveBeenCalledWith(
      cachedFoodWithRecipes.primaryFoodInRecipe,
      isVegetarian,
      isVegan
    ));

  test('filters the secondary recipes of the results', () =>
    expect(mockFilterRecipesByDiet).toHaveBeenCalledWith(
      cachedFoodWithRecipes.secondaryFoodInRecipe,
      isVegetarian,
      isVegan
    ));

  test('returns the expected primary recipes', () => expect(result!.primaryFoodInRecipe).toBe(filteredRecipes));

  test('returns the expected secondary recipes', () => expect(result!.secondaryFoodInRecipe).toBe(filteredRecipes));

});
