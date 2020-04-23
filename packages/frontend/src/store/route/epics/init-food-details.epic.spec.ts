import { initApp, setCurrentFoodDetailsStart } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { of } from 'rxjs';
import * as selectors from '../route.selectors';
import { initFoodDetails$ } from './init-food-details.epic';

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
