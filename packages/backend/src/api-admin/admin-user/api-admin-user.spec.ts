
import * as generateRestApi from '../../api-utils/generate-rest-api';
import { adminCreateDbUser } from './admin-create-db-user';
import { adminDeleteDbUser } from './admin-delete-db-user';
import { adminEditDbUser } from './admin-edit-db-user';
import { adminGetAllDbUsers } from './admin-get-all-db-users';
import { adminGetOneDbUser } from './admin-get-one-db-user';
import { apiAdminUser } from './api-admin-user';
import { Router } from 'express';

describe('apiAdminUser', () => {
  let mockGenerateRestApi: jest.SpyInstance;
  const mockResult = {} as Router;
  let result: Router;

  beforeEach(() => {
    mockGenerateRestApi = jest.spyOn(generateRestApi, 'generateRestApi')
      .mockReturnValue(mockResult);
    result = apiAdminUser();
  });

  test('generates the rest api', () =>
    expect(mockGenerateRestApi).toHaveBeenCalledWith({
      create: adminCreateDbUser,
      deleteOne: adminDeleteDbUser,
      edit: adminEditDbUser,
      getAll: adminGetAllDbUsers,
      getOne: adminGetOneDbUser
    }));

  test('returns the result of generating the api', () => expect(result).toBe(mockResult));

});
