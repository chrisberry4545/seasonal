
import * as generateRestApi from '../../../api-utils/generate-rest-api';
import { adminReportGetAllFoodWithNoRecipes } from './admin-report-get-all-food-with-no-recipes';
import { apiAdminReportFoodWithNoRecipes } from './api-admin-report-food-with-no-recipes';
import { Router } from 'express';

describe('apiAdminReportFoodWithNoRecipes', () => {
  let mockGenerateRestApi: jest.SpyInstance;
  const mockResult = {} as Router;
  let result: Router;

  beforeEach(() => {
    mockGenerateRestApi = jest.spyOn(generateRestApi, 'generateRestApi')
      .mockReturnValue(mockResult);
    result = apiAdminReportFoodWithNoRecipes();
  });

  test('generates the rest api', () =>
    expect(mockGenerateRestApi).toHaveBeenCalledWith({
      getAll: adminReportGetAllFoodWithNoRecipes
    }));

  test('returns the result of generating the api', () => expect(result).toBe(mockResult));

});
