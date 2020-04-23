import {
  goToRecipeLink$,
  goToFoodLink$,
  goToSettingsPage$,
  goToFoodTable$,
  goToAllSeasonsView$,
  goToWebVersion$,
  goToFoodDetails$,
  initFoodDetails$,
  initAllSeasonsWithFoodData$,
  initAllSeasonsWithRecipesData$
} from './route.epics';
import * as sharedFrontendRedux from '@chrisb-dev/seasonal-shared-frontend-redux';
import { IRecipe } from '@chrisb-dev/seasonal-shared-models';
import {
  foodDetailsSelectRecipe,
  recipeItemClicked,
  ISetCurrentFoodDetailsStart,
  foodItemClicked,
  setCurrentFoodDetailsStart,
  goToSettingsPage,
  setRegion,
  goBackFromSettingsPage,
  selectSeason,
  foodDetailsSelectSeason,
  goToAllSeasonsView,
  showLocationPopup,
  initApp,
  setAllSeasonsWithFoodStart,
  setAllSeasonsWithRecipesStart
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { of } from 'rxjs';
import {
  FOOD_TABLE_URL,
  SETTINGS_URL,
  ALL_SEASONS_URL,
  FOOD_DETAILS_URL
} from '../../const';
import { goBackFromFoodDetails, goToWebVersion } from './route.actions';
import { Action } from 'redux';
import { push } from 'connected-react-router';
import * as selectors from '../route/route.selectors';
import * as webUiSelectors from '../web-ui/web-ui.selectors';
import { TestScheduler } from 'rxjs/testing';
import { goToRecipesTab, goToFoodTab } from '../web-ui';

const testScheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});

