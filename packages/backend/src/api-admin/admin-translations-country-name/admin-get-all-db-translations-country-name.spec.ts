import { ITranslationsCountryName } from '@chrisb-dev/seasonal-shared-models';
import * as adminGetDbTranslationsCountryNames from './admin-get-db-translations-country-names';
import { adminGetAllDbTranslationsCountryNames } from './admin-get-all-db-translations-country-name';

describe('adminGetAllDbTranslationsCountryNames', () => {
  let mockAdminGetDbTranslationsCountryNames: jest.SpyInstance;
  const mockTranslationsCountryNames = [{}] as ITranslationsCountryName[];
  let result: ITranslationsCountryName[];

  beforeEach(async () => {
    mockAdminGetDbTranslationsCountryNames = jest.spyOn(
      adminGetDbTranslationsCountryNames, 'adminGetDbTranslationsCountryNames'
    ).mockResolvedValue(mockTranslationsCountryNames);
    mockAdminGetDbTranslationsCountryNames.mockClear();
    result = await adminGetAllDbTranslationsCountryNames();
  });

  test('calls adminGetDbTranslationsCountryNames', () =>
    expect(mockAdminGetDbTranslationsCountryNames).toHaveBeenCalledWith(null));

  test('returns the expected result', () => expect(result).toBe(mockTranslationsCountryNames));

});
