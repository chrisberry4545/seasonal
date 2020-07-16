
import * as generateRestApi from '../../api-utils/generate-rest-api';
import { adminCreateDbTranslationsSeasonName } from './admin-create-db-translations-season-name';
import { adminDeleteDbTranslationsSeasonName } from './admin-delete-db-translations-season-name';
import { adminEditDbTranslationsSeasonName } from './admin-edit-db-translations-season-name';
import { adminGetAllDbTranslationsSeasonNames } from './admin-get-all-db-translations-season-name';
import { adminGetOneDbTranslationsSeasonName } from './admin-get-one-db-translations-season-name';
import { apiAdminTranslationsSeasonName } from './api-admin-translations-season-name';
import { Router } from 'express';

describe('apiAdminTranslationsSeasonName', () => {
  let mockGenerateRestApi: jest.SpyInstance;
  const mockResult = {} as Router;
  let result: Router;

  beforeEach(() => {
    mockGenerateRestApi = jest.spyOn(generateRestApi, 'generateRestApi')
      .mockReturnValue(mockResult);
    result = apiAdminTranslationsSeasonName();
  });

  test('generates the rest api', () =>
    expect(mockGenerateRestApi).toHaveBeenCalledWith({
      create: adminCreateDbTranslationsSeasonName,
      deleteOne: adminDeleteDbTranslationsSeasonName,
      edit: adminEditDbTranslationsSeasonName,
      getAll: adminGetAllDbTranslationsSeasonNames,
      getOne: adminGetOneDbTranslationsSeasonName
    }));

  test('returns the result of generating the api', () => expect(result).toBe(mockResult));

});
