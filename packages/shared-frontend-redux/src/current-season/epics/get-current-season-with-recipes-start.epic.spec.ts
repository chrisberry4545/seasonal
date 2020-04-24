import { DIET_TYPE } from '@chrisb-dev/seasonal-shared-models';
import { of } from 'rxjs';
import { setRegion, setUserRegionDetected } from '../../country';
import { initSettings, ISettingsState, setDietType } from '../../settings';
import { foodDetailsSelectSeason, selectSeason } from '../../ui';
import { setCurrentSeasonWithRecipesStart } from '../current-season.actions';
import { getCurrentSeasonWithRecipesStart$ } from './get-current-season-with-recipes-start.epic';

describe('getCurrentSeasonWithRecipesStart$', () => {
  test.each([
    selectSeason(1),
    initSettings({} as ISettingsState),
    foodDetailsSelectSeason(1),
    setDietType(DIET_TYPE.VEGAN),
    setUserRegionDetected('regionId'),
    setRegion('regionId')
  ])('returns setCurrentSeasonWithRecipesStart', async (action) => {
    const result = await getCurrentSeasonWithRecipesStart$(
      of(action) as any,
      of(null) as any,
      {}
    ).toPromise();
    expect(result).toEqual(setCurrentSeasonWithRecipesStart());
  });
});
