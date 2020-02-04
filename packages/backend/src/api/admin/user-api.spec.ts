import supertest, { Response } from 'supertest';
import { getAdminJwt, getNonAdminJwt } from './test-utils/login-utils';
import { IUser } from '@chrisb-dev/seasonal-shared';
import { app } from '../../app';

const makeRequestWithJwtToken = async (jwtToken: string) => {
  const response = await supertest(app).get('/admin/user')
    .set('Authorization', `Bearer ${jwtToken}`);
  return response;
};

const makeRequestWithAdminJwt = async () => {
  const adminJwt = await getAdminJwt();
  return makeRequestWithJwtToken(adminJwt);
};

const makeRequestWithNonAdminJwt = async () => {
  const nonAdminJwt = await getNonAdminJwt();
  return makeRequestWithJwtToken(nonAdminJwt);
};

describe('users-api', () => {
  let response: Response;

  describe('get all', () => {
    let result: IUser[];

    describe('when logged in as an admin', () => {
      beforeAll(async () => {
        response = await makeRequestWithAdminJwt();
        result = response.body;
      });

      test('Returns a status of 200', () => {
        expect(response.status).toBe(200);
      });
      test('Returns the expected users', () => {
        expect(result).toHaveLength(2);
      });
      test('Returns the expected result', () => {
        expect(result).toMatchSnapshot();
      });
    });

    describe('when the user is not an admin', () => {
      beforeAll(async () => {
        response = await makeRequestWithNonAdminJwt();
      });

      test('Returns a status of 401', () => {
        expect(response.status).toBe(401);
      });
    });

    describe('when using a random token', () => {
      beforeAll(async () => {
        response = await makeRequestWithJwtToken('abc');
      });

      test('Returns a status of 401', () => {
        expect(response.status).toBe(401);
      });
    });
  });
});
