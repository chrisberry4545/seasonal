import { getAllLanguages } from './get-all-languages';
import * as handleErrors from './handle-errors';
import { ILanguagesResponse, LANGUAGE_URL } from '@chrisb-dev/seasonal-shared-models';

describe('getAllLanguages', () => {
  let mockHandleErrors: jest.SpyInstance;
  let result: ILanguagesResponse;
  const mockResponse = { message: 'test' };

  beforeEach(async () => {
    fetchMock.mockResponse(JSON.stringify(mockResponse));
    mockHandleErrors = jest.spyOn(handleErrors, 'handleErrors');
    result = await getAllLanguages();
  });

  test('calls fetch with the expected values', () =>
    expect(fetchMock).toHaveBeenCalledWith(LANGUAGE_URL));

  test('returns the response', () => expect(result).toEqual(mockResponse));

  describe('when the request errors', () => {
    beforeEach(async () => {
      fetchMock.mockReject(new Error('Error'));
      try {
        await getAllLanguages();
      } catch (e) {
        return;
      }
    });

    test('calls handleError', () =>
      expect(mockHandleErrors).toHaveBeenCalled());
  });
});
