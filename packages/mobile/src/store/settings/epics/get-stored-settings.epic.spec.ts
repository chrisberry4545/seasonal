import { IInitSettings, initApp, initSettings, ISettingsState } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { DIET_TYPE } from '@chrisb-dev/seasonal-shared-models';
import { of } from 'rxjs';
import * as helpers from '../../../helpers';
import { getStoredSettings$ } from './get-stored-settings.epic';

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
