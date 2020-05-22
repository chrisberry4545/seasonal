
import * as generateRestApi from '../../api-utils/generate-rest-api';
import { adminCreateDbFood } from './admin-create-db-food';
import { adminDeleteDbFood } from './admin-delete-db-food';
import { adminEditDbFood } from './admin-edit-db-food';
import { adminGetAllDbFood } from './admin-get-all-db-food';
import { adminGetOneDbFood } from './admin-get-one-db-food';
import { apiAdminFood } from './api-admin-food';
import { Router } from 'express';

describe('apiAdminFood', () => {
  let mockGenerateRestApi: jest.SpyInstance;
  const mockResult = {} as Router;
  let result: Router;

  beforeEach(() => {
    mockGenerateRestApi = jest.spyOn(generateRestApi, 'generateRestApi')
      .mockReturnValue(mockResult);
    result = apiAdminFood();
  });

  test('generates the rest api', () =>
    expect(mockGenerateRestApi).toHaveBeenCalledWith({
      create: adminCreateDbFood,
      deleteOne: adminDeleteDbFood,
      edit: adminEditDbFood,
      getAll: adminGetAllDbFood,
      getOne: adminGetOneDbFood
    }));

  test('returns the result of generating the api', () => expect(result).toBe(mockResult));

});
