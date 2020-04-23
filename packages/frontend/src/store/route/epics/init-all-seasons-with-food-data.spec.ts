import { setAllSeasonsWithFoodStart } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { goToFoodTab } from '../../web-ui';
import * as webUiSelectors from '../../web-ui/web-ui.selectors';
import * as selectors from '../route.selectors';
import { initAllSeasonsWithFoodData$ } from './init-all-seasons-with-food-data';

const testScheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
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
