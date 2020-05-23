import * as generateRestApi from '../../api-utils/generate-rest-api';
import { adminCreateDbCountry } from './admin-create-db-country';
import { adminDeleteDbCountry } from './admin-delete-db-country';
import { adminEditDbCountry } from './admin-edit-db-country';
import { adminGetAllDbCountries } from './admin-get-all-db-countries';
import { adminGetOneDbCountry } from './admin-get-one-db-country';
import { apiAdminCountry } from './api-admin-country';
import { Router } from 'express';

describe('apiAdminCountry', () => {
  let mockGenerateRestApi: jest.SpyInstance;
  const mockResult = {} as Router;
  let result: Router;

  beforeEach(() => {
    mockGenerateRestApi = jest.spyOn(generateRestApi, 'generateRestApi')
      .mockReturnValue(mockResult);
    result = apiAdminCountry();
  });

  test('generates the rest api', () =>
    expect(mockGenerateRestApi).toHaveBeenCalledWith({
      create: adminCreateDbCountry,
      deleteOne: adminDeleteDbCountry,
      edit: adminEditDbCountry,
      getAll: adminGetAllDbCountries,
      getOne: adminGetOneDbCountry
    }));

  test('returns the result of generating the api', () => expect(result).toBe(mockResult));

});
