import { setAllSeasonsWithRecipesStart, initApp, setDietType } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { of } from 'rxjs';
import { goToRecipesTab } from '../../web-ui';
import * as webUiSelectors from '../../web-ui/web-ui.selectors';
import * as selectors from '../route.selectors';
import { initAllSeasonsWithRecipesData$ } from './init-all-seasons-with-recipes-data.epic';
import { DIET_TYPE } from '@chrisb-dev/seasonal-shared-models';
import { Action } from 'redux';

describe.each([
  initApp(),
  goToRecipesTab(),
  setDietType(DIET_TYPE.VEGAN)
])('initAllSeasonsWithRecipesData$', (action) => {
  let result: Action | undefined;

  beforeEach(() => result = undefined);

  describe('when the current route is all seasons', () => {
    beforeEach(() =>
      jest.spyOn(selectors, 'selectIsCurrentRouteAllSeasons')
      .mockReturnValue(true)
    );

    describe('and the tab is recipes', () => {
      beforeEach(async () => {
        jest.spyOn(webUiSelectors, 'selectIsCurrentTabRecipes')
          .mockReturnValue(true);
        result = await initAllSeasonsWithRecipesData$(
          of(action) as any,
          of(null) as any,
          {}
        ).toPromise();
      });

      test('returns setAllSeasonsWithRecipesStart', () =>
        expect(result).toEqual(setAllSeasonsWithRecipesStart()));
    });

    describe('and the tab is not recipes', () => {
      beforeEach(async () => {
        jest.spyOn(webUiSelectors, 'selectIsCurrentTabRecipes')
          .mockReturnValue(false);
        result = await initAllSeasonsWithRecipesData$(
          of(action) as any,
          of(null) as any,
          {}
        ).toPromise();
      });

      test('returns nothing', () => expect(result).toBeUndefined());
    });

  });

  describe('when the current route is not all seasons', () => {
    beforeEach(() =>
      jest.spyOn(selectors, 'selectIsCurrentRouteAllSeasons')
      .mockReturnValue(false)
    );

    describe('and the tab is recipes', () => {
      beforeEach(async () => {
        jest.spyOn(webUiSelectors, 'selectIsCurrentTabRecipes')
          .mockReturnValue(true);
        result = await initAllSeasonsWithRecipesData$(
          of(action) as any,
          of(null) as any,
          {}
        ).toPromise();
      });

      test('returns nothing', () => expect(result).toBeUndefined());

    });

    describe('and the tab is not recipes', () => {
      beforeEach(async () => {
        jest.spyOn(webUiSelectors, 'selectIsCurrentTabRecipes')
          .mockReturnValue(false);
        result = await initAllSeasonsWithRecipesData$(
          of(action) as any,
          of(null) as any,
          {}
        ).toPromise();
      });

      test('returns nothing', () => expect(result).toBeUndefined());
    });

  });

});
