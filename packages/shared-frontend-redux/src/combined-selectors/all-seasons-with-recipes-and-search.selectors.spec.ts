import {
  selectAllSeasonsWithRecipesAndSearchAppliedData,
  selectAllSeasonsVisibleRecipesData
} from './all-seasons-with-recipes-and-search.selectors';
import { IState } from '../state.interface';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';

describe('selectAllSeasonsWithRecipesAndSearchAppliedData', () => {
  test('returns undefined if there are no seasons', () => {
    const result = selectAllSeasonsWithRecipesAndSearchAppliedData({
      allSeasons: {
        data: undefined
      },
      ui: {}
    } as IState);
    expect(result).toBeUndefined();
  });

  test('returns the season with recipes that matches the search term', () => {
    const seasons = [{
      recipes: [{
        name: 'recipe1'
      }, {
        name: 'recipe2'
      }, {
        name: 'other'
      }]
    }] as IHydratedSeason[];
    const result = selectAllSeasonsWithRecipesAndSearchAppliedData({
      allSeasons: {
        data: seasons
      },
      ui: {
        searchTerm: 'recipe'
      }
    } as IState);
    expect(result).toEqual([{
      recipes: [{
        name: 'recipe1'
      }, {
        name: 'recipe2'
      }]
    }]);
  });
});

describe('selectAllSeasonsVisibleRecipesData', () => {
  test('returns undefined if there are no seasons', () => {
    const result = selectAllSeasonsVisibleRecipesData({
      allSeasons: {
        data: undefined
      },
      ui: {}
    } as IState);
    expect(result).toBeUndefined();
  });

  test('returns the seasons with recipes that matches the search terms even if number of seasons is defined', () => {
    const seasons = [{
      recipes: [{
        name: 'recipe1'
      }, {
        name: 'recipe2'
      }, {
        name: 'other'
      }]
    }, {
      recipes: [{
        name: 'recipe1'
      }]
    }, {
      recipes: [{
        name: 'other'
      }]
    }] as IHydratedSeason[];
    const result = selectAllSeasonsVisibleRecipesData({
      allSeasons: {
        data: seasons,
        numberOfSeasonsInView: 1
      },
      ui: {
        searchTerm: 'recipe'
      }
    } as IState);
    expect(result).toEqual([{
      recipes: [{
        name: 'recipe1'
      }, {
        name: 'recipe2'
      }]
    }, {
      recipes: [{
        name: 'recipe1'
      }]
    }]);
  });

  test('returns the correct number of seasons in view', () => {
    const seasons = [{
      recipes: [{
        name: 'recipe1'
      }, {
        name: 'recipe2'
      }, {
        name: 'other'
      }]
    }, {
      recipes: [{
        name: 'recipe1'
      }]
    }, {
      recipes: [{
        name: 'other'
      }]
    }] as IHydratedSeason[];
    const result = selectAllSeasonsVisibleRecipesData({
      allSeasons: {
        data: seasons,
        numberOfSeasonsInView: 1
      },
      ui: {}
    } as IState);
    expect(result).toEqual([{
      recipes: [{
        name: 'recipe1'
      }, {
        name: 'recipe2'
      }, {
        name: 'other'
      }]
    }]);
  });

});
