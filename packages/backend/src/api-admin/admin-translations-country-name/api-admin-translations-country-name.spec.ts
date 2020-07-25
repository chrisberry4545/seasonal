
import * as generateRestApi from '../../api-utils/generate-rest-api';
import { adminCreateDbTranslationsCountryName } from './admin-create-db-translations-country-name';
import { adminDeleteDbTranslationsCountryName } from './admin-delete-db-translations-country-name';
import { adminEditDbTranslationsCountryName } from './admin-edit-db-translations-country-name';
import { adminGetAllDbTranslationsCountryNames } from './admin-get-all-db-translations-country-name';
import { adminGetOneDbTranslationsCountryName } from './admin-get-one-db-translations-country-name';
import { apiAdminTranslationsCountryName } from './api-admin-translations-country-name';
import { Router } from 'express';

describe('apiAdminTranslationsCountryName', () => {
  let mockGenerateRestApi: jest.SpyInstance;
  const mockResult = {} as Router;
  let result: Router;

  beforeEach(() => {
    mockGenerateRestApi = jest.spyOn(generateRestApi, 'generateRestApi')
      .mockReturnValue(mockResult);
    result = apiAdminTranslationsCountryName();
  });

  test('generates the rest api', () =>
    expect(mockGenerateRestApi).toHaveBeenCalledWith({
      create: adminCreateDbTranslationsCountryName,
      deleteOne: adminDeleteDbTranslationsCountryName,
      edit: adminEditDbTranslationsCountryName,
      getAll: adminGetAllDbTranslationsCountryNames,
      getOne: adminGetOneDbTranslationsCountryName
    }));

  test('returns the result of generating the api', () => expect(result).toBe(mockResult));

});
