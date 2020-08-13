import * as sharedFrontendUtilities from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { ILanguagesResponse } from '@chrisb-dev/seasonal-shared-models';
import { of } from 'rxjs';
import { setError } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { getLanguages$ } from './get-languages.epic';
import { setLanguagesSuccess, setLanguagesStart } from '../language.actions';

describe('getLanguages$', () => {
  describe('when getAllLanguages is successful', () => {
    const languages = {} as ILanguagesResponse;

    beforeEach(() =>
      jest.spyOn(sharedFrontendUtilities, 'getAllLanguages')
        .mockResolvedValue(languages)
    );

    test('returns setCurrentSeasonWithFoodSuccess', async () => {
      const result = await getLanguages$(
        of(setLanguagesStart()) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toEqual(setLanguagesSuccess(
        languages
      ));
    });

  });

  describe('when getAllLanguages errors', () => {
    const error = new Error('test-error');

    beforeEach(() =>
      jest.spyOn(sharedFrontendUtilities, 'getAllLanguages')
        .mockRejectedValue(error)
    );

    test('returns setError', async () => {
      const result = await getLanguages$(
        of(setLanguagesStart()) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toEqual(setError(error));
    });

  });
});
