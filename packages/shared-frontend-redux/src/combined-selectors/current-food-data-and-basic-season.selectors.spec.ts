import {
  selectIsFoodDataOrBasicSeasonsLoading, selectSeasonsSelectedForFood
} from './current-food-data-and-basic-season.selectors';
import { IState } from '../state.interface';

describe('selectIsFoodDataOrBasicSeasonsLoading', () => {

  test('returns true if food details is loading', () => {
    const result = selectIsFoodDataOrBasicSeasonsLoading({
      allBasicSeasonData: {
        isLoading: false
      },
      currentFoodDetailsData: {
        isLoading: true
      }
    } as IState);
    expect(result).toBe(true);
  });

  test('returns true if all basic season data is loading', () => {
    const result = selectIsFoodDataOrBasicSeasonsLoading({
      allBasicSeasonData: {
        isLoading: true
      },
      currentFoodDetailsData: {
        isLoading: false
      }
    } as IState);
    expect(result).toBe(true);
  });

  test('returns true if both are loading', () => {
    const result = selectIsFoodDataOrBasicSeasonsLoading({
      allBasicSeasonData: {
        isLoading: true
      },
      currentFoodDetailsData: {
        isLoading: true
      }
    } as IState);
    expect(result).toBe(true);
  });

  test('returns false if both are not loading', () => {
    const result = selectIsFoodDataOrBasicSeasonsLoading({
      allBasicSeasonData: {
        isLoading: false
      },
      currentFoodDetailsData: {
        isLoading: false
      }
    } as IState);
    expect(result).toBe(false);
  });

});

describe('selectSeasonsSelectedForFood', () => {
  const state = {
    allBasicSeasonData: {
      data: [{
        id: 'jan',
        name: 'January'
      }, {
        id: 'feb',
        name: 'February'
      }]
    },
    currentFoodDetailsData: {
      data: {
        seasons: [{
          id: 'feb'
        }]
      }
    }
  } as IState;

  test('returns undefined if there is no current food details', () => {
    const result = selectSeasonsSelectedForFood({
      ...state,
      currentFoodDetailsData: {
        ...state.currentFoodDetailsData,
        data: undefined
      }
    });
    expect(result).toBeUndefined();
  });

  test('returns undefined if there is no basic season data', () => {
    const result = selectSeasonsSelectedForFood({
      ...state,
      allBasicSeasonData: {
        ...state.allBasicSeasonData,
        data: undefined
      }
    });
    expect(result).toBeUndefined();
  });

  test('returns the selected food', () => {
    const result = selectSeasonsSelectedForFood(state);
    expect(result).toEqual([
      {
        isSelected: false,
        name: 'January'
      },
      {
        isSelected: true,
        name: 'February'
      }
    ]);
  });

});
