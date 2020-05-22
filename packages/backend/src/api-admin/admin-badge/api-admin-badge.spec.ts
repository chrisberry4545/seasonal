import * as generateRestApi from '../../api-utils/generate-rest-api';
import { adminCreateDbBadge } from './admin-create-db-badge';
import { adminDeleteDbBadge } from './admin-delete-db-badge';
import { adminEditDbBadge } from './admin-edit-db-badge';
import { adminGetAllDbBadges } from './admin-get-all-db-badges';
import { adminGetOneDbBadge } from './admin-get-one-db-badge';
import { apiAdminBadge } from './api-admin-badge';
import { Router } from 'express';

describe('apiAdminBadge', () => {
  let mockGenerateRestApi: jest.SpyInstance;
  const mockResult = {} as Router;
  let result: Router;

  beforeEach(() => {
    mockGenerateRestApi = jest.spyOn(generateRestApi, 'generateRestApi')
      .mockReturnValue(mockResult);
    result = apiAdminBadge();
  });

  test('generates the rest api', () =>
    expect(mockGenerateRestApi).toHaveBeenCalledWith({
      create: adminCreateDbBadge,
      deleteOne: adminDeleteDbBadge,
      edit: adminEditDbBadge,
      getAll: adminGetAllDbBadges,
      getOne: adminGetOneDbBadge
    }));

  test('returns the result of generating the api', () => expect(result).toBe(mockResult));

});
