import * as sharedFrontendUtilities from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { IHydratedBadge, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { of } from 'rxjs';
import { setError } from '../../error';
import * as settings from '../../settings';
import {
  setCurrentBadgeDetailsStart,
  setCurrentBadgeDetailsSuccess,
  setCurrentBadgeDetailsOnChange
} from '../current-badge-details.actions';
import { getCurrentBadgeDetails$ } from './get-current-badge-details.epic';

describe.each([
  setCurrentBadgeDetailsStart('badgeId'),
  setCurrentBadgeDetailsOnChange('badgeId')
])('getCurrentBadgeDetails$', (action) => {

  beforeEach(() => {
    jest.spyOn(settings, 'selectSettingsRegionId')
      .mockReturnValue('regionId');
    jest.spyOn(settings, 'selectSettingsLanguage')
      .mockReturnValue(LANGUAGES.EN_US);
  });

  describe('when getBadgeDetailsData is successful', () => {
    const badgeDetails = {} as IHydratedBadge;
    beforeEach(() =>
      jest.spyOn(sharedFrontendUtilities, 'getBadgeDetailsData')
        .mockResolvedValue(badgeDetails)
    );

    test('returns setCurrentBadgeDetailsSuccess', async () => {
      const result = await getCurrentBadgeDetails$(
        of(action) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toEqual(setCurrentBadgeDetailsSuccess(badgeDetails));
    });
  });

  describe('when getBadgeDetailsData errors', () => {
    const error = new Error('test-error');
    beforeEach(() =>
      jest.spyOn(sharedFrontendUtilities, 'getBadgeDetailsData')
        .mockRejectedValue(error)
    );

    test('returns setCurrentBadgeDetailsSuccess', async () => {
      const result = await getCurrentBadgeDetails$(
        of(action) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toEqual(setError(error));
    });
  });

});
