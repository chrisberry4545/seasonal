import * as setAccessToken from './set-access-token';
import { loginRequest } from './login-request';
import { LOGIN_URL } from '../config';

describe('loginRequest', () => {
  let mockSetAccessToken: jest.SpyInstance;
  const username = 'username';
  const password = 'password';

  beforeEach(() => {
    mockSetAccessToken = jest.spyOn(setAccessToken, 'setAccessToken')
      .mockReturnValue();
    mockSetAccessToken.mockClear();
  });

  describe('when the login is successful', () => {
    const mockResponse = {
      token: 'token'
    };

    beforeEach(async () => {
      fetchMock.mockResponse(JSON.stringify(mockResponse));
      await loginRequest(username, password);
    });

    test('calls fetch with the expected values', () =>
      expect(fetchMock).toHaveBeenCalledWith(
        LOGIN_URL,
        {
          body: JSON.stringify({
            password,
            username
          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }
      ));

    test('sets the access token', () =>
      expect(mockSetAccessToken).toHaveBeenCalledWith(mockResponse.token));
  });

  describe('when the login fails', () => {
    const mockErrorResponse = {
      error: 'error'
    };
    let error: Error;

    beforeEach(async () => {
      mockSetAccessToken = jest.spyOn(setAccessToken, 'setAccessToken')
        .mockReturnValue();
      fetchMock.mockResponse(JSON.stringify(mockErrorResponse));
      try {
        await loginRequest(username, password);
      } catch (err) {
        error = err;
      }
    });

    test('throws an error', () => expect(error).toBeDefined());

    test('does not set the access token', () =>
      expect(mockSetAccessToken).not.toHaveBeenCalled());

  });

});
