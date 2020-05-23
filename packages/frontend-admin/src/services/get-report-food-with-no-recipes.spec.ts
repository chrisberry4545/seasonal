import { getReportFoodWithNoRecipes } from './get-report-food-with-no-recipes';
import * as makeAuthorizedRequest from './make-authorized-request';
import { FOOD_WITH_NO_RECIPES_URL } from '../config';
import { IFood } from '@chrisb-dev/seasonal-shared-models';

describe('getReportFoodWithNoRecipes', () => {
  const response = [{}] as IFood[];
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IFood[];
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await getReportFoodWithNoRecipes();
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      FOOD_WITH_NO_RECIPES_URL
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
