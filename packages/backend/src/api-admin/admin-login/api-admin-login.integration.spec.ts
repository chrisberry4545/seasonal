import { Response } from 'supertest';
import { callLoginEndpointForUser } from '../../api-utils/test-utils/login-utils';
import { IBackendError } from '@chrisb-dev/seasonal-shared-models';

describe('login-api', () => {
  let response: Response;
  let errorResponse: IBackendError;

  describe('when the correct user data is used', () => {
    let result: { token: string };
    beforeAll(async () => {
      response = await callLoginEndpointForUser(
        'admin-user',
        'admin-user-password'
      );
      result = response.body;
    });

    test('Returns a status of 200', () => {
      expect(response.status).toBe(200);
    });
    test('Returns the JSON token', () => {
      expect(result.token).toBeDefined();
    });
  });

  describe('when the user is not found', () => {
    beforeAll(async () => {
      response = await callLoginEndpointForUser(
        'user-does-not-exist',
        'admin-user-password'
      );
      errorResponse = response.body;
    });

    test('Returns a status of 401', () => {
      expect(response.status).toBe(401);
    });
    test('Returns an error message', () => {
      expect(errorResponse.message).toBe('Login failed');
    });
  });

  describe('when the password does not match', () => {
    beforeAll(async () => {
      response = await callLoginEndpointForUser(
        'admin-user',
        'wrong-password'
      );
      errorResponse = response.body;
    });

    test('Returns a status of 401', () => {
      expect(response.status).toBe(401);
    });
    test('Returns an error message', () => {
      expect(errorResponse.message).toBe('Login failed');
    });
  });
});
