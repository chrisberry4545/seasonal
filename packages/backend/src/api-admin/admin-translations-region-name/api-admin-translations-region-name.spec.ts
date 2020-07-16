
import * as generateRestApi from '../../api-utils/generate-rest-api';
import { adminCreateDbTranslationsRegionName } from './admin-create-db-translations-region-name';
import { adminDeleteDbTranslationsRegionName } from './admin-delete-db-translations-region-name';
import { adminEditDbTranslationsRegionName } from './admin-edit-db-translations-region-name';
import { adminGetAllDbTranslationsRegionNames } from './admin-get-all-db-translations-region-name';
import { adminGetOneDbTranslationsRegionName } from './admin-get-one-db-translations-region-name';
import { apiAdminTranslationsRegionName } from './api-admin-translations-region-name';
import { Router } from 'express';

describe('apiAdminTranslationsRegionName', () => {
  let mockGenerateRestApi: jest.SpyInstance;
  const mockResult = {} as Router;
  let result: Router;

  beforeEach(() => {
    mockGenerateRestApi = jest.spyOn(generateRestApi, 'generateRestApi')
      .mockReturnValue(mockResult);
    result = apiAdminTranslationsRegionName();
  });

  test('generates the rest api', () =>
    expect(mockGenerateRestApi).toHaveBeenCalledWith({
      create: adminCreateDbTranslationsRegionName,
      deleteOne: adminDeleteDbTranslationsRegionName,
      edit: adminEditDbTranslationsRegionName,
      getAll: adminGetAllDbTranslationsRegionNames,
      getOne: adminGetOneDbTranslationsRegionName
    }));

  test('returns the result of generating the api', () => expect(result).toBe(mockResult));

});
