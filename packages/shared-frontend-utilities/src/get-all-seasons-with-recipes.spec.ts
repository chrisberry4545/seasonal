import { getAllSeasonsWithRecipes } from './get-all-seasons-with-recipes';
import * as getQueryString from './get-query-string';
import * as handleErrors from './handle-errors';
import { IHydratedSeason, SEASON_WITH_RECIPES_URL } from '@chrisb-dev/seasonal-shared-models';

describe('getAllSeasonsWithRecipes', () => {
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
    result = await getAllSeasonsWithRecipes(true, false, 'regionId');
  });

  test('calls getQueryString', () => expect(mockGetQueryString)
    .toHaveBeenCalledWith(true, false, 'regionId')
  );

  test('calls fetch with the expected values', () =>
    expect(fetchMock).toHaveBeenCalledWith(
      `${SEASON_WITH_RECIPES_URL}${queryString}`
    ));

  test('returns the response', () => expect(result).toEqual(mockResponse));

  describe('when the request errors', () => {
    beforeEach(async () => {
      fetchMock.mockReject(new Error('Error'));
      try {
        await getAllSeasonsWithRecipes();
      } catch (e) {
        return;
      }
    });

    test('calls handleError', () =>
      expect(mockHandleErrors).toHaveBeenCalled());
  });
});
