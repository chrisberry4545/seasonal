
import * as generateRestApi from '../../api-utils/generate-rest-api';
import { adminCreateDbRegion } from './admin-create-db-region';
import { adminDeleteDbRegion } from './admin-delete-db-region';
import { adminEditDbRegion } from './admin-edit-db-region';
import { adminGetAllDbRegions } from './admin-get-all-db-regions';
import { adminGetOneDbRegion } from './admin-get-one-db-region';
import { apiAdminRegion } from './api-admin-region';
import { Router } from 'express';

describe('apiAdminRegion', () => {
  let mockGenerateRestApi: jest.SpyInstance;
  const mockResult = {} as Router;
  let result: Router;

  beforeEach(() => {
    mockGenerateRestApi = jest.spyOn(generateRestApi, 'generateRestApi')
      .mockReturnValue(mockResult);
    result = apiAdminRegion();
  });

  test('generates the rest api', () =>
    expect(mockGenerateRestApi).toHaveBeenCalledWith({
      create: adminCreateDbRegion,
      deleteOne: adminDeleteDbRegion,
      edit: adminEditDbRegion,
      getAll: adminGetAllDbRegions,
      getOne: adminGetOneDbRegion,
      idsAreUUIDs: false
    }));

  test('returns the result of generating the api', () => expect(result).toBe(mockResult));

});
