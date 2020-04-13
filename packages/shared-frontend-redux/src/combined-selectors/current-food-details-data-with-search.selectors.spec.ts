import {
  selectVisibleRecipesForFoodDetailsData
} from './current-food-details-data-with-search.selectors';
import { IState } from '../state.interface';

describe('selectVisibleRecipesForFoodDetailsData', () => {
  test('returns visible recipes for the current food item', () => {
    const result = selectVisibleRecipesForFoodDetailsData({
      currentFoodDetailsData: {
        data: {
          primaryFoodInRecipe: [{
            name: 'recipe1'
          }, {
            name: 'recipe2'
          }, {
            name: 'other'
          }],
          secondaryFoodInRecipe: [{
            name: 'recipe3'
          }, {
            name: 'recipe4'
          }, {
            name: 'other'
          }]
        }
      },
      ui: {
        searchTerm: 'recipe'
      }
    } as IState);
    expect(result).toEqual([{
      name: 'recipe1'
    }, {
      name: 'recipe2'
    }, {
      name: 'recipe3'
    }, {
      name: 'recipe4'
    }]);
  });
});
