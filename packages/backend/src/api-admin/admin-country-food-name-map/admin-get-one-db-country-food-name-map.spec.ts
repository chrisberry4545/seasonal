import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared-models';
import * as adminGetDbCountryFoodNameMaps from './admin-get-db-country-food-name-maps';
import { adminGetOneDbCountryFoodNameMap } from './admin-get-one-db-country-food-name-map';

describe('adminGetOneDbCountryFoodNameMap', () => {
  let mockAdminGetDbCountyFoodNameMaps: jest.SpyInstance;
  const mockCountryFoodNameMaps = [{}] as ICountryFoodNameMap[];
  const countryFoodNameMapId = 'countryFoodNameMapId';
  let result: ICountryFoodNameMap | undefined;

  beforeEach(async () => {
    mockAdminGetDbCountyFoodNameMaps = jest.spyOn(
      adminGetDbCountryFoodNameMaps, 'adminGetDbCountryFoodNameMaps'
    ).mockResolvedValue(mockCountryFoodNameMaps);
    mockAdminGetDbCountyFoodNameMaps.mockClear();
    result = await adminGetOneDbCountryFoodNameMap(countryFoodNameMapId);
  });

  test('calls adminGetDbCountyFoodNameMaps', () =>
    expect(mockAdminGetDbCountyFoodNameMaps).toHaveBeenCalledWith(countryFoodNameMapId));

  test('returns the expected result', () => expect(result).toBe(mockCountryFoodNameMaps[0]));

});
