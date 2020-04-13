import {
  updateFoodDetailsOnDietTypeChangeEpic$,
  getCurrentFoodDetailsEpic$
} from './current-food-details.epics';
import { IHydratedFood, DIET_TYPE } from '@chrisb-dev/seasonal-shared-models';
import * as sharedFrontendUtilities from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { of } from 'rxjs';
import {
  setCurrentFoodDetailsStart,
  setCurrentFoodDetailsOnDietChange
} from './current-food-details.actions';
import {
  setError
} from '../error';
import {
  setDietType
} from '../settings';
import { setCurrentFoodDetailsSuccess } from './current-food-details.actions';
import * as currentFoodDetails from '../current-food-details';
import * as settings from '../settings';

describe('updateFoodDetailsOnDietTypeChangeEpic$', () => {

  describe('when the current foodId is not defined', () => {
    beforeEach(() =>
      jest.spyOn(currentFoodDetails, 'selectCurrentFoodDetailsId')
        .mockReturnValue(undefined)
    );

    test('does not return anything', async () => {
      const result = await updateFoodDetailsOnDietTypeChangeEpic$(
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
      jest.spyOn(currentFoodDetails, 'selectCurrentFoodDetailsId')
        .mockReturnValue(foodId)
    );

    test('returns setCurrentFoodDetailsOnDietChange', async () => {
      const result = await updateFoodDetailsOnDietTypeChangeEpic$(
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
