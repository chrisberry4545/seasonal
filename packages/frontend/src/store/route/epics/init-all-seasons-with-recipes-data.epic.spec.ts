import { setAllSeasonsWithRecipesStart } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { goToRecipesTab } from '../../web-ui';
import * as webUiSelectors from '../../web-ui/web-ui.selectors';
import * as selectors from '../route.selectors';
import { initAllSeasonsWithRecipesData$ } from './init-all-seasons-with-recipes-data.epic';

const testScheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});

describe('initAllSeasonsWithRecipesData$', () => {

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
