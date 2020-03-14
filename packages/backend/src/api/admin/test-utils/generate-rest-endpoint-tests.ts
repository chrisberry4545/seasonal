import supertest, { Response } from 'supertest';
import {
  attachAdminJwtToken,
  attachEditorJwtToken
} from './login-utils';
import { app } from '../../../app';
import { testFailedAuthorzation } from './authorization-tests';

export const generateRestEndpointTests = <T extends { id?: string, code?: string } > ({
  path,
  singleItemId,
  validItem,
  validItemForEdit,
  propertiesNotReturned = [],
  adminOnly = false
}: {
  path: string,
  singleItemId: string,
  validItem: T,
  validItemForEdit: T,
  propertiesNotReturned?: Array<keyof T>,
  adminOnly?: boolean
}) => {

  const getId = (item: T) => item.id || item.code;

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
              supertest(app).delete(`${path}/${getId(result)}`)
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
              supertest(app).get(`${path}/${getId(result)}`)
            );
            const createdItem: T = createdItemResponse.body;
            expect(getId(createdItem)).toBe(getId(result));
          });
        });
      });

      if (!adminOnly) {
        describe('when logged in as an editor', () => {
          beforeAll(async () => {
            response = await attachEditorJwtToken(
              supertestRequestGenerator()
            );
            result = response.body;
          });
          afterAll(async () =>
            await attachAdminJwtToken(
              supertest(app).delete(`${path}/${getId(result)}`)
            ));

          test('Returns a status of 200', () => {
            expect(response.status).toBe(200);
          });
        });
      }
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

      if (!adminOnly) {
        describe('when logged in as an editor', () => {
          beforeAll(async () => {
            response = await attachEditorJwtToken(
              supertestRequestGenerator()
            );
            result = response.body;
          });

          test('Returns a status of 200', () => {
            expect(response.status).toBe(200);
          });
        });
      }
    });

    describe('get single item', () => {
      let response: Response;
      let result: T;
      const singleItemPath = `${path}/${singleItemId}`;
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

      if (!adminOnly) {
        describe('when logged in as an editor', () => {
          beforeAll(async () => {
            response = await attachEditorJwtToken(
              supertestRequestGenerator()
            );
            result = response.body;
          });

          test('Returns a status of 200', () => {
            expect(response.status).toBe(200);
          });
        });
      }
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
          ...validItemForEdit,
          [existingItem.id ? 'id' : 'code']: getId(existingItem)
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
          const { id, code, ...otherProps } = result;
          expect(otherProps).toMatchSnapshot();
        });
        test('Returns an id', () => {
          expect(getId(result)).toBeDefined();
        });
        test('the item should be edited in the database', async () => {
          const editedItemResponse = await attachAdminJwtToken(
            supertest(app).get(`${path}/${getId(result)}`)
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

      if (!adminOnly) {
        describe('when logged in as an editor', () => {
          beforeAll(async () => {
            response = await attachEditorJwtToken(
              supertestRequestGenerator()
            );
            result = response.body;
          });

          test('Returns a status of 200', () => {
            expect(response.status).toBe(200);
          });
        });
      }
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
        supertest(app).delete(`${path}/${getId(existingItem)}`);

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
          expect(getId(result)).toBeDefined();
        });
        test('the item should be deleted from the database', async () => {
          const deletedItemResponse = await attachAdminJwtToken(
            supertest(app).get(`${path}/${getId(result)}`)
          );
          expect(deletedItemResponse.body).toBe('');
        });
      });

      if (!adminOnly) {
        describe('when logged in as an editor', () => {
          beforeAll(async () => {
            response = await attachEditorJwtToken(
              supertestRequestGenerator()
            );
            result = response.body;
          });

          test('Returns a status of 200', () => {
            expect(response.status).toBe(200);
          });
        });
      }
    });
  });
};
