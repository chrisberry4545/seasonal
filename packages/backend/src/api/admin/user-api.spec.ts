import supertest, { Response } from 'supertest';
import { getAdminJwt, getNonAdminJwt } from './test-utils/login-utils';
import { IUser } from '@chrisb-dev/seasonal-shared';
import { app } from '../../app';

const attachJwtToken = (
  supertestInstance: supertest.Test,
  jwtToken: string
) => supertestInstance.set('Authorization', `Bearer ${jwtToken}`);

const attachAdminJwtToken = async (
  supertestInstance: supertest.Test
) => {
  const adminJwt = await getAdminJwt();
  return attachJwtToken(
    supertestInstance,
    adminJwt
  );
};

const attachNonAdminJwtToken = async (
  supertestInstance: supertest.Test
) => {
  const nonAdminJwt = await getNonAdminJwt();
  return attachJwtToken(
    supertestInstance,
    nonAdminJwt
  );
};

const userPath = '/admin/user';

describe('get all users', () => {
  let response: Response;
  let result: IUser[];

  describe('when logged in as an admin', () => {
    beforeAll(async () => {
      response = await attachAdminJwtToken(
        supertest(app).get(userPath)
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

  describe('when the user is not an admin', () => {
    beforeAll(async () => {
      response = await attachNonAdminJwtToken(
        supertest(app).get(userPath)
      );
    });

    test('Returns a status of 401', () => {
      expect(response.status).toBe(401);
    });
  });

  describe('when using a random token', () => {
    beforeAll(async () => {
      response = await attachJwtToken(
        supertest(app).get(userPath),
        'invalid-jwt-token'
      );
    });

    test('Returns a status of 401', () => {
      expect(response.status).toBe(401);
    });
  });
});

describe('get single user', () => {
  let response: Response;
  let result: IUser;
  const singleUserPath = `${userPath}/30e59fda-220b-4e8b-9e01-3a9f8ceeec45`;

  describe('when logged in as an admin', () => {
    beforeAll(async () => {
      response = await attachAdminJwtToken(
        supertest(app).get(singleUserPath)
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

  describe('when the user is not an admin', () => {
    beforeAll(async () => {
      response = await attachNonAdminJwtToken(
        supertest(app).get(singleUserPath)
      );
    });

    test('Returns a status of 401', () => {
      expect(response.status).toBe(401);
    });
  });

  describe('when using a random token', () => {
    beforeAll(async () => {
      response = await attachJwtToken(
        supertest(app).get(singleUserPath),
        'invalid-jwt-token'
      );
    });

    test('Returns a status of 401', () => {
      expect(response.status).toBe(401);
    });
  });
});

describe('create user', () => {
  let response: Response;
  let result: IUser;
  let errorResponse: { error: string };

  describe('when logged in as an admin', () => {

    describe('and the username and password are present', () => {
      beforeAll(async () => {
        response = await attachAdminJwtToken(
          supertest(app).post(userPath).send({
            password: 'new-password',
            username: 'new-user'
          })
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

  describe('when the user is not an admin', () => {
    beforeAll(async () => {
      response = await attachNonAdminJwtToken(
        supertest(app).post(userPath).send({
          password: 'new-password',
          username: 'new-user'
        })
      );
    });

    test('Returns a status of 401', () => {
      expect(response.status).toBe(401);
    });
  });

  describe('when using a random token', () => {
    beforeAll(async () => {
      response = await attachJwtToken(
        supertest(app).post(userPath).send({
          password: 'new-password',
          username: 'new-user'
        }),
        'invalid-jwt-token'
      );
    });

    test('Returns a status of 401', () => {
      expect(response.status).toBe(401);
    });
  });
});
