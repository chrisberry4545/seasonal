import {
  getAllSeasonsWithRecipes$
} from './get-all-seasons-with-recipes.epic';
import {
  setAllSeasonsWithRecipesStart,
  setAllSeasonsWithRecipesSuccess
} from '../all-seasons.actions';
import { of } from 'rxjs';
import { IHydratedSeason, DIET_TYPE, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import * as sharedFrontendUtilities from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { setError } from '../../error';
import * as settings from '../../settings';
import { Action } from 'redux';
import { setLanguageSuccess } from '../../settings';

describe.each([
  setAllSeasonsWithRecipesStart(),
  setLanguageSuccess()
])('getAllSeasonsWithRecipes$', (action) => {

  beforeEach(() => {
    jest.spyOn(settings, 'selectSettingsRegionId')
      .mockReturnValue('regionId');
    jest.spyOn(settings, 'selectSettingsDietType')
      .mockReturnValue(DIET_TYPE.VEGAN);
    jest.spyOn(settings, 'selectSettingsLanguage')
      .mockReturnValue(LANGUAGES.EN_US);
  });

  describe('when getAllSeasonsWithRecipes is successful', () => {
    const seasonsWithRecipes = [{}] as IHydratedSeason[];
    let mockGetAllSeasonsWithRecipes: jest.SpyInstance;
    let result: Action;

    beforeEach(async () => {
      mockGetAllSeasonsWithRecipes =
        jest.spyOn(sharedFrontendUtilities, 'getAllSeasonsWithRecipes')
          .mockResolvedValue(seasonsWithRecipes);
      mockGetAllSeasonsWithRecipes.mockClear();
      result = await getAllSeasonsWithRecipes$(
        of(action) as any,
        of(null) as any,
        {}
      ).toPromise();
    });

    test('calls getAllSeasonsWithRecipes with the expected values', () =>
      expect(mockGetAllSeasonsWithRecipes).toHaveBeenCalledWith(
        false, true, 'regionId', LANGUAGES.EN_US
      ));

    test('returns getAllSeasonsWithRecipes with the data', () =>
      expect(result).toEqual(setAllSeasonsWithRecipesSuccess(
        seasonsWithRecipes
      )));

  });

  describe('when getAllSeasonsWithRecipes errors', () => {
    const error = new Error('test-error');

    beforeEach(() =>
      jest.spyOn(sharedFrontendUtilities, 'getAllSeasonsWithRecipes')
        .mockRejectedValue(error)
    );

    test('returns setError', async () => {
      const result = await getAllSeasonsWithRecipes$(
        of(action) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toEqual(setError(error));
    });
  });
});
