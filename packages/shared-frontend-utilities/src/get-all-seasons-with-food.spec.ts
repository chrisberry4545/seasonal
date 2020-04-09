import { getAllSeasonsWithFood } from './get-all-seasons-with-food';
import * as getQueryString from './get-query-string';
import * as handleErrors from './handle-errors';
import { IHydratedSeason, SEASON_WITH_FOOD_URL } from '@chrisb-dev/seasonal-shared-models';

describe('getAllSeasonsWithFood', () => {
  let mockGetQueryString: jest.SpyInstance;
  let mockHandleErrors: jest.SpyInstance;
  let result: IHydratedSeason[];
  const queryString = '?query-string=true';
  const mockResponse = { message: 'test' };

  beforeEach(async () => {
    fetchMock.mockResponse(JSON.stringify(mockResponse));
    mockGetQueryString = jest.spyOn(getQueryString, 'getQueryString')
      .mockReturnValue(queryString);
    mockHandleErrors = jest.spyOn(handleErrors, 'handleErrors');
    result = await getAllSeasonsWithFood('regionId');
  });

  test('calls getQueryString', () => expect(mockGetQueryString)
    .toHaveBeenCalledWith(undefined, undefined, 'regionId')
  );

  test('calls fetch with the expected values', () =>
    expect(fetchMock).toHaveBeenCalledWith(
      `${SEASON_WITH_FOOD_URL}${queryString}`
    ));

  test('returns the response', () => expect(result).toEqual(mockResponse));

  describe('when the request errors', () => {
    beforeEach(async () => {
      fetchMock.mockReject(new Error('Error'));
      try {
        await getAllSeasonsWithFood();
      } catch (e) {
        return;
      }
    });

    test('calls handleError', () =>
      expect(mockHandleErrors).toHaveBeenCalled());
  });
});
