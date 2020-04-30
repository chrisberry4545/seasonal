import {
  attachJwtToken,
  attachNonAdminJwtToken
} from './login-utils';
import supertest, { Response } from 'supertest';

export const testFailedAuthorzation = (
  supertestRequestGenerator: () => supertest.Test
) => {
  let response: Response;
  describe('when the user is not an admin', () => {
    beforeAll(async () => {
      response = await attachNonAdminJwtToken(
        supertestRequestGenerator()
      );
    });

    test('Returns a status of 401', () => {
      expect(response.status).toBe(401);
    });
  });

  describe('when using a random token', () => {
    beforeAll(async () => {
      response = await attachJwtToken(
        supertestRequestGenerator(),
        'invalid-jwt-token'
      );
    });

    test('Returns a status of 401', () => {
      expect(response.status).toBe(401);
    });
  });
};
