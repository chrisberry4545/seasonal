import { ICountry } from '@chrisb-dev/seasonal-shared-models';
import * as adminGetDbCountries from './admin-get-db-countries';
import { adminGetAllDbCountries } from './admin-get-all-db-countries';

describe('adminGetAllDbCountries', () => {
  let mockAdminGetDbCountries: jest.SpyInstance;
  const mockCountries = [{}] as ICountry[];
  let result: ICountry[];

  beforeEach(async () => {
    mockAdminGetDbCountries = jest.spyOn(adminGetDbCountries, 'adminGetDbCountries')
      .mockResolvedValue(mockCountries);
    mockAdminGetDbCountries.mockClear();
    result = await adminGetAllDbCountries();
  });

  test('calls adminGetDbCountries', () =>
    expect(mockAdminGetDbCountries).toHaveBeenCalledWith(null));

  test('returns the expected result', () => expect(result).toBe(mockCountries));

});
