import { ITranslationsRegionName } from '@chrisb-dev/seasonal-shared-models';
import * as adminGetDbTranslationsRegionNames from './admin-get-db-translations-region-names';
import { adminGetOneDbTranslationsRegionName } from './admin-get-one-db-translations-region-name';

describe('adminGetOneDbTranslationsRegionName', () => {
  let mockAdminGetDbCountyFoodNameMaps: jest.SpyInstance;
  const mockTranslationsRegionNames = [{}] as ITranslationsRegionName[];
  const translationsId = 'translationsId';
  let result: ITranslationsRegionName | undefined;

  beforeEach(async () => {
    mockAdminGetDbCountyFoodNameMaps = jest.spyOn(
      adminGetDbTranslationsRegionNames, 'adminGetDbTranslationsRegionNames'
    ).mockResolvedValue(mockTranslationsRegionNames);
    mockAdminGetDbCountyFoodNameMaps.mockClear();
    result = await adminGetOneDbTranslationsRegionName(translationsId);
  });

  test('calls adminGetDbCountyFoodNameMaps', () =>
    expect(mockAdminGetDbCountyFoodNameMaps).toHaveBeenCalledWith(translationsId));

  test('returns the expected result', () => expect(result).toBe(mockTranslationsRegionNames[0]));

});
