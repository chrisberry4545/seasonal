import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared-models';
import * as adminGetDbCountryRecipeNameMaps from './admin-get-db-country-recipe-name-maps';
import { adminGetOneDbCountryRecipeNameMap } from './admin-get-one-db-country-recipe-name-map';

describe('adminGetOneDbCountryRecipeNameMap', () => {
  let mockAdminGetDbCountyFoodNameMaps: jest.SpyInstance;
  const mockCountryRecipeNameMaps = [{}] as ICountryRecipeNameMap[];
  const countryRecipeNameMapId = 'countryRecipeNameMapId';
  let result: ICountryRecipeNameMap;

  beforeEach(async () => {
    mockAdminGetDbCountyFoodNameMaps = jest.spyOn(
      adminGetDbCountryRecipeNameMaps, 'adminGetDbCountryRecipeNameMaps'
    ).mockResolvedValue(mockCountryRecipeNameMaps);
    mockAdminGetDbCountyFoodNameMaps.mockClear();
    result = await adminGetOneDbCountryRecipeNameMap(countryRecipeNameMapId);
  });

  test('calls adminGetDbCountyFoodNameMaps', () =>
    expect(mockAdminGetDbCountyFoodNameMaps).toHaveBeenCalledWith(countryRecipeNameMapId));

  test('returns the expected result', () => expect(result).toBe(mockCountryRecipeNameMaps[0]));

});
