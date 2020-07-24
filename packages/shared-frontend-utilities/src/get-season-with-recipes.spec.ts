import { getSeasonWithRecipes } from './get-season-with-recipes';
import * as getQueryString from './get-query-string';
import * as handleErrors from './handle-errors';
import { IHydratedSeason, SEASON_WITH_RECIPES_URL, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';

describe('getSeasonWithRecipes', () => {
  let mockGetQueryString: jest.SpyInstance;
  let mockHandleErrors: jest.SpyInstance;
  let result: IHydratedSeason;
  const queryString = '?query-string=true';
  const mockResponse = { message: 'test' };

  beforeEach(async () => {
    fetchMock.mockClear();
    fetchMock.mockResponse(JSON.stringify(mockResponse));
    mockGetQueryString = jest.spyOn(getQueryString, 'getQueryString')
      .mockReturnValue(queryString);
    mockHandleErrors = jest.spyOn(handleErrors, 'handleErrors');
    result = await getSeasonWithRecipes(1, true, false, 'regionId', LANGUAGES.EN_US);
  });

  test('calls getQueryString', () => expect(mockGetQueryString)
    .toHaveBeenCalledWith(true, false, 'regionId', LANGUAGES.EN_US)
  );

  test('calls fetch with the expected values', () =>
    expect(fetchMock).toHaveBeenCalledWith(
      `${SEASON_WITH_RECIPES_URL}/1${queryString}`
    ));

  test('returns the response', () => expect(result).toEqual(mockResponse));

  describe('when the request errors', () => {
    beforeEach(async () => {
      fetchMock.mockReject(new Error('Error'));
      try {
        await getSeasonWithRecipes(1);
      } catch (e) {
        return;
      }
    });

    test('calls handleError', () =>
      expect(mockHandleErrors).toHaveBeenCalled());
  });
});
