import * as sharedFrontendRedux from '@chrisb-dev/seasonal-shared-frontend-redux';
import { initSettings, ISettingsState } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { of } from 'rxjs';
import * as helpers from '../../../helpers';
import { initTrackingUser$ } from './init-tracking-user.epic';

describe('initTrackingUser$', () => {
  let mockSetTrackingUser: jest.SpyInstance;

  beforeEach(() => {
    mockSetTrackingUser = jest.spyOn(helpers, 'setTrackingUser');
    mockSetTrackingUser.mockClear();
  });

  describe('when the current userId is undefined', () => {
    beforeEach(async () => {
      jest.spyOn(sharedFrontendRedux, 'selectSettingsUserId')
        .mockReturnValue(undefined);
      await initTrackingUser$(
        of(initSettings({} as ISettingsState)) as any,
        of(null) as any,
        {}
      ).toPromise();
    });

    test('does not call setTrackingUser', () =>
      expect(mockSetTrackingUser).not.toHaveBeenCalled());
  });

  describe('when the current userId is defined', () => {
    const userId = 'userId';

    beforeEach(async () => {
      jest.spyOn(sharedFrontendRedux, 'selectSettingsUserId')
        .mockReturnValue(userId);
      await initTrackingUser$(
        of(initSettings({} as ISettingsState)) as any,
        of(null) as any,
        {}
      ).toPromise();
    });

    test('calls setTrackingUser', () =>
      expect(mockSetTrackingUser).toHaveBeenCalledWith(userId));
  });

});
