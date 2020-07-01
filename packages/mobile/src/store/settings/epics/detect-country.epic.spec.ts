import * as sharedFrontendRedux from '@chrisb-dev/seasonal-shared-frontend-redux';
import { getCountriesSuccess, userRegionDetected } from '@chrisb-dev/seasonal-shared-frontend-redux';
import * as sharedFrontentUtilities from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { IRegion, ICountry } from '@chrisb-dev/seasonal-shared-models';
import { LocationData } from 'expo-location';
import { Action } from 'redux';
import { of, throwError } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import * as helpers from '../../../helpers';
import { detectCountry$ } from './detect-country.epic';

const testScheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});

describe('detectCountry$', () => {
  const nearestRegionFromLatLng = {
    id: '1',
    latLng: {}
  } as IRegion;
  let result: Action | undefined;
  const allRegions = [{
    id: 'r1',
    latLng: {}
  }, {
    id: 'r2',
    latLng: {}
  }] as IRegion[];
  const allCountries = [{
    regions: [allRegions[0]]
  }] as ICountry[];
  let mockGetNearestRegionFromLatLng: jest.SpyInstance;
  let mockGetCountryThatCoordsExistWithin: jest.SpyInstance;

  beforeEach(() => {
    result = undefined;
    jest.spyOn(sharedFrontendRedux, 'selectAllRegions')
      .mockReturnValue(allRegions);
    jest.spyOn(sharedFrontendRedux, 'selectCountries')
      .mockReturnValue(allCountries);
    jest.spyOn(sharedFrontendRedux, 'selectSettingsRegionId')
      .mockReturnValue(undefined);
    jest.spyOn(sharedFrontentUtilities, 'getNearestRegionFromLatLng')
      .mockReturnValue(nearestRegionFromLatLng);
    mockGetNearestRegionFromLatLng =
      jest.spyOn(sharedFrontentUtilities, 'getNearestRegionFromLatLng')
      .mockReturnValue(nearestRegionFromLatLng);
    mockGetNearestRegionFromLatLng.mockClear();
    mockGetCountryThatCoordsExistWithin =
      jest.spyOn(sharedFrontentUtilities, 'getCountryThatCoordsExistWithin')
      .mockReturnValue(allCountries[0]);
    mockGetCountryThatCoordsExistWithin.mockClear();
  });

  describe('when the user already has a region Id', () => {
    beforeEach(async () => {
      jest.spyOn(sharedFrontendRedux, 'selectSettingsRegionId')
        .mockReturnValue('regionId');
      result = await detectCountry$(
        of(getCountriesSuccess([])) as any,
        of(null) as any,
        {}
      ).toPromise();
    });

    test('returns nothing', () => expect(result).toBeUndefined());

  });

  describe('when no regions are loaded', () => {
    beforeEach(async () => {
      jest.spyOn(sharedFrontendRedux, 'selectAllRegions')
        .mockReturnValue(undefined);
      result = await detectCountry$(
        of(getCountriesSuccess([])) as any,
        of(null) as any,
        {}
      ).toPromise();
    });

    test('returns nothing', () => expect(result).toBeUndefined());
  });

  describe('when the user does not give permission to access the device location', () => {
    const errorMessage = 'location permission denied';

    beforeEach(async () => {
      jest.spyOn(helpers, 'getCurrentDeviceLocation$')
        .mockReturnValue(throwError(errorMessage));
      result = await detectCountry$(
        of(getCountriesSuccess([])) as any,
        of(null) as any,
        {}
      ).toPromise();
    });

    test('returns the first region and the error', () => {

      testScheduler.run(({ cold, expectObservable }) => {
        const input = cold('a', {
          a: getCountriesSuccess([])
        });
        const expected = '100ms r';

        expectObservable(
          detectCountry$(
            input as any,
            of(null) as any,
            {}
          )
        ).toBe(expected, {
          r: userRegionDetected(
            nearestRegionFromLatLng.id, errorMessage
          )
        });
      });

    });
  });

  describe('when the user gives permission to access the device location', () => {

    beforeEach(async () => {
      jest.spyOn(helpers, 'getCurrentDeviceLocation$')
        .mockReturnValue(of({
          coords: {}
        } as LocationData));
      result = await detectCountry$(
        of(getCountriesSuccess([])) as any,
        of(null) as any,
        {}
      ).toPromise();
    });

    test('calls getCountryThatCoordsExistWithin', () =>
      expect(mockGetCountryThatCoordsExistWithin).toHaveBeenCalledWith(
        allCountries, { lat: undefined, lng: undefined }
      ));

    test('calls getNearestRegionFromLatLng with the regions for the country', () =>
      expect(mockGetNearestRegionFromLatLng).toHaveBeenCalledWith(
        allCountries[0].regions, { lat: undefined, lng: undefined }
      ));

    test('returns the closest region', () => {

      testScheduler.run(({ cold, expectObservable }) => {
        const input = cold('a', {
          a: getCountriesSuccess([])
        });
        const expected = '200ms r';

        expectObservable(
          detectCountry$(
            input as any,
            of(null) as any,
            {}
          )
        ).toBe(expected, {
          r: userRegionDetected(
            nearestRegionFromLatLng.id, null
          )
        });
      });

    });
  });

});
