import { getCountries } from './get-countries';
import * as handleErrors from './handle-errors';
import { ICountry, COUNTRY_URL, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import * as getQueryString from './get-query-string';

describe('getCountries', () => {
  let mockGetQueryString: jest.SpyInstance;
  let mockHandleErrors: jest.SpyInstance;
  let result: ICountry[];
  const queryString = '?query-string=true';
  const mockResponse = { message: 'test' };

  beforeEach(async () => {
    fetchMock.mockResponse(JSON.stringify(mockResponse));
    mockGetQueryString = jest.spyOn(getQueryString, 'getQueryString')
      .mockReturnValue(queryString);
    mockHandleErrors = jest.spyOn(handleErrors, 'handleErrors');
    result = await getCountries(LANGUAGES.EN_US);
  });

  test('calls getQueryString', () => expect(mockGetQueryString)
    .toHaveBeenCalledWith(undefined, undefined, undefined, LANGUAGES.EN_US)
  );

  test('calls fetch with the expected values', () =>
    expect(fetchMock).toHaveBeenCalledWith(`${COUNTRY_URL}${queryString}`));

  test('returns the response', () => expect(result).toEqual(mockResponse));

  describe('when the request errors', () => {
    beforeEach(async () => {
      fetchMock.mockReject(new Error('Error'));
      try {
        await getCountries();
      } catch (e) {
        return;
      }
    });

    test('calls handleError', () =>
      expect(mockHandleErrors).toHaveBeenCalled());
  });
});
