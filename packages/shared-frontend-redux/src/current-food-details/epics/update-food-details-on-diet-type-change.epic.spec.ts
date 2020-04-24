import { DIET_TYPE } from '@chrisb-dev/seasonal-shared-models';
import { of } from 'rxjs';
import { setDietType } from '../../settings';
import { setCurrentFoodDetailsOnDietChange } from '../current-food-details.actions';
import * as selectors from '../current-food-details.selectors';
import { updateFoodDetailsOnDietTypeChange$ } from './update-food-details-on-diet-type-change.epic';

describe('updateFoodDetailsOnDietTypeChange$', () => {

  describe('when the current foodId is not defined', () => {
    beforeEach(() =>
      jest.spyOn(selectors, 'selectCurrentFoodDetailsId')
        .mockReturnValue(undefined)
    );

    test('does not return anything', async () => {
      const result = await updateFoodDetailsOnDietTypeChange$(
        of(setDietType(DIET_TYPE.VEGAN)) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toBeUndefined();
    });
  });
  describe('when the current foodId is defined', () => {
    const foodId = 'foodId';
    beforeEach(() =>
      jest.spyOn(selectors, 'selectCurrentFoodDetailsId')
        .mockReturnValue(foodId)
    );

    test('returns setCurrentFoodDetailsOnDietChange', async () => {
      const result = await updateFoodDetailsOnDietTypeChange$(
        of(setDietType(DIET_TYPE.VEGAN)) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toEqual(
        setCurrentFoodDetailsOnDietChange(foodId)
      );
    });
  });

});
