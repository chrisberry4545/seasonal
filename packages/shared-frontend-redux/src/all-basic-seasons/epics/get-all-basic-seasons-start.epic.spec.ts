import {
  getAllBasicSeasonsStart$
} from './get-all-basic-seasons-start.epic';
import { setAllSeasonsStart } from '../all-basic-seasons.actions';
import {
  initSettings,
  ISettingsState,
  setLanguageSuccess
} from '../../settings';
import {
  setRegion,
  setUserRegionDetected
} from '../../country';
import { of } from 'rxjs';

describe('getAllBasicSeasonsStart$', () => {
  test.each([
    initSettings({} as ISettingsState),
    setRegion('regionId'),
    setUserRegionDetected('regionId'),
    setLanguageSuccess()
  ])('returns setAllSeasonsStart', async (action) => {
    const result = await getAllBasicSeasonsStart$(
      of(action) as any,
      of(null) as any,
      {}
    ).toPromise();
    expect(result).toEqual(setAllSeasonsStart());
  });
});
