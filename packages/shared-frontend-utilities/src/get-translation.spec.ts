import { getTranslation } from './get-translation';
import * as handleErrors from './handle-errors';
import { TRANSLATION_URL, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';

describe('getTranslation', () => {
  let mockHandleErrors: jest.SpyInstance;
  let result: any;
  const language = LANGUAGES.EN_US;
  const mockResponse = { message: 'test' };

  beforeEach(async () => {
    fetchMock.mockResponse(JSON.stringify(mockResponse));
    mockHandleErrors = jest.spyOn(handleErrors, 'handleErrors');
    result = await getTranslation(language);
  });

  test('calls fetch with the expected values', () =>
    expect(fetchMock).toHaveBeenCalledWith(`${TRANSLATION_URL}/${language}`));

  test('returns the response', () => expect(result).toEqual(mockResponse));

  describe('when the request errors', () => {
    beforeEach(async () => {
      fetchMock.mockReject(new Error('Error'));
      try {
        await getTranslation(language);
      } catch (e) {
        return;
      }
    });

    test('calls handleError', () =>
      expect(mockHandleErrors).toHaveBeenCalled());
  });
});
