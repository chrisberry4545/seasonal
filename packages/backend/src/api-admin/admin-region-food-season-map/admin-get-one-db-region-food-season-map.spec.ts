import { IRegionFoodSeasonMap } from '@chrisb-dev/seasonal-shared-models';
import * as adminGetDbRegionFoodSeasonMap from './admin-get-db-region-food-season-maps';
import { adminGetOneDbRegionFoodSeasonMap } from './admin-get-one-db-region-food-season-map';

describe('adminGetDbRegionFoodSeasonMaps', () => {
  let mockAdminGetDbRegionFoodSeasonMap: jest.SpyInstance;
  const mockRegionFoodSeasonMaps = [{}] as IRegionFoodSeasonMap[];
  const id = 'id';
  let result: IRegionFoodSeasonMap;

  beforeEach(async () => {
    mockAdminGetDbRegionFoodSeasonMap = jest.spyOn(
      adminGetDbRegionFoodSeasonMap, 'adminGetDbRegionFoodSeasonMaps'
    ).mockResolvedValue(mockRegionFoodSeasonMaps);
    mockAdminGetDbRegionFoodSeasonMap.mockClear();
    result = await adminGetOneDbRegionFoodSeasonMap(id);
  });

  test('calls adminGetDbRegionFoodSeasonMap', () =>
    expect(mockAdminGetDbRegionFoodSeasonMap).toHaveBeenCalledWith(id));

  test('returns the expected result', () => expect(result).toBe(mockRegionFoodSeasonMaps[0]));

});
