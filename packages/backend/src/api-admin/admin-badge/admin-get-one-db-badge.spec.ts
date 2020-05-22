import { IBadge } from '@chrisb-dev/seasonal-shared-models';
import * as adminGetDbBadges from './admin-get-db-badges';
import { adminGetOneDbBadge } from './admin-get-one-db-badge';

describe('adminGetOneDbBadge', () => {
  let mockAdminGetDbBadges: jest.SpyInstance;
  const mockBadges = [{}] as IBadge[];
  const badgeId = 'badgeId';
  let result: IBadge;

  beforeEach(async () => {
    mockAdminGetDbBadges = jest.spyOn(adminGetDbBadges, 'adminGetDbBadges')
      .mockResolvedValue(mockBadges);
    mockAdminGetDbBadges.mockClear();
    result = await adminGetOneDbBadge(badgeId);
  });

  test('calls adminGetDbBadges', () =>
    expect(mockAdminGetDbBadges).toHaveBeenCalledWith(badgeId));

  test('returns the expected result', () => expect(result).toBe(mockBadges[0]));

});
