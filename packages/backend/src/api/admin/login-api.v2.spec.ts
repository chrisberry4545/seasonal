import {
  app
} from '../../app';

import supertest, { Response } from 'supertest';

const loginUrl = `/login`;

describe('Login', () => {
  let response: Response;

  describe('when the correct user data is used', () => {
    let result: { token: string };
    beforeAll(async () => {
      response = await supertest(app).post(loginUrl).send({
        password: 'admin-user-password',
        username: 'admin-user'
      });
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
      response = await supertest(app).post(loginUrl).send({
        password: 'admin-user-password',
        username: 'user-does-not-exist'
      });
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
      response = await supertest(app).post(loginUrl).send({
        password: 'wrong-password',
        username: 'admin-user'
      });
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
