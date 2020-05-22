import { IRegionFoodSeasonMap } from '@chrisb-dev/seasonal-shared-models';
import * as adminGetDbRegionFoodSeasonMaps from './admin-get-db-region-food-season-maps';
import { adminGetAllDbRegionFoodSeasonMaps } from './admin-get-all-db-region-food-season-maps';

describe('adminGetAllDbRegionFoodSeasonMaps', () => {
  let mockAdminGetDbRegionFoodSeasonMaps: jest.SpyInstance;
  const mockRegionFoodSeasonMaps = [{}] as IRegionFoodSeasonMap[];
  let result: IRegionFoodSeasonMap[];

  beforeEach(async () => {
    mockAdminGetDbRegionFoodSeasonMaps = jest.spyOn(
      adminGetDbRegionFoodSeasonMaps,
      'adminGetDbRegionFoodSeasonMaps'
    ).mockResolvedValue(mockRegionFoodSeasonMaps);
    mockAdminGetDbRegionFoodSeasonMaps.mockClear();
    result = await adminGetAllDbRegionFoodSeasonMaps();
  });

  test('calls adminGetDbRegionFoodSeasonMaps', () =>
    expect(mockAdminGetDbRegionFoodSeasonMaps).toHaveBeenCalledWith(null));

  test('returns the expected result', () => expect(result).toBe(mockRegionFoodSeasonMaps));

});
