
import * as generateRestApi from '../../api-utils/generate-rest-api';
import { adminCreateDbCountryRecipeNameMap } from './admin-create-db-country-recipe-name-map';
import { adminDeleteDbCountryRecipeNameMap } from './admin-delete-db-country-recipe-name-map';
import { adminEditDbCountryRecipeNameMap } from './admin-edit-db-country-recipe-name-map';
import { adminGetAllDbCountryRecipeNameMaps } from './admin-get-all-db-country-recipe-name-map';
import { adminGetOneDbCountryRecipeNameMap } from './admin-get-one-db-country-recipe-name-map';
import { apiAdminCountryRecipeNameMap } from './api-admin-country-recipe-name-map';
import { Router } from 'express';

describe('apiAdminCountryRecipeNameMap', () => {
  let mockGenerateRestApi: jest.SpyInstance;
  const mockResult = {} as Router;
  let result: Router;

  beforeEach(() => {
    mockGenerateRestApi = jest.spyOn(generateRestApi, 'generateRestApi')
      .mockReturnValue(mockResult);
    result = apiAdminCountryRecipeNameMap();
  });

  test('generates the rest api', () =>
    expect(mockGenerateRestApi).toHaveBeenCalledWith({
      create: adminCreateDbCountryRecipeNameMap,
      deleteOne: adminDeleteDbCountryRecipeNameMap,
      edit: adminEditDbCountryRecipeNameMap,
      getAll: adminGetAllDbCountryRecipeNameMaps,
      getOne: adminGetOneDbCountryRecipeNameMap
    }));

  test('returns the result of generating the api', () => expect(result).toBe(mockResult));

});
