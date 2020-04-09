import { getFoodDetailsData } from './get-food-details-data';
import * as getQueryString from './get-query-string';
import * as handleErrors from './handle-errors';
import { IHydratedFood, FOOD_DETAILS_URL } from '@chrisb-dev/seasonal-shared-models';

describe('getFoodDetailsData', () => {
  let mockGetQueryString: jest.SpyInstance;
  let mockHandleErrors: jest.SpyInstance;
  let result: IHydratedFood;
  const queryString = '?query-string=true';
  const mockResponse = { message: 'test' };

  beforeEach(async () => {
    fetchMock.mockResponse(JSON.stringify(mockResponse));
    mockGetQueryString = jest.spyOn(getQueryString, 'getQueryString')
      .mockReturnValue(queryString);
    mockHandleErrors = jest.spyOn(handleErrors, 'handleErrors');
    result = await getFoodDetailsData('foodId', true, false, 'regionId');
  });

  test('calls getQueryString', () => expect(mockGetQueryString)
    .toHaveBeenCalledWith(true, false, 'regionId')
  );

  test('calls fetch with the expected values', () =>
    expect(fetchMock).toHaveBeenCalledWith(
      `${FOOD_DETAILS_URL}/foodId${queryString}`
    ));

  test('returns the response', () => expect(result).toEqual(mockResponse));

  describe('when the request errors', () => {
    beforeEach(async () => {
      fetchMock.mockReject(new Error('Error'));
      try {
        await getFoodDetailsData(
          'foodid'
        );
      } catch (e) {
        return;
      }
    });

    test('calls handleError', () =>
      expect(mockHandleErrors).toHaveBeenCalled());
  });
});
