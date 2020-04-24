import { of } from 'rxjs';
import { setRegion, setUserRegionDetected } from '../../country';
import { initSettings, ISettingsState } from '../../settings';
import { foodDetailsSelectSeason, selectSeason } from '../../ui';
import { setCurrentSeasonWithFoodStart } from '../current-season.actions';
import { getCurrentSeasonWithFoodStart$ } from './get-current-season-with-food-start.epic';

describe('getCurrentSeasonWithFoodStart$', () => {
  test.each([
    selectSeason(1),
    initSettings({} as ISettingsState),
    foodDetailsSelectSeason(1),
    setUserRegionDetected('regionId'),
    setRegion('regionId')
  ])('returns setCurrentSeasonWithFoodStart', async (action) => {
    const result = await getCurrentSeasonWithFoodStart$(
      of(action) as any,
      of(null) as any,
      {}
    ).toPromise();
    expect(result).toEqual(setCurrentSeasonWithFoodStart());
  });
});
