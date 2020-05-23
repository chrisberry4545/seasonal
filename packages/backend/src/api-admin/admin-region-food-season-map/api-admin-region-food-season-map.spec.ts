
import * as generateRestApi from '../../api-utils/generate-rest-api';
import { adminCreateDbRegionFoodSeasonMap } from './admin-create-db-region-food-season-map';
import { adminDeleteDbRegionFoodSeasonMap } from './admin-delete-db-region-food-season-map';
import { adminEditDbRegionFoodSeasonMap } from './admin-edit-db-region-food-season-map';
import { adminGetAllDbRegionFoodSeasonMaps } from './admin-get-all-db-region-food-season-maps';
import { adminGetOneDbRegionFoodSeasonMap } from './admin-get-one-db-region-food-season-map';
import { apiAdminRegionFoodSeasonMap } from './api-admin-region-food-season-map';
import { Router } from 'express';

describe('apiAdminRegionFoodSeasonMap', () => {
  let mockGenerateRestApi: jest.SpyInstance;
  const mockResult = {} as Router;
  let result: Router;

  beforeEach(() => {
    mockGenerateRestApi = jest.spyOn(generateRestApi, 'generateRestApi')
      .mockReturnValue(mockResult);
    result = apiAdminRegionFoodSeasonMap();
  });

  test('generates the rest api', () =>
    expect(mockGenerateRestApi).toHaveBeenCalledWith({
      create: adminCreateDbRegionFoodSeasonMap,
      deleteOne: adminDeleteDbRegionFoodSeasonMap,
      edit: adminEditDbRegionFoodSeasonMap,
      getAll: adminGetAllDbRegionFoodSeasonMaps,
      getOne: adminGetOneDbRegionFoodSeasonMap
    }));

  test('returns the result of generating the api', () => expect(result).toBe(mockResult));

});
