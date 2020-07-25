import * as sharedFrontendUtilities from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { ICountry, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { of } from 'rxjs';
import { setError } from '../../error';
import { getCountriesStart, getCountriesSuccess } from '../country.actions';
import { getCountries$ } from './get-countries.epic';
import * as settings from '../../settings';

describe('getCountries$', () => {
  beforeEach(() => {
    jest.spyOn(settings, 'selectSettingsLanguage')
      .mockReturnValue(LANGUAGES.EN_US);
  });

  describe('when the countries are successfully retrieved', () => {
    const countries = [{}] as ICountry[];
    beforeEach(() => {
      jest.spyOn(sharedFrontendUtilities, 'getCountries')
        .mockResolvedValue(countries);
    });

    test('returns getCountriesSuccess', async () => {
      const result = await getCountries$(
        of(getCountriesStart()) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toEqual(getCountriesSuccess(countries));
    });
  });

  describe('when the countries request errors', () => {
    const error = new Error('test-error');
    beforeEach(() => {
      jest.spyOn(sharedFrontendUtilities, 'getCountries')
        .mockRejectedValue(error);
    });

    test('returns setError', async () => {
      const result = await getCountries$(
        of(getCountriesStart()) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toEqual(setError(error));
    });
  });
});
