import { ITranslationsSeasonName } from '@chrisb-dev/seasonal-shared-models';
import * as adminGetDbTranslationsSeasonNames from './admin-get-db-translations-season-names';
import { adminGetOneDbTranslationsSeasonName } from './admin-get-one-db-translations-season-name';

describe('adminGetOneDbTranslationsSeasonName', () => {
  let mockAdminGetDbCountyFoodNameMaps: jest.SpyInstance;
  const mockTranslationsSeasonNames = [{}] as ITranslationsSeasonName[];
  const translationsId = 'translationsId';
  let result: ITranslationsSeasonName | undefined;

  beforeEach(async () => {
    mockAdminGetDbCountyFoodNameMaps = jest.spyOn(
      adminGetDbTranslationsSeasonNames, 'adminGetDbTranslationsSeasonNames'
    ).mockResolvedValue(mockTranslationsSeasonNames);
    mockAdminGetDbCountyFoodNameMaps.mockClear();
    result = await adminGetOneDbTranslationsSeasonName(translationsId);
  });

  test('calls adminGetDbCountyFoodNameMaps', () =>
    expect(mockAdminGetDbCountyFoodNameMaps).toHaveBeenCalledWith(translationsId));

  test('returns the expected result', () => expect(result).toBe(mockTranslationsSeasonNames[0]));

});
