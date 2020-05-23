import { IBadge } from '@chrisb-dev/seasonal-shared-models';
import * as adminGetDbBadges from './admin-get-db-badges';
import { adminGetAllDbBadges } from './admin-get-all-db-badges';

describe('adminGetAllDbBadges', () => {
  let mockAdminGetDbBadges: jest.SpyInstance;
  const mockBadges = [{}] as IBadge[];
  let result: IBadge[];

  beforeEach(async () => {
    mockAdminGetDbBadges = jest.spyOn(adminGetDbBadges, 'adminGetDbBadges')
      .mockResolvedValue(mockBadges);
    mockAdminGetDbBadges.mockClear();
    result = await adminGetAllDbBadges();
  });

  test('calls adminGetDbBadges', () =>
    expect(mockAdminGetDbBadges).toHaveBeenCalledWith(null));

  test('returns the expected result', () => expect(result).toBe(mockBadges));

});
