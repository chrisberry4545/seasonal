import { ITranslationsRegionName } from '@chrisb-dev/seasonal-shared-models';
import * as adminGetDbTranslationsRegionNames from './admin-get-db-translations-region-names';
import { adminGetAllDbTranslationsRegionNames } from './admin-get-all-db-translations-region-name';

describe('adminGetAllDbTranslationsRegionNames', () => {
  let mockAdminGetDbTranslationsRegionNames: jest.SpyInstance;
  const mockTranslationsRegionNames = [{}] as ITranslationsRegionName[];
  let result: ITranslationsRegionName[];

  beforeEach(async () => {
    mockAdminGetDbTranslationsRegionNames = jest.spyOn(
      adminGetDbTranslationsRegionNames, 'adminGetDbTranslationsRegionNames'
    ).mockResolvedValue(mockTranslationsRegionNames);
    mockAdminGetDbTranslationsRegionNames.mockClear();
    result = await adminGetAllDbTranslationsRegionNames();
  });

  test('calls adminGetDbTranslationsRegionNames', () =>
    expect(mockAdminGetDbTranslationsRegionNames).toHaveBeenCalledWith(null));

  test('returns the expected result', () => expect(result).toBe(mockTranslationsRegionNames));

});
