import { makeAuthorizedRequest } from './make-authorized-request';
import * as getAccessTokenHeaders from './get-access-token-headers';

describe('makeAuthorizedRequest', () => {
  const url = 'url';
  const accessTokenHeaders = { header: 'header' };
  let result: string;
  const response = { response: 'response' };

  beforeEach(() => {
    jest.spyOn(getAccessTokenHeaders, 'getAccessTokenHeaders')
      .mockReturnValue(accessTokenHeaders);
  });

  describe('when the request is successful', () => {
    beforeEach(async () => {
      fetchMock.mockResponse(JSON.stringify(response));
      result = await makeAuthorizedRequest<string>(url);
    });

    test('calls fetch with the expected values', () =>
      expect(fetchMock).toHaveBeenCalledWith(
        url,
        {
          headers: {
            'Content-Type': 'application/json',
            ...accessTokenHeaders
          }
        }
      ));

    test('returns the result', () => expect(result).toEqual(response));

  });

  describe('when the request errors', () => {
    const errorResponse = {
      error: 'error'
    };
    let error: Error;

    beforeEach(async () => {
      fetchMock.mockResponse(JSON.stringify(errorResponse));
      try {
        await makeAuthorizedRequest<string>(url);
      } catch (err) {
        error = err;
      }
    });

    test('throws an error', () => expect(error).toBeDefined());

  });

  describe('when the request returns a 401 status', () => {
    let error: Error;

    beforeEach(async () => {
      fetchMock.mockResponse([
        'error',
        { status: 401 }
      ] as any);
      try {
        await makeAuthorizedRequest<string>(url);
      } catch (err) {
        error = err;
      }
    });

    test('throws an error', () => expect(error).toBeDefined());

  });

});
