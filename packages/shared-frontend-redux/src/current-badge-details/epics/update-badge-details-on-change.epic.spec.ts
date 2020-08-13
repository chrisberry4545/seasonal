import { of } from 'rxjs';
import { setLanguageSuccess } from '../../settings';
import { setCurrentBadgeDetailsOnChange } from '../current-badge-details.actions';
import * as selectors from '../current-badge-details.selectors';
import { updateBadgeDetailsOnChange$ } from './update-badge-details-on-change.epic';

describe('updateBadgeDetailsOnChange$', () => {

  describe('when the current badgeId is not defined', () => {
    beforeEach(() =>
      jest.spyOn(selectors, 'selectCurrentBadgeDetailsId')
        .mockReturnValue(undefined)
    );

    test('does not return anything', async () => {
      const result = await updateBadgeDetailsOnChange$(
        of(setLanguageSuccess()) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toBeUndefined();
    });
  });
  describe('when the current badgeId is defined', () => {
    const badgeId = 'badgeId';
    beforeEach(() =>
      jest.spyOn(selectors, 'selectCurrentBadgeDetailsId')
        .mockReturnValue(badgeId)
    );

    test('returns setCurrentBadgeDetailsOnChange', async () => {
      const result = await updateBadgeDetailsOnChange$(
        of(setLanguageSuccess()) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toEqual(
        setCurrentBadgeDetailsOnChange(badgeId)
      );
    });
  });

});
