import {
  selectVisibleFoodData,
  selectVisibleRecipeData
} from './current-season-data-with-search.selectors';
import { IState } from '../state.interface';

describe('selectVisibleFoodData', () => {

  test('returns food items that match the search term', () => {
    const result = selectVisibleFoodData({
      currentSeasonData: {
        data: {
          food: [{
            name: 'food1'
          }, {
            name: 'food2'
          }, {
            name: 'other'
          }]
        }
      },
      ui: {
        searchTerm: 'food'
      }
    } as IState);
    expect(result).toEqual([{
      name: 'food1'
    }, {
      name: 'food2'
    }]);
  });

});

describe('selectVisibleRecipeData', () => {

  test('returns recipes items that match the search term', () => {
    const result = selectVisibleRecipeData({
      currentSeasonData: {
        data: {
          recipes: [{
            name: 'recipe1'
          }, {
            name: 'recipe2'
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
    }]);
  });

});
