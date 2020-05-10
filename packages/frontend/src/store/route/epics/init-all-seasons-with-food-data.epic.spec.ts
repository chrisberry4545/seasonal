import {
  initApp,
  setAllSeasonsWithFoodStart
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { of } from 'rxjs';
import { goToFoodTab } from '../../web-ui';
import * as webUiSelectors from '../../web-ui/web-ui.selectors';
import * as selectors from '../route.selectors';
import { initAllSeasonsWithFoodData$ } from './init-all-seasons-with-food-data.epic';
import { Action } from 'redux';

describe.each([
  initApp(),
  goToFoodTab()
])('initAllSeasonsWithFoodData$', (action) => {
  let result: Action | undefined;

  beforeEach(() => result = undefined);

  describe('when the current route is all seasons', () => {
    beforeEach(() =>
      jest.spyOn(selectors, 'selectIsCurrentRouteAllSeasons')
      .mockReturnValue(true)
    );

    describe('and the tab is food', () => {
      beforeEach(async () => {
        jest.spyOn(webUiSelectors, 'selectIsCurrentTabFood')
          .mockReturnValue(true);
        result = await initAllSeasonsWithFoodData$(
          of(action) as any,
          of(null) as any,
          {}
        ).toPromise();
      });

      test('returns setAllSeasonsWithFoodStart', () =>
        expect(result).toEqual(setAllSeasonsWithFoodStart()));
    });

    describe('and the tab is not food', () => {
      beforeEach(async () => {
        jest.spyOn(webUiSelectors, 'selectIsCurrentTabFood')
          .mockReturnValue(false);
        result = await initAllSeasonsWithFoodData$(
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

    describe('and the tab is food', () => {
      beforeEach(async () => {
        jest.spyOn(webUiSelectors, 'selectIsCurrentTabFood')
          .mockReturnValue(true);
        result = await initAllSeasonsWithFoodData$(
          of(action) as any,
          of(null) as any,
          {}
        ).toPromise();
      });

      test('returns nothing', () => expect(result).toBeUndefined());

    });

    describe('and the tab is not food', () => {
      beforeEach(async () => {
        jest.spyOn(webUiSelectors, 'selectIsCurrentTabFood')
          .mockReturnValue(false);
        result = await initAllSeasonsWithFoodData$(
          of(action) as any,
          of(null) as any,
          {}
        ).toPromise();
      });

      test('returns nothing', () => expect(result).toBeUndefined());
    });

  });

});
