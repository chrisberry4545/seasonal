import {
  ISetCurrentFoodDetailsStart,
  setCurrentFoodDetailsStart,
  initApp
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { of } from 'rxjs';
import { goToFoodDetails$ } from './go-to-food-details.epic';
import * as routeSelectors from '../route.selectors';

describe('goToFoodDetails$', () => {
  let result: ISetCurrentFoodDetailsStart | undefined;
  const foodId = 'foodId';

  beforeEach(() => result = undefined);

  describe('when the current route is badge details and has an id', () => {

    beforeEach(async () => {
      jest.spyOn(routeSelectors, 'selectCurrentFoodDetailsId')
        .mockReturnValue(foodId);
      result = await goToFoodDetails$(
        of(initApp()) as any,
        of(null) as any,
        {}
      ).toPromise();
    });

    test('returns setCurrentFoodDetailsStart', () =>
      expect(result).toEqual(setCurrentFoodDetailsStart(foodId)));

  });

  describe('when the current route is badge details but has no id', () => {

    beforeEach(async () => {
      jest.spyOn(routeSelectors, 'selectCurrentFoodDetailsId')
        .mockReturnValue(null);
      result = await goToFoodDetails$(
        of(initApp()) as any,
        of(null) as any,
        {}
      ).toPromise();
    });

    test('returns setCurrentFoodDetailsStart', () =>
      expect(result).toBeUndefined());

  });

});
