
import * as generateRestApi from '../../api-utils/generate-rest-api';
import { adminCreateDbCountryFoodNameMap } from './admin-create-db-country-food-name-map';
import { adminDeleteDbCountryFoodNameMap } from './admin-delete-db-country-food-name-map';
import { adminEditDbCountryFoodNameMap } from './admin-edit-db-country-food-name-map';
import { adminGetAllDbCountryFoodNameMaps } from './admin-get-all-db-country-food-name-map';
import { adminGetOneDbCountryFoodNameMap } from './admin-get-one-db-country-food-name-map';
import { apiAdminCountryFoodNameMap } from './api-admin-country-food-name-map';
import { Router } from 'express';

describe('apiAdminCountryFoodNameMap', () => {
  let mockGenerateRestApi: jest.SpyInstance;
  const mockResult = {} as Router;
  let result: Router;

  beforeEach(() => {
    mockGenerateRestApi = jest.spyOn(generateRestApi, 'generateRestApi')
      .mockReturnValue(mockResult);
    result = apiAdminCountryFoodNameMap();
  });

  test('generates the rest api', () =>
    expect(mockGenerateRestApi).toHaveBeenCalledWith({
      create: adminCreateDbCountryFoodNameMap,
      deleteOne: adminDeleteDbCountryFoodNameMap,
      edit: adminEditDbCountryFoodNameMap,
      getAll: adminGetAllDbCountryFoodNameMaps,
      getOne: adminGetOneDbCountryFoodNameMap
    }));

  test('returns the result of generating the api', () => expect(result).toBe(mockResult));

});
