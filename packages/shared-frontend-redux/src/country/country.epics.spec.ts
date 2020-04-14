import {
  getCountriesStart$,
  getCountries$,
  promptCountryChangeOnNewDetected$,
  hideRegionChangePrompt$
} from './country.epics';
import {
  getCountriesStart,
  userRegionDetected
} from './country.actions';
import {
  setError
} from '../error';
import {
  initApp,
  hideRegionChangePrompt
} from '../ui';
import { of } from 'rxjs';
import { getCountriesSuccess, setUserRegionDetected } from './country.actions';
import * as sharedFrontendUtilities from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { ICountry } from '@chrisb-dev/seasonal-shared-models';
import { TestScheduler } from 'rxjs/testing';
import * as settings from '../settings';

const testScheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});

describe('getCountriesStart$', () => {
  test('returns getCountriesStart', async () => {
    const result = await getCountriesStart$(
      of(initApp()) as any,
      of(null) as any,
      {}
    ).toPromise();
    expect(result).toEqual(getCountriesStart());
  });
});

describe('getCountries$', () => {
  describe('when the countries are succesfully retrieved', () => {
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

describe('promptCountryChangeOnNewDetected$', () => {

  beforeEach(() =>
    jest.spyOn(settings, 'selectSettingsRegionId')
      .mockReturnValue('regionId')
  );

  test('when the detected region is different from the users region returns'
    + ' setUserRegionDetected with the detected region', async () => {
    const result = await promptCountryChangeOnNewDetected$(
      of(userRegionDetected('newRegion', null)) as any,
      of(null) as any,
      {}
    ).toPromise();
    expect(result).toEqual(setUserRegionDetected(
      'newRegion'
    ));
  });

  test('when the detected region is the same as the users region returns nothing',
    async () => {
      const result = await promptCountryChangeOnNewDetected$(
        of(userRegionDetected('regionId', null)) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toBeUndefined();
    });
});

describe('hideRegionChangePrompt$', () => {

  test('returns hideRegionChangePrompt after a delay', () => {

    testScheduler.run(({ cold, expectObservable }) => {
      const input = cold('a', {
        a: setUserRegionDetected('regionId')
      });
      const expected = '5000ms r';

      expectObservable(
        hideRegionChangePrompt$(
          input as any,
          of(null) as any,
          {}
        )
      ).toBe(expected, {
        r: hideRegionChangePrompt()
      });
    });
  });

});
