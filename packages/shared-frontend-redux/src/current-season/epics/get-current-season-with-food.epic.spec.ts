import * as sharedFrontendUtilities from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { IHydratedSeason, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { of } from 'rxjs';
import { setError } from '../../error';
import * as settings from '../../settings';
import { setCurrentSeasonWithFoodStart, setCurrentSeasonWithFoodSuccess } from '../current-season.actions';
import * as selectors from '../current-season.selectors';
import { getCurrentSeasonWithFood$ } from './get-current-season-with-food.epic';

describe('getCurrentSeasonWithFood$', () => {
  beforeEach(() => {
    jest.spyOn(settings, 'selectSettingsRegionId')
      .mockReturnValue('regionId');
    jest.spyOn(selectors, 'selectCurrentSeasonIndex')
      .mockReturnValue(1);
    jest.spyOn(settings, 'selectSettingsLanguage')
      .mockReturnValue(LANGUAGES.EN_US);
  });

  describe('when getSeasonWithFood is successful', () => {
    const season = {} as IHydratedSeason;

    beforeEach(() =>
      jest.spyOn(sharedFrontendUtilities, 'getSeasonWithFood')
        .mockResolvedValue(season)
    );

    test('returns setCurrentSeasonWithFoodSuccess', async () => {
      const result = await getCurrentSeasonWithFood$(
        of(setCurrentSeasonWithFoodStart()) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toEqual(setCurrentSeasonWithFoodSuccess(
        season
      ));
    });

  });

  describe('when getSeasonWithFood errors', () => {
    const error = new Error('test-error');

    beforeEach(() =>
      jest.spyOn(sharedFrontendUtilities, 'getSeasonWithFood')
        .mockRejectedValue(error)
    );

    test('returns setError', async () => {
      const result = await getCurrentSeasonWithFood$(
        of(setCurrentSeasonWithFoodStart()) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toEqual(setError(error));
    });

  });
});
