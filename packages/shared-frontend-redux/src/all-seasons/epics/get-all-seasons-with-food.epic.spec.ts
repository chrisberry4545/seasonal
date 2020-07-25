import {
  getAllSeasonsWithFood$
} from './get-all-seasons-with-food.epic';
import {
  setAllSeasonsWithFoodStart,
  setAllSeasonsWithFoodSuccess
} from '../all-seasons.actions';
import { of } from 'rxjs';
import { IHydratedSeason, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import * as sharedFrontendUtilities from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { setError } from '../../error';
import * as settings from '../../settings';

describe('getAllSeasonsWithFood$', () => {
  beforeEach(() => {
    jest.spyOn(settings, 'selectSettingsRegionId')
      .mockReturnValue('regionId');
    jest.spyOn(settings, 'selectSettingsLanguage')
      .mockReturnValue(LANGUAGES.EN_US);
  });

  describe('when setAllSeasonsWithFoodSuccess is successful', () => {
    const seasonsWithFood = [{}, {}] as IHydratedSeason[];

    beforeEach(() =>
      jest.spyOn(sharedFrontendUtilities, 'getAllSeasonsWithFood')
        .mockResolvedValue(seasonsWithFood)
    );

    test('returns setAllSeasonsWithFoodSuccess with the data', async () => {
      const result = await getAllSeasonsWithFood$(
        of(setAllSeasonsWithFoodStart()) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toEqual(setAllSeasonsWithFoodSuccess(
        seasonsWithFood
      ));
    });
  });

  describe('when setAllSeasonsWithFoodSuccess errors', () => {
    const error = new Error('test-error');

    beforeEach(() =>
      jest.spyOn(sharedFrontendUtilities, 'getAllSeasonsWithFood')
        .mockRejectedValue(error)
    );

    test('returns setError', async () => {
      const result = await getAllSeasonsWithFood$(
        of(setAllSeasonsWithFoodStart()) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toEqual(setError(error));
    });
  });

});
