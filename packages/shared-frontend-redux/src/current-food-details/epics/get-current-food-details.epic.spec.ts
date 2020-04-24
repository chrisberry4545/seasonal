import * as sharedFrontendUtilities from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { DIET_TYPE, IHydratedFood } from '@chrisb-dev/seasonal-shared-models';
import { of } from 'rxjs';
import { setError } from '../../error';
import * as settings from '../../settings';
import {
  setCurrentFoodDetailsOnDietChange,
  setCurrentFoodDetailsStart,
  setCurrentFoodDetailsSuccess
} from '../current-food-details.actions';
import { getCurrentFoodDetailsEpic$ } from './get-current-food-details.epic';

describe('getCurrentFoodDetailsEpic$', () => {

  beforeEach(() => {
    jest.spyOn(settings, 'selectSettingsDietType')
      .mockReturnValue(DIET_TYPE.ALL);
    jest.spyOn(settings, 'selectSettingsRegionId')
      .mockReturnValue('regionId');
  });

  describe('when getFoodDetailsData is successful', () => {
    const foodDetails = {} as IHydratedFood;
    beforeEach(() =>
      jest.spyOn(sharedFrontendUtilities, 'getFoodDetailsData')
        .mockResolvedValue(foodDetails)
    );

    test.each([
      setCurrentFoodDetailsStart('foodId'),
      setCurrentFoodDetailsOnDietChange()
    ])('returns setCurrentFoodDetailsSuccess', async (action) => {
      const result = await getCurrentFoodDetailsEpic$(
        of(action) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toEqual(setCurrentFoodDetailsSuccess(foodDetails));
    });
  });

  describe('when getFoodDetailsData errors', () => {
    const error = new Error('test-error');
    beforeEach(() =>
      jest.spyOn(sharedFrontendUtilities, 'getFoodDetailsData')
        .mockRejectedValue(error)
    );

    test.each([
      setCurrentFoodDetailsStart('foodId'),
      setCurrentFoodDetailsOnDietChange()
    ])('returns setCurrentFoodDetailsSuccess', async (action) => {
      const result = await getCurrentFoodDetailsEpic$(
        of(action) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toEqual(setError(error));
    });
  });

});
