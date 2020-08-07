import * as sharedFrontendRedux from '@chrisb-dev/seasonal-shared-frontend-redux';
import {
  initSettings,
  ISettingsState,
  setDietType,
  setRegion,
  setUserRegionDetected,
  setLanguage
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { DIET_TYPE, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { of } from 'rxjs';
import * as helpers from '../../../helpers';
import { storeSettings$ } from './store-settings.epic';

describe.each([
  setDietType(DIET_TYPE.VEGETARIAN),
  setRegion('regionId'),
  setUserRegionDetected('regionId'),
  initSettings({} as ISettingsState),
  setLanguage(LANGUAGES.EN_GB)
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
