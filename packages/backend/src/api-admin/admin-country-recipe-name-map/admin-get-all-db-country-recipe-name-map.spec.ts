import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared-models';
import * as adminGetDbCountryRecipeNameMaps from './admin-get-db-country-recipe-name-maps';
import { adminGetAllDbCountryRecipeNameMaps } from './admin-get-all-db-country-recipe-name-map';

describe('adminGetAllDbCountryRecipeNameMaps', () => {
  let mockAdminGetDbCountryRecipeNameMaps: jest.SpyInstance;
  const mockCountryRecipeNameMaps = [{}] as ICountryRecipeNameMap[];
  let result: ICountryRecipeNameMap[];

  beforeEach(async () => {
    mockAdminGetDbCountryRecipeNameMaps = jest.spyOn(
      adminGetDbCountryRecipeNameMaps, 'adminGetDbCountryRecipeNameMaps'
    ).mockResolvedValue(mockCountryRecipeNameMaps);
    mockAdminGetDbCountryRecipeNameMaps.mockClear();
    result = await adminGetAllDbCountryRecipeNameMaps();
  });

  test('calls adminGetDbCountryRecipeNameMaps', () =>
    expect(mockAdminGetDbCountryRecipeNameMaps).toHaveBeenCalledWith(null));

  test('returns the expected result', () => expect(result).toBe(mockCountryRecipeNameMaps));

});
