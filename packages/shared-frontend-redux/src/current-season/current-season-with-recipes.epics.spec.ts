import {
  getCurrentSeasonWithRecipesStartEpic$,
  getCurrentSeasonWithRecipesEpic$
} from './current-season-with-recipes.epics';
import {
  selectSeason,
  foodDetailsSelectSeason
} from '../ui';
import {
  setUserRegionDetected,
  setRegion
} from '../country';
import {
  setError
} from '../error';
import {
  initSettings,
  ISettingsState,
  setDietType
} from '../settings';
import { of } from 'rxjs';
import { setCurrentSeasonWithRecipesStart, setCurrentSeasonWithRecipesSuccess } from './current-season.actions';
import * as settings from '../settings';
import * as currentSeason from '../current-season';
import * as sharedFrontendUtilities from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { IHydratedSeason, DIET_TYPE } from '@chrisb-dev/seasonal-shared-models';

describe('getCurrentSeasonWithRecipesStartEpic$', () => {
  test.each([
    selectSeason(1),
    initSettings({} as ISettingsState),
    foodDetailsSelectSeason(1),
    setDietType(DIET_TYPE.VEGAN),
    setUserRegionDetected('regionId'),
    setRegion('regionId')
  ])('returns setCurrentSeasonWithRecipesStart', async (action) => {
    const result = await getCurrentSeasonWithRecipesStartEpic$(
      of(action) as any,
      of(null) as any,
      {}
    ).toPromise();
    expect(result).toEqual(setCurrentSeasonWithRecipesStart());
  });
});

describe('getCurrentSeasonWithRecipesEpic$', () => {
  beforeEach(() => {
    jest.spyOn(settings, 'selectSettingsDietType')
      .mockReturnValue(DIET_TYPE.ALL);
    jest.spyOn(settings, 'selectSettingsRegionId')
      .mockReturnValue('regionId');
    jest.spyOn(currentSeason, 'selectCurrentSeasonIndex')
      .mockReturnValue(1);
  });

  describe('when getSeasonWithRecipes is successful', () => {
    const season = {} as IHydratedSeason;

    beforeEach(() =>
      jest.spyOn(sharedFrontendUtilities, 'getSeasonWithRecipes')
        .mockResolvedValue(season)
    );

    test('returns setCurrentSeasonWithRecipesSuccess', async () => {
      const result = await getCurrentSeasonWithRecipesEpic$(
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
      const result = await getCurrentSeasonWithRecipesEpic$(
        of(setCurrentSeasonWithRecipesStart()) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toEqual(setError(error));
    });

  });
});
