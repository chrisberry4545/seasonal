import { IDbRegion } from '@chrisb-dev/seasonal-shared-models';
import * as adminGetDbRegions from './admin-get-db-regions';
import { adminGetOneDbRegion } from './admin-get-one-db-region';

describe('adminGetOneDbRegion', () => {
  let mockAdminGetDbRegions: jest.SpyInstance;
  const mockRegions = [{}] as IDbRegion[];
  const id = 'id';
  let result: IDbRegion;

  beforeEach(async () => {
    mockAdminGetDbRegions = jest.spyOn(adminGetDbRegions, 'adminGetDbRegions')
      .mockResolvedValue(mockRegions);
    mockAdminGetDbRegions.mockClear();
    result = await adminGetOneDbRegion(id);
  });

  test('calls adminGetDbRegions', () =>
    expect(mockAdminGetDbRegions).toHaveBeenCalledWith(id));

  test('returns the expected result', () => expect(result).toBe(mockRegions[0]));

});
