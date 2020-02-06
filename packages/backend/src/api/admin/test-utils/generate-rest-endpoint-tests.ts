import supertest, { Response } from 'supertest';
import {
  attachAdminJwtToken
} from './login-utils';
import { app } from '../../../app';
import { testFailedAuthorzation } from './authorization-tests';

export const generateRestEndpointTests = <T extends { id: string }> ({
  path,
  validItem,
  validItemForEdit,
  propertiesNotReturned = []
}: {
  path: string,
  validItem: T,
  validItemForEdit: T,
  propertiesNotReturned?: Array<keyof T>
}) => {
  describe(`REST endpoint testing for ${path}`, () => {
    describe('create item', () => {
      let response: Response;
      let result: T;

      const supertestRequestGenerator = () => supertest(app).post(path).send(validItem);

      testFailedAuthorzation(supertestRequestGenerator);

      describe('when logged in as an admin', () => {

        describe('and the item is valid', () => {
          beforeAll(async () => {
            response = await attachAdminJwtToken(
              supertestRequestGenerator()
            );
            result = response.body;
          });
          afterAll(async () =>
            await attachAdminJwtToken(
              supertest(app).delete(`${path}/${result.id}`)
            ));

          test('Returns a status of 200', () => {
            expect(response.status).toBe(200);
          });
          test('Returns the expected result', () => {
            const { id, ...nonIdProps } = result;
            expect(nonIdProps).toMatchSnapshot();
          });
          test('the item should be added to the database', async () => {
            const createdItemResponse = await attachAdminJwtToken(
              supertest(app).get(`${path}/${result.id}`)
            );
            const createdItem: T = createdItemResponse.body;
            expect(createdItem.id).toBe(result.id);
          });
        });
      });
    });

    describe('get all', () => {
      let response: Response;
      let result: T[];
      const supertestRequestGenerator = () => supertest(app).get(path);

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

    describe('get single item', () => {
      let response: Response;
      let result: T;
      const singleItemPath = `${path}/053c46cd-584e-46c5-a70d-b79b9ded3cca`;
      const supertestRequestGenerator = () => supertest(app).get(singleItemPath);

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

    describe('edit item', () => {
      let response: Response;
      let result: T;
      let existingItem: T;
      beforeAll(async () => {
        const existingItemResponse = await attachAdminJwtToken(
          supertest(app).post(path).send(validItem)
        );
        existingItem = existingItemResponse.body;
      });

      const supertestRequestGenerator = () =>
        supertest(app).patch(path).send({
          id: existingItem.id,
          ...validItemForEdit
        });

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
          const { id, ...otherProps } = result;
          expect(otherProps).toMatchSnapshot();
        });
        test('Returns an id', () => {
          expect(result.id).toBeDefined();
        });
        test('the item should be edited in the database', async () => {
          const editedItemResponse = await attachAdminJwtToken(
            supertest(app).get(`${path}/${result.id}`)
          );
          const { id, ...otherProps } = editedItemResponse.body;
          const withPropertiesRemoved =
            propertiesNotReturned.reduce((item, propertyNotToReturn) => {
              const copy = { ...item };
              delete copy[propertyNotToReturn];
              return copy;
            }, validItemForEdit);
          expect(otherProps).toEqual(withPropertiesRemoved);
        });
      });
    });

    describe('delete item', () => {
      let response: Response;
      let result: T;
      let existingItem: T;
      beforeAll(async () => {
        const existingItemResponse = await attachAdminJwtToken(
          supertest(app).post(path).send(validItem)
        );
        existingItem = existingItemResponse.body;
      });

      const supertestRequestGenerator = () =>
        supertest(app).delete(`${path}/${existingItem.id}`);

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
          const { id, ...otherProps } = result;
          expect(otherProps).toMatchSnapshot();
        });
        test('Returns an id', () => {
          expect(result.id).toBeDefined();
        });
        test('the item should be deleted from the database', async () => {
          const deletedItemResponse = await attachAdminJwtToken(
            supertest(app).get(`${path}/${result.id}`)
          );
          expect(deletedItemResponse.body).toBe('');
        });
      });
    });
  });
};
