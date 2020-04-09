import { getCountries } from './get-countries';
import * as handleErrors from './handle-errors';
import { ICountry, COUNTRY_URL } from '@chrisb-dev/seasonal-shared-models';

describe('getCountries', () => {
  let mockHandleErrors: jest.SpyInstance;
  let result: ICountry[];
  const mockResponse = { message: 'test' };

  beforeEach(async () => {
    fetchMock.mockResponse(JSON.stringify(mockResponse));
    mockHandleErrors = jest.spyOn(handleErrors, 'handleErrors');
    result = await getCountries();
  });

  test('calls fetch with the expected values', () =>
    expect(fetchMock).toHaveBeenCalledWith(COUNTRY_URL));

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
