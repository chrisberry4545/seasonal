import * as sharedFrontendRedux from '@chrisb-dev/seasonal-shared-frontend-redux';
import { ISettingsState, setDietType, setRegion, setUserRegionDetected } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { DIET_TYPE } from '@chrisb-dev/seasonal-shared-models';
import { of } from 'rxjs';
import * as storedData from '../../../helpers/functions/stored-data';
import { storeSettings$ } from './store-settings.epic';

describe.each([
  setDietType(DIET_TYPE.VEGETARIAN),
  setRegion('regionId'),
  setUserRegionDetected('regionId')
])('storeSettings$', (action) => {
  let mockSetStoredData: jest.SpyInstance;
  const settings = {} as ISettingsState;

  beforeEach(async () => {
    jest.spyOn(sharedFrontendRedux, 'selectSettingsState')
      .mockReturnValue(settings);
    mockSetStoredData = jest.spyOn(storedData, 'setStoredData');
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
