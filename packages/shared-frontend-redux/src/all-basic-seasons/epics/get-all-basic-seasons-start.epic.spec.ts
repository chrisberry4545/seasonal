import {
  getAllBasicSeasonsStartEpic$
} from './get-all-basic-seasons-start.epic';
import { setAllSeasonsStart } from '../all-basic-seasons.actions';
import {
  initSettings,
  ISettingsState
} from '../../settings';
import {
  setRegion,
  setUserRegionDetected
} from '../../country';
import { of } from 'rxjs';

describe('getAllBasicSeasonsStartEpic$', () => {
  test.each([
    initSettings({} as ISettingsState),
    setRegion('regionId'),
    setUserRegionDetected('regionId')
  ])('returns setAllSeasonsStart', async (action) => {
    const result = await getAllBasicSeasonsStartEpic$(
      of(action) as any,
      of(null) as any,
      {}
    ).toPromise();
    expect(result).toEqual(setAllSeasonsStart());
  });
});
