import {
  selectAllRecipes,
  selectRecipeById
} from './all-recipes.selectors';
import { IState } from '../state.interface';
import { IRecipe, IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';

describe('selectAllRecipes', () => {
  test('returns an empty array if there are no recipes', () => {
    const result = selectAllRecipes({
      currentFoodDetailsData: {},
      currentSeasonData: {}
    } as IState);
    expect(result).toHaveLength(0);
  });

  test('returns the food details and the seasons recipes', () => {
    const season = {
      recipes: [{
        name: 'r1'
      }, {
        name: 'r2'
      }]
    } as IHydratedSeason;
    const primaryFoodRecipe = { name: 'primary' } as IRecipe;
    const secondaryFoodRecipe = { name: 'secondary' } as IRecipe;
    const result = selectAllRecipes({
      currentFoodDetailsData: {
        data: {
          primaryFoodInRecipe: [primaryFoodRecipe],
          secondaryFoodInRecipe: [secondaryFoodRecipe]
        }
      },
      currentSeasonData: {
        data: season
      }
    } as IState);
    expect(result).toEqual([
      ...season.recipes || [],
      primaryFoodRecipe,
      secondaryFoodRecipe
    ]);
  });
});

describe('selectRecipeById', () => {
  const season = {
    recipes: [{
      id: '1',
      name: 'r1'
    }, {
      id: '2',
      name: 'r2'
    }]
  } as IHydratedSeason;
  const state = {
    currentFoodDetailsData: {
      data: {}
    },
    currentSeasonData: {
      data: season
    }
  } as IState;

  test('returns undefined in there is no recipe with the id', () => {
    const result = selectRecipeById('unknown')(state);
    expect(result).toBeUndefined();
  });

  test('gets the recipe with the matching id', () => {
    const result = selectRecipeById('2')(state);
    expect(result).toBe(season.recipes![1]);
  });
});
