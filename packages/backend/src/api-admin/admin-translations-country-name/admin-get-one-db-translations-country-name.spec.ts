import { ITranslationsCountryName } from '@chrisb-dev/seasonal-shared-models';
import * as adminGetDbTranslationsCountryNames from './admin-get-db-translations-country-names';
import { adminGetOneDbTranslationsCountryName } from './admin-get-one-db-translations-country-name';

describe('adminGetOneDbTranslationsCountryName', () => {
  let mockAdminGetDbCountyFoodNameMaps: jest.SpyInstance;
  const mockTranslationsCountryNames = [{}] as ITranslationsCountryName[];
  const translationsId = 'translationsId';
  let result: ITranslationsCountryName | undefined;

  beforeEach(async () => {
    mockAdminGetDbCountyFoodNameMaps = jest.spyOn(
      adminGetDbTranslationsCountryNames, 'adminGetDbTranslationsCountryNames'
    ).mockResolvedValue(mockTranslationsCountryNames);
    mockAdminGetDbCountyFoodNameMaps.mockClear();
    result = await adminGetOneDbTranslationsCountryName(translationsId);
  });

  test('calls adminGetDbCountyFoodNameMaps', () =>
    expect(mockAdminGetDbCountyFoodNameMaps).toHaveBeenCalledWith(translationsId));

  test('returns the expected result', () => expect(result).toBe(mockTranslationsCountryNames[0]));

});
