import {
  storeSettings$, getStoredSettings$, detectCountry$
} from './settings.epics';
import {
  setDietType,
  setRegion,
  setUserRegionDetected,
  initSettings,
  ISettingsState,
  IInitSettings,
  initApp,
  getCountriesSuccess,
  userRegionDetected
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { DIET_TYPE, IRegion } from '@chrisb-dev/seasonal-shared-models';
import * as sharedFrontendRedux from '@chrisb-dev/seasonal-shared-frontend-redux';
import * as sharedFrontentUtilities from '@chrisb-dev/seasonal-shared-frontend-utilities';
import * as helpers from '../../helpers';
import { of, throwError } from 'rxjs';
import { Action } from 'redux';
import { TestScheduler } from 'rxjs/testing';
import { LocationData } from 'expo-location';

const testScheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});

describe.each([
  setDietType(DIET_TYPE.VEGETARIAN),
  setRegion('regionId'),
  setUserRegionDetected('regionId'),
  initSettings({} as ISettingsState)
])('storeSettings$', (action) => {
  let mockSetStoredData: jest.SpyInstance;
  const settings = {} as ISettingsState;

  beforeEach(async () => {
    jest.spyOn(sharedFrontendRedux, 'selectSettingsState')
      .mockReturnValue(settings);
    mockSetStoredData = jest.spyOn(helpers, 'setStoredData');
    mockSetStoredData.mockClear();
    await storeSettings$(
      of(action) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('calls setStoredData', () =>
    expect(mockSetStoredData).toHaveBeenCalledWith(
      'seasonalSettings',
      settings
    ));

});

describe('getStoredSettings$', () => {
  let result: IInitSettings;

  describe('when the stored settings are null', () => {

    beforeEach(async () => {
      jest.spyOn(helpers, 'getStoredData')
        .mockResolvedValue(null);
      result = await getStoredSettings$(
        of(initApp()) as any,
        of(null) as any,
        {}
      ).toPromise() as any;
    });

    test('returns initSettings with the defaults', () =>
      expect(result).toEqual(initSettings({
        dietType: DIET_TYPE.ALL,
        isListViewShown: false,
        selectedRegionId: undefined,
        timesAppStarted: 1
      })));
  });

  describe('when the stored settings have a value and a timesAppStarted', () => {
    const settings = {
      dietType: DIET_TYPE.VEGETARIAN,
      timesAppStarted: 1
    } as ISettingsState;

    beforeEach(async () => {
      jest.spyOn(helpers, 'getStoredData')
        .mockResolvedValue(settings);
      result = await getStoredSettings$(
        of(initApp()) as any,
        of(null) as any,
        {}
      ).toPromise() as any;
    });

    test('returns the existing settings with timesAppStarted increased by 1', () =>
      expect(result).toEqual(initSettings({
        ...settings,
        timesAppStarted: 2
      } as ISettingsState)));
  });

  describe('when the stored settings have a value but no timesAppStarted value', () => {
    const settings = {
      dietType: DIET_TYPE.VEGETARIAN
    } as ISettingsState;

    beforeEach(async () => {
      jest.spyOn(helpers, 'getStoredData')
        .mockResolvedValue(settings);
      result = await getStoredSettings$(
        of(initApp()) as any,
        of(null) as any,
        {}
      ).toPromise() as any;
    });

    test('returns the existing settings with timesAppStarted set to 1', () =>
      expect(result).toEqual(initSettings({
        ...settings,
        timesAppStarted: 1
      } as ISettingsState)));
  });

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

  beforeEach(() => {
    result = undefined;
    jest.spyOn(sharedFrontendRedux, 'selectAllRegions')
      .mockReturnValue(allRegions);
    jest.spyOn(sharedFrontendRedux, 'selectSettingsRegionId')
      .mockReturnValue(undefined);
    jest.spyOn(sharedFrontentUtilities, 'getNearestRegionFromLatLng')
      .mockReturnValue(nearestRegionFromLatLng);
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
