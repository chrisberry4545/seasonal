import { ITranslationsBadgeName } from '@chrisb-dev/seasonal-shared-models';
import * as adminGetDbTranslationsBadgeNames from './admin-get-db-translations-badge-names';
import { adminGetAllDbTranslationsBadgeNames } from './admin-get-all-db-translations-badge-name';

describe('adminGetAllDbTranslationsBadgeNames', () => {
  let mockAdminGetDbTranslationsBadgeNames: jest.SpyInstance;
  const mockTranslationsBadgeNames = [{}] as ITranslationsBadgeName[];
  let result: ITranslationsBadgeName[];

  beforeEach(async () => {
    mockAdminGetDbTranslationsBadgeNames = jest.spyOn(
      adminGetDbTranslationsBadgeNames, 'adminGetDbTranslationsBadgeNames'
    ).mockResolvedValue(mockTranslationsBadgeNames);
    mockAdminGetDbTranslationsBadgeNames.mockClear();
    result = await adminGetAllDbTranslationsBadgeNames();
  });

  test('calls adminGetDbTranslationsBadgeNames', () =>
    expect(mockAdminGetDbTranslationsBadgeNames).toHaveBeenCalledWith(null));

  test('returns the expected result', () => expect(result).toBe(mockTranslationsBadgeNames));

});
