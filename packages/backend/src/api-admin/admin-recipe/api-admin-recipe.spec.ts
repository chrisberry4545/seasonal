
import * as generateRestApi from '../../api-utils/generate-rest-api';
import { adminCreateDbRecipe } from './admin-create-db-recipe';
import { adminDeleteDbRecipe } from './admin-delete-db-recipe';
import { adminEditDbRecipe } from './admin-edit-db-recipe';
import { adminGetAllDbRecipes } from './admin-get-all-db-recipes';
import { adminGetOneDbRecipe } from './admin-get-one-db-recipe';
import { apiAdminRecipe } from './api-admin-recipe';
import { Router } from 'express';

describe('apiAdminRecipe', () => {
  let mockGenerateRestApi: jest.SpyInstance;
  const mockResult = {} as Router;
  let result: Router;

  beforeEach(() => {
    mockGenerateRestApi = jest.spyOn(generateRestApi, 'generateRestApi')
      .mockReturnValue(mockResult);
    result = apiAdminRecipe();
  });

  test('generates the rest api', () =>
    expect(mockGenerateRestApi).toHaveBeenCalledWith({
      create: adminCreateDbRecipe,
      deleteOne: adminDeleteDbRecipe,
      edit: adminEditDbRecipe,
      getAll: adminGetAllDbRecipes,
      getOne: adminGetOneDbRecipe
    }));

  test('returns the result of generating the api', () => expect(result).toBe(mockResult));

});
