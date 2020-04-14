import {
  selectAllSeasonsWithFoodAndSearchAppliedData,
  selectAllSeasonsVisibleFoodData,
  selectFoodInSeasonGraphData
} from './all-seasons-with-food-and-search.selectors';
import { IState } from '../state.interface';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';

describe('selectAllSeasonsWithFoodAndSearchAppliedData', () => {
  test('returns undefined if there are no seasons', () => {
    const result = selectAllSeasonsWithFoodAndSearchAppliedData({
      allSeasons: {
        data: undefined
      },
      ui: {}
    } as IState);
    expect(result).toBeUndefined();
  });

  test('returns the season with food that matches the search term', () => {
    const seasons = [{
      food: [{
        name: 'food1'
      }, {
        name: 'food2'
      }, {
        name: 'other'
      }]
    }] as IHydratedSeason[];
    const result = selectAllSeasonsWithFoodAndSearchAppliedData({
      allSeasons: {
        data: seasons
      },
      ui: {
        searchTerm: 'food'
      }
    } as IState);
    expect(result).toEqual([{
      food: [{
        name: 'food1'
      }, {
        name: 'food2'
      }]
    }]);
  });
});

describe('selectAllSeasonsVisibleFoodData', () => {
  test('returns undefined if there are no seasons', () => {
    const result = selectAllSeasonsVisibleFoodData({
      allSeasons: {
        data: undefined
      },
      ui: {}
    } as IState);
    expect(result).toBeUndefined();
  });

  test('returns the food seasons with food that matches the search terms even if number of seasons is defined', () => {
    const seasons = [{
      food: [{
        name: 'food1'
      }, {
        name: 'food2'
      }, {
        name: 'other'
      }]
    }, {
      food: [{
        name: 'food1'
      }]
    }, {
      food: [{
        name: 'other'
      }]
    }] as IHydratedSeason[];
    const result = selectAllSeasonsVisibleFoodData({
      allSeasons: {
        data: seasons,
        numberOfSeasonsInView: 1
      },
      ui: {
        searchTerm: 'food'
      }
    } as IState);
    expect(result).toEqual([{
      food: [{
        name: 'food1'
      }, {
        name: 'food2'
      }]
    }, {
      food: [{
        name: 'food1'
      }]
    }]);
  });

  test('returns the correct number of seasons in view', () => {
    const seasons = [{
      food: [{
        name: 'food1'
      }, {
        name: 'food2'
      }, {
        name: 'other'
      }]
    }, {
      food: [{
        name: 'food1'
      }]
    }, {
      food: [{
        name: 'other'
      }]
    }] as IHydratedSeason[];
    const result = selectAllSeasonsVisibleFoodData({
      allSeasons: {
        data: seasons,
        numberOfSeasonsInView: 1
      },
      ui: {}
    } as IState);
    expect(result).toEqual([{
      food: [{
        name: 'food1'
      }, {
        name: 'food2'
      }, {
        name: 'other'
      }]
    }]);
  });

});

describe('selectFoodInSeasonGraphData', () => {

  test('returns undefined if there are no seasons', () => {
    const result = selectFoodInSeasonGraphData({
      allSeasons: {
        data: undefined
      },
      ui: {}
    } as IState);
    expect(result).toBeUndefined();
  });

  test('returns undefined if there are no seasons', () => {
    const seasons = [{
      food: [{
        name: 'food1'
      }, {
        name: 'food2'
      }, {
        name: 'other'
      }],
      name: 'January'
    }, {
      food: [{
        name: 'food1'
      }],
      name: 'February'
    }, {
      food: [{
        name: 'other'
      }],
      name: 'March'
    }] as IHydratedSeason[];
    const result = selectFoodInSeasonGraphData({
      allSeasons: {
        data: seasons
      },
      ui: {}
    } as IState);
    expect(result).toEqual([{
      'Number of food items in season': 3,
      'name': 'January'
    }, {
      'Number of food items in season': 1,
      'name': 'February'
    }, {
      'Number of food items in season': 1,
      'name': 'March'
    }]);
  });

});
