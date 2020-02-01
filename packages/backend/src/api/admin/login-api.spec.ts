import { Response } from 'supertest';
import { callLoginEndpointForUser } from './test-utils/login-utils';

describe('login-api', () => {
  let response: Response;

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
    let result: string;
    beforeAll(async () => {
      response = await callLoginEndpointForUser(
        'user-does-not-exist',
        'admin-user-password'
      );
      result = response.body;
    });

    test('Returns a status of 401', () => {
      expect(response.status).toBe(401);
    });
    test('Returns an error message', () => {
      expect(result).toBe('No user found');
    });
  });

  describe('when the password does not match', () => {
    let result: string;
    beforeAll(async () => {
      response = await callLoginEndpointForUser(
        'admin-user',
        'wrong-password'
      );
      result = response.body;
    });

    test('Returns a status of 401', () => {
      expect(response.status).toBe(401);
    });
    test('Returns an error message', () => {
      expect(result).toBe('Login failed');
    });
  });
});
