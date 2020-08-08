import { DIET_TYPE } from '@chrisb-dev/seasonal-shared-models';
import { of } from 'rxjs';
import { setDietType, setLanguageSuccess } from '../../settings';
import { setCurrentFoodDetailsOnChange } from '../current-food-details.actions';
import * as selectors from '../current-food-details.selectors';
import { updateFoodDetailsOnChange$ } from './update-food-details-on-change.epic';

describe.each([
  setDietType(DIET_TYPE.VEGAN),
  setLanguageSuccess()
])('updateFoodDetailsOnChange$', (action) => {

  describe('when the current foodId is not defined', () => {
    beforeEach(() =>
      jest.spyOn(selectors, 'selectCurrentFoodDetailsId')
        .mockReturnValue(undefined)
    );

    test('does not return anything', async () => {
      const result = await updateFoodDetailsOnChange$(
        of(action) as any,
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

    test('returns setCurrentFoodDetailsOnChange', async () => {
      const result = await updateFoodDetailsOnChange$(
        of(action) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toEqual(
        setCurrentFoodDetailsOnChange(foodId)
      );
    });
  });

});
