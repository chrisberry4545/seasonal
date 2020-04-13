import {
  getCurrentSeasonWithFoodStartEpic$,
  getCurrentSeasonWithFoodEpic$
} from './current-season-with-food.epics';
import {
  selectSeason,
  foodDetailsSelectSeason
} from '../ui';
import {
  initSettings,
  ISettingsState
} from '../settings';
import {
  setError
} from '../error';
import {
  setRegion,
  setUserRegionDetected
} from '../country';
import { of } from 'rxjs';
import { setCurrentSeasonWithFoodStart, setCurrentSeasonWithFoodSuccess } from './current-season.actions';
import * as settings from '../settings';
import * as currentSeason from '../current-season';
import * as sharedFrontendUtilities from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';

describe('getCurrentSeasonWithFoodStartEpic$', () => {
  test.each([
    selectSeason(1),
    initSettings({} as ISettingsState),
    foodDetailsSelectSeason(1),
    setUserRegionDetected('regionId'),
    setRegion('regionId')
  ])('returns setCurrentSeasonWithFoodStart', async (action) => {
    const result = await getCurrentSeasonWithFoodStartEpic$(
      of(action) as any,
      of(null) as any,
      {}
    ).toPromise();
    expect(result).toEqual(setCurrentSeasonWithFoodStart());
  });
});

describe('getCurrentSeasonWithFoodEpic$', () => {
  beforeEach(() => {
    jest.spyOn(settings, 'selectSettingsRegionId')
      .mockReturnValue('regionId');
    jest.spyOn(currentSeason, 'selectCurrentSeasonIndex')
      .mockReturnValue(1);
  });

  describe('when getSeasonWithFood is successful', () => {
    const season = {} as IHydratedSeason;

    beforeEach(() =>
      jest.spyOn(sharedFrontendUtilities, 'getSeasonWithFood')
        .mockResolvedValue(season)
    );

    test('returns setCurrentSeasonWithFoodSuccess', async () => {
      const result = await getCurrentSeasonWithFoodEpic$(
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
      const result = await getCurrentSeasonWithFoodEpic$(
        of(setCurrentSeasonWithFoodStart()) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toEqual(setError(error));
    });

  });
});
