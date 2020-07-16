import { ITranslationsSeasonName } from '@chrisb-dev/seasonal-shared-models';
import * as adminGetDbTranslationsSeasonNames from './admin-get-db-translations-season-names';
import { adminGetAllDbTranslationsSeasonNames } from './admin-get-all-db-translations-season-name';

describe('adminGetAllDbTranslationsSeasonNames', () => {
  let mockAdminGetDbTranslationsSeasonNames: jest.SpyInstance;
  const mockTranslationsSeasonNames = [{}] as ITranslationsSeasonName[];
  let result: ITranslationsSeasonName[];

  beforeEach(async () => {
    mockAdminGetDbTranslationsSeasonNames = jest.spyOn(
      adminGetDbTranslationsSeasonNames, 'adminGetDbTranslationsSeasonNames'
    ).mockResolvedValue(mockTranslationsSeasonNames);
    mockAdminGetDbTranslationsSeasonNames.mockClear();
    result = await adminGetAllDbTranslationsSeasonNames();
  });

  test('calls adminGetDbTranslationsSeasonNames', () =>
    expect(mockAdminGetDbTranslationsSeasonNames).toHaveBeenCalledWith(null));

  test('returns the expected result', () => expect(result).toBe(mockTranslationsSeasonNames));

});
