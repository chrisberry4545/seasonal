import * as sharedFrontendUtilities from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { DIET_TYPE, IHydratedSeason, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { of } from 'rxjs';
import { setError } from '../../error';
import * as settings from '../../settings';
import { setCurrentSeasonWithRecipesStart, setCurrentSeasonWithRecipesSuccess } from '../current-season.actions';
import * as selectors from '../current-season.selectors';
import { getCurrentSeasonWithRecipes$ } from './get-current-season-with-recipes.epic';

describe('getCurrentSeasonWithRecipes$', () => {
  beforeEach(() => {
    jest.spyOn(settings, 'selectSettingsDietType')
      .mockReturnValue(DIET_TYPE.ALL);
    jest.spyOn(settings, 'selectSettingsRegionId')
      .mockReturnValue('regionId');
    jest.spyOn(selectors, 'selectCurrentSeasonIndex')
      .mockReturnValue(1);
    jest.spyOn(settings, 'selectSettingsLanguage')
      .mockReturnValue(LANGUAGES.EN_US);
  });

  describe('when getSeasonWithRecipes is successful', () => {
    const season = {} as IHydratedSeason;

    beforeEach(() =>
      jest.spyOn(sharedFrontendUtilities, 'getSeasonWithRecipes')
        .mockResolvedValue(season)
    );

    test('returns setCurrentSeasonWithRecipesSuccess', async () => {
      const result = await getCurrentSeasonWithRecipes$(
        of(setCurrentSeasonWithRecipesStart()) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toEqual(setCurrentSeasonWithRecipesSuccess(
        season
      ));
    });

  });

  describe('when getSeasonWithRecipes errors', () => {
    const error = new Error('test-error');

    beforeEach(() =>
      jest.spyOn(sharedFrontendUtilities, 'getSeasonWithRecipes')
        .mockRejectedValue(error)
    );

    test('returns setError', async () => {
      const result = await getCurrentSeasonWithRecipes$(
        of(setCurrentSeasonWithRecipesStart()) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toEqual(setError(error));
    });

  });
});
