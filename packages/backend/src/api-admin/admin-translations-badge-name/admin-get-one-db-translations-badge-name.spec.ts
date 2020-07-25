import { ITranslationsBadgeName } from '@chrisb-dev/seasonal-shared-models';
import * as adminGetDbTranslationsBadgeNames from './admin-get-db-translations-badge-names';
import { adminGetOneDbTranslationsBadgeName } from './admin-get-one-db-translations-badge-name';

describe('adminGetOneDbTranslationsBadgeName', () => {
  let mockAdminGetDbCountyFoodNameMaps: jest.SpyInstance;
  const mockTranslationsBadgeNames = [{}] as ITranslationsBadgeName[];
  const translationsId = 'translationsId';
  let result: ITranslationsBadgeName | undefined;

  beforeEach(async () => {
    mockAdminGetDbCountyFoodNameMaps = jest.spyOn(
      adminGetDbTranslationsBadgeNames, 'adminGetDbTranslationsBadgeNames'
    ).mockResolvedValue(mockTranslationsBadgeNames);
    mockAdminGetDbCountyFoodNameMaps.mockClear();
    result = await adminGetOneDbTranslationsBadgeName(translationsId);
  });

  test('calls adminGetDbCountyFoodNameMaps', () =>
    expect(mockAdminGetDbCountyFoodNameMaps).toHaveBeenCalledWith(translationsId));

  test('returns the expected result', () => expect(result).toBe(mockTranslationsBadgeNames[0]));

});
