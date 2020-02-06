import supertest, { Response } from 'supertest';
import {
  attachAdminJwtToken
} from './test-utils/login-utils';
import { IUser } from '@chrisb-dev/seasonal-shared';
import { app } from '../../app';
import { testFailedAuthorzation } from './test-utils/authorization-tests';

const userPath = '/admin/user';

describe('get all users', () => {
  let response: Response;
  let result: IUser[];
  const supertestRequestGenerator = () => supertest(app).get(userPath);

  testFailedAuthorzation(supertestRequestGenerator);

  describe('when logged in as an admin', () => {
    beforeAll(async () => {
      response = await attachAdminJwtToken(
        supertestRequestGenerator()
      );
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
});

describe('get single user', () => {
  let response: Response;
  let result: IUser;
  const singleUserPath = `${userPath}/30e59fda-220b-4e8b-9e01-3a9f8ceeec45`;
  const supertestRequestGenerator = () => supertest(app).get(singleUserPath);

  testFailedAuthorzation(supertestRequestGenerator);

  describe('when logged in as an admin', () => {
    beforeAll(async () => {
      response = await attachAdminJwtToken(
        supertestRequestGenerator()
      );
      result = response.body;
    });

    test('Returns a status of 200', () => {
      expect(response.status).toBe(200);
    });
    test('Returns the expected result', () => {
      expect(result).toMatchSnapshot();
    });
  });
});

describe('create user', () => {
  let response: Response;
  let result: IUser;
  let errorResponse: { error: string };
  const supertestRequestGenerator = () =>
    supertest(app).post(userPath).send({
      password: 'new-password',
      username: 'new-user'
    });

  testFailedAuthorzation(supertestRequestGenerator);

  describe('when logged in as an admin', () => {

    describe('and the username and password are present', () => {
      beforeAll(async () => {
        response = await attachAdminJwtToken(
          supertestRequestGenerator()
        );
        result = response.body;
      });

      test('Returns a status of 200', () => {
        expect(response.status).toBe(200);
      });
      test('Returns the expected result', () => {
        const { id, ...rest } = result;
        expect(rest).toMatchSnapshot();
      });
      test('the user should be added to the database', async () => {
        const createdUserResponse = await attachAdminJwtToken(
          supertest(app).get(`${userPath}/${result.id}`)
        );
        const createdUser: IUser = createdUserResponse.body;
        expect(createdUser.username).toEqual(result.username);
      });
    });

    describe('and the password is not sent', () => {
      beforeAll(async () => {
        response = await attachAdminJwtToken(
          supertest(app).post(userPath).send({
            password: '',
            username: 'new-user'
          })
        );
        errorResponse = response.body;
      });

      test('Returns a status of 400', () => {
        expect(response.status).toBe(400);
      });
      test('Returns the expected result', () => {
        expect(errorResponse.error).toBe('Username or password missing');
      });
    });

    describe('and the username is not sent', () => {
      beforeAll(async () => {
        response = await attachAdminJwtToken(
          supertest(app).post(userPath).send({
            password: 'password',
            username: ''
          })
        );
        errorResponse = response.body;
      });

      test('Returns a status of 400', () => {
        expect(response.status).toBe(400);
      });
      test('Returns the expected result', () => {
        expect(errorResponse.error).toBe('Username or password missing');
      });
    });
  });
});
