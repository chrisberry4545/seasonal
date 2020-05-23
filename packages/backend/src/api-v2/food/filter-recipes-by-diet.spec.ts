import { IRecipe } from '@chrisb-dev/seasonal-shared-models';
import { filterRecipesByDiet } from './filter-recipes-by-diet';

describe('filterRecipesByDiet', () => {
  let result: IRecipe[] | undefined;
  const recipes = [
    {
      isVegan: true,
      isVegetarian: true
    },
    {
      isVegan: false,
      isVegetarian: true
    },
    {
      isVegan: false,
      isVegetarian: false
    }
  ] as IRecipe[];

  describe('when the recipes are undefined', () => {
    beforeEach(() => result = filterRecipesByDiet(undefined));

    test('returns undefined', () => expect(result).toBeUndefined());

  });

  describe('when the recipes are defined and isVegan and isVegetarian are false', () => {
    beforeEach(() => result = filterRecipesByDiet(recipes, false, false));

    test('returns all recipes', () => expect(result).toEqual(recipes));

  });

  describe('when the recipes are defined and isVegan is false but isVegetarian is true', () => {
    beforeEach(() => result = filterRecipesByDiet(recipes, true, false));

    test('filters out non vegetarian and vegan recipes', () => expect(result).toHaveLength(2));

    test('returns all vegan and vegetarian recipes', () =>
      expect(result!.every((recipe) => recipe.isVegan || recipe.isVegetarian)).toBe(true));

  });

  describe('when the recipes are defined and isVegan is true but isVegetarian is true', () => {
    beforeEach(() => result = filterRecipesByDiet(recipes, true, true));

    test('filters out non vegan recipes', () => expect(result).toHaveLength(1));

    test('returns all vegan recipes', () =>
      expect(result!.every((recipe) => recipe.isVegan)).toBe(true));

  });

  describe('when the recipes are defined and isVegan is true but isVegetarian is false', () => {
    beforeEach(() => result = filterRecipesByDiet(recipes, false, true));

    test('filters out non vegan recipes', () => expect(result).toHaveLength(1));

    test('returns all vegan recipes', () =>
      expect(result!.every((recipe) => recipe.isVegan)).toBe(true));

  });

});
