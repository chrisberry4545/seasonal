import { ICountry } from '@chrisb-dev/seasonal-shared-models';
import * as adminGetDbCountries from './admin-get-db-countries';
import { adminGetOneDbCountry } from './admin-get-one-db-country';

describe('adminGetOneDbCountry', () => {
  let mockAdminGetDbCountries: jest.SpyInstance;
  const mockCountries = [{}] as ICountry[];
  const countryId = 'countryId';
  let result: ICountry;

  beforeEach(async () => {
    mockAdminGetDbCountries = jest.spyOn(adminGetDbCountries, 'adminGetDbCountries')
      .mockResolvedValue(mockCountries);
    mockAdminGetDbCountries.mockClear();
    result = await adminGetOneDbCountry(countryId);
  });

  test('calls adminGetDbCountries', () =>
    expect(mockAdminGetDbCountries).toHaveBeenCalledWith(countryId));

  test('returns the expected result', () => expect(result).toBe(mockCountries[0]));

});
