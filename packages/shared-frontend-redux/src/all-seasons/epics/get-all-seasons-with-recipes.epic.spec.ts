import {
  getAllSeasonsWithRecipes$
} from './get-all-seasons-with-recipes.epic';
import {
  setAllSeasonsWithRecipesStart,
  setAllSeasonsWithRecipesSuccess
} from '../all-seasons.actions';
import { of } from 'rxjs';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import * as sharedFrontendUtilities from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { setError } from '../../error';
import * as settings from '../../settings';

describe('getAllSeasonsWithRecipes$', () => {

  beforeEach(() =>
    jest.spyOn(settings, 'selectSettingsRegionId')
      .mockReturnValue('regionId')
  );

  describe('when getAllSeasonsWithRecipes is successful', () => {
    const seasonsWithRecipes = [{}] as IHydratedSeason[];

    beforeEach(() =>
      jest.spyOn(sharedFrontendUtilities, 'getAllSeasonsWithRecipes')
        .mockResolvedValue(seasonsWithRecipes)
    );

    test('returns getAllSeasonsWithRecipes with the data', async () => {
      const result = await getAllSeasonsWithRecipes$(
        of(setAllSeasonsWithRecipesStart()) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toEqual(setAllSeasonsWithRecipesSuccess(
        seasonsWithRecipes
      ));
    });
  });

  describe('when getAllSeasonsWithRecipes errors', () => {
    const error = new Error('test-error');

    beforeEach(() =>
      jest.spyOn(sharedFrontendUtilities, 'getAllSeasonsWithRecipes')
        .mockRejectedValue(error)
    );

    test('returns setError', async () => {
      const result = await getAllSeasonsWithRecipes$(
        of(setAllSeasonsWithRecipesStart()) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toEqual(setError(error));
    });
  });
});
