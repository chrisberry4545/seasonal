import { getAllSeasons } from './get-all-seasons';
import * as getQueryString from './get-query-string';
import * as handleErrors from './handle-errors';
import { IBaseSeason, SEASON_URL, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';

describe('getAllSeasons', () => {
  let mockGetQueryString: jest.SpyInstance;
  let mockHandleErrors: jest.SpyInstance;
  let result: IBaseSeason[];
  const queryString = '?query-string=true';
  const mockResponse = { message: 'test' };

  beforeEach(async () => {
    fetchMock.mockResponse(JSON.stringify(mockResponse));
    mockGetQueryString = jest.spyOn(getQueryString, 'getQueryString')
      .mockReturnValue(queryString);
    mockHandleErrors = jest.spyOn(handleErrors, 'handleErrors');
    result = await getAllSeasons('regionId', LANGUAGES.EN_US);
  });

  test('calls getQueryString', () => expect(mockGetQueryString)
    .toHaveBeenCalledWith(undefined, undefined, 'regionId', LANGUAGES.EN_US)
  );

  test('calls fetch with the expected values', () =>
    expect(fetchMock).toHaveBeenCalledWith(
      `${SEASON_URL}${queryString}`
    ));

  test('returns the response', () => expect(result).toEqual(mockResponse));

  describe('when the request errors', () => {
    beforeEach(async () => {
      fetchMock.mockReject(new Error('Error'));
      try {
        await getAllSeasons();
      } catch (e) {
        return;
      }
    });

    test('calls handleError', () =>
      expect(mockHandleErrors).toHaveBeenCalled());
  });
});