describe('goToWebVersion$', () => {
  let result: Action;

  beforeEach(async () => {
    result = await goToWebVersion$(
      of(goToWebVersion()) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('returns the route to the food table', () =>
    expect(result).toEqual(push(FOOD_TABLE_URL)));

});

describe.each([
  foodDetailsSelectRecipe('r1'),
  recipeItemClicked('r1')
])('goToRecipeLink$', (action) => {
  let mockWindowOpen: jest.SpyInstance;

  beforeEach(() =>  {
    mockWindowOpen = jest
      .spyOn(window, 'open').mockImplementation();
    mockWindowOpen.mockClear();
  });

  describe('when a recipe exists', () => {
    const linkUrl = 'http://link.com';

    beforeEach(async () => {
      jest.spyOn(sharedFrontendRedux, 'selectCurrentSeasonRecipesById')
        .mockReturnValue((() => ({
          linkUrl
        } as IRecipe)) as any);
      await goToRecipeLink$(
        of(action) as any,
        of(null) as any,
        {}
      ).toPromise();
    });

    test('calls window open with the recipes url', () =>
      expect(mockWindowOpen).toHaveBeenCalledWith(linkUrl, '_blank'));
  });

  describe('when a recipe does not exist', () => {
    beforeEach(async () => {
      jest.spyOn(sharedFrontendRedux, 'selectCurrentSeasonRecipesById')
        .mockReturnValue((() => undefined) as any);
      await goToRecipeLink$(
        of(action) as any,
        of(null) as any,
        {}
      ).toPromise();
    });

    test('does not window open', () =>
      expect(mockWindowOpen).not.toHaveBeenCalled());
  });
});

describe('goToFoodLink$', () => {
  let result: ISetCurrentFoodDetailsStart;
  const foodId = 'foodId';

  beforeEach(async () => {
    result = await goToFoodLink$(
      of(foodItemClicked(foodId)) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('returns an action to route to the food details', () =>
    expect(result).toEqual(push(
      `${FOOD_DETAILS_URL}/${foodId}`
    )));

});

describe('goToFoodDetails$', () => {
  let result: ISetCurrentFoodDetailsStart;
  const foodId = 'foodId';

  beforeEach(async () => {
    result = await goToFoodDetails$(
      of(foodItemClicked(foodId)) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('returns setCurrentFoodDetailsStart', () =>
    expect(result).toEqual(setCurrentFoodDetailsStart(foodId)));
});

describe('initFoodDetails$', () => {
  let result: Action | undefined;
  const foodId = 'foodId';

  beforeEach(() => result = undefined);

  describe('when there is food details id', () => {
    beforeEach(async () => {
      jest.spyOn(selectors, 'selectCurrentFoodDetailsId')
        .mockReturnValue(foodId);
      result = await initFoodDetails$(
        of(initApp()) as any,
        of(null) as any,
        {}
      ).toPromise();
    });

    test('returns setCurrentFoodDetailsStart', () =>
      expect(result).toEqual(setCurrentFoodDetailsStart(foodId)));

  });

  describe('when there is no food details id', () => {
    beforeEach(async () => {
      jest.spyOn(selectors, 'selectCurrentFoodDetailsId')
        .mockReturnValue(null);
      result = await initFoodDetails$(
        of(initApp()) as any,
        of(null) as any,
        {}
      ).toPromise();
    });

    test('does not return anything', () => expect(result).toBeUndefined());

  });

});

describe('initAllSeasonsWithFoodData$', () => {

  beforeEach(() => {
    jest.spyOn(selectors, 'selectIsCurrentRouteAllSeasons')
      .mockReturnValue(true);
    jest.spyOn(webUiSelectors, 'selectIsCurrentTabFood')
      .mockReturnValue(true);
  });

  test('returns setAllSeasonsWithFoodStart', () => {
    testScheduler.run(({ cold, expectObservable }) => {
      const input = cold('a', {
        a: goToFoodTab()
      });
      const expected = '50ms r';

      expectObservable(
        initAllSeasonsWithFoodData$(
          input as any,
          of(null) as any,
          {}
        )
      ).toBe(expected, {
        r: setAllSeasonsWithFoodStart()
      });
    });
  });

});

describe.skip('initAllSeasonsWithRecipesData$', () => {

  beforeEach(() => {
    jest.spyOn(selectors, 'selectIsCurrentRouteAllSeasons')
      .mockReturnValue(true);
    jest.spyOn(webUiSelectors, 'selectIsCurrentTabRecipes')
      .mockReturnValue(true);
  });

  test('returns setAllSeasonsWithRecipesStart', () => {
    testScheduler.run(({ cold, expectObservable }) => {
      const input = cold('a', {
        a: goToRecipesTab()
      });
      const expected = '50ms r';

      expectObservable(
        initAllSeasonsWithRecipesData$(
          input as any,
          of(null) as any,
          {}
        )
      ).toBe(expected, {
        r: setAllSeasonsWithRecipesStart()
      });
    });
  });

});

describe.each([
  setRegion('regionId'),
  goBackFromSettingsPage(),
  goBackFromFoodDetails(),
  foodDetailsSelectSeason(1),
  selectSeason(1)
])('goToFoodTable$', (action) => {
  let result: Action;

  beforeEach(async () => {
    result = await goToFoodTable$(
      of(action) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('returns an action to route to food table', () =>
    expect(result).toEqual(push(FOOD_TABLE_URL)));

});

describe('goToAllSeasonsView$', () => {
  let result: Action;

  beforeEach(async () => {
    result = await goToAllSeasonsView$(
      of(goToAllSeasonsView()) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('returns an action to route to the all seasons view', () =>
    expect(result).toEqual(push(ALL_SEASONS_URL)));

});

describe.each([
  goToSettingsPage(),
  showLocationPopup()
])('goToSettingsPage$', () => {
  let result: Action;

  beforeEach(async () => {
    result = await goToSettingsPage$(
      of(goToSettingsPage()) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('returns an action to route to the settings url', () =>
    expect(result).toEqual(push(SETTINGS_URL)));

});
