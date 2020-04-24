import { of } from 'rxjs';
import * as settings from '../../settings';
import { setUserRegionDetected, userRegionDetected } from '../country.actions';
import { promptCountryChangeOnNewDetected$ } from './prompt-country-change-on-new-detected.epic';

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
