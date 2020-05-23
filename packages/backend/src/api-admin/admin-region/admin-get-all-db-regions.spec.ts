import { IDbRegion } from '@chrisb-dev/seasonal-shared-models';
import * as adminGetDbRegions from './admin-get-db-regions';
import { adminGetAllDbRegions } from './admin-get-all-db-regions';

describe('adminGetAllDbRegions', () => {
  let mockAdminGetDbRegions: jest.SpyInstance;
  const mockRegions = [{}] as IDbRegion[];
  let result: IDbRegion[];

  beforeEach(async () => {
    mockAdminGetDbRegions = jest.spyOn(adminGetDbRegions, 'adminGetDbRegions')
      .mockResolvedValue(mockRegions);
    mockAdminGetDbRegions.mockClear();
    result = await adminGetAllDbRegions();
  });

  test('calls adminGetDbRegions', () =>
    expect(mockAdminGetDbRegions).toHaveBeenCalledWith(null));

  test('returns the expected result', () => expect(result).toBe(mockRegions));

});
