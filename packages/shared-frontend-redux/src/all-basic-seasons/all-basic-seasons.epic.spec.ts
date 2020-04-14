import {
  getAllBasicSeasonsStartEpic$,
  getAllBasicSeasonsEpic$
} from './all-basic-seasons.epics';
import { setAllSeasonsStart } from './all-basic-seasons.actions';
import {
  initSettings,
  ISettingsState
} from '../settings';
import {
  setRegion,
  setUserRegionDetected
} from '../country';
import {
  setError
} from '../error';
import {
  setAllBasicSeasonsSuccess
} from './all-basic-seasons.actions';
import { of } from 'rxjs';
import * as sharedFrontendUtilities from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { IBaseSeason } from '@chrisb-dev/seasonal-shared-models';
import * as settings from '../settings';

describe('getAllBasicSeasonsStartEpic$', () => {
  test.each([
    initSettings({} as ISettingsState),
    setRegion('regionId'),
    setUserRegionDetected('regionId')
  ])('returns setallSeasonsStart', async (action) => {
    const result = await getAllBasicSeasonsStartEpic$(
      of(action) as any,
      of(null) as any,
      {}
    ).toPromise();
    expect(result).toEqual(setAllSeasonsStart());
  });
});

describe('getAllBasicSeasonsEpic$', () => {

  beforeEach(() =>
    jest.spyOn(settings, 'selectSettingsRegionId')
      .mockReturnValue('regionId')
  );

  describe('when getAllSeasons succeeds', () => {
    const seasons = [{}] as IBaseSeason[];

    beforeEach(() =>
      jest.spyOn(sharedFrontendUtilities, 'getAllSeasons')
        .mockResolvedValue(seasons)
    );

    test('returns setAllBasicSeasonsSuccess', async () => {
      const result = await getAllBasicSeasonsEpic$(
        of(setAllSeasonsStart()) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toEqual(setAllBasicSeasonsSuccess(seasons));
    });
  });

  describe('when getAllSeasons fails', () => {
    const error = new Error('test-error');

    beforeEach(() =>
      jest.spyOn(sharedFrontendUtilities, 'getAllSeasons')
        .mockRejectedValue(error)
    );

    test('returns setError', async () => {
      const result = await getAllBasicSeasonsEpic$(
        of(setAllSeasonsStart()) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toEqual(setError(error));
    });
  });
});
