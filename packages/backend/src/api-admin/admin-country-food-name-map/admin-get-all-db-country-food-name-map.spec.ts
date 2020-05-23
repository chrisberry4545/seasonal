import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared-models';
import * as adminGetDbCountryFoodNameMaps from './admin-get-db-country-food-name-maps';
import { adminGetAllDbCountryFoodNameMaps } from './admin-get-all-db-country-food-name-map';

describe('adminGetAllDbCountryFoodNameMaps', () => {
  let mockAdminGetDbCountryFoodNameMaps: jest.SpyInstance;
  const mockCountryFoodNameMaps = [{}] as ICountryFoodNameMap[];
  let result: ICountryFoodNameMap[];

  beforeEach(async () => {
    mockAdminGetDbCountryFoodNameMaps = jest.spyOn(
      adminGetDbCountryFoodNameMaps, 'adminGetDbCountryFoodNameMaps'
    ).mockResolvedValue(mockCountryFoodNameMaps);
    mockAdminGetDbCountryFoodNameMaps.mockClear();
    result = await adminGetAllDbCountryFoodNameMaps();
  });

  test('calls adminGetDbCountryFoodNameMaps', () =>
    expect(mockAdminGetDbCountryFoodNameMaps).toHaveBeenCalledWith(null));

  test('returns the expected result', () => expect(result).toBe(mockCountryFoodNameMaps));

});
