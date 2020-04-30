import supertest, { Response } from 'supertest';
import {
  attachAdminJwtToken,
  attachEditorJwtToken
} from './login-utils';
import { app } from '../../app';
import { testFailedAuthorzation } from './authorization-tests';
import { IBackendError } from '@chrisb-dev/seasonal-shared-models';
import { IDbBaseRecord } from '@chrisb-dev/seasonal-shared-models/dist/interfaces/data/db-base-record.interface';

export const generateRestEndpointTests = <T extends IDbBaseRecord > ({
  path,
  singleItemId,
  validItem,
  validItemForEdit,
  propertiesNotReturned = [],
  adminOnly = false,
  idsAreUUIDs = true
}: {
  path: string,
  singleItemId?: string,
  validItem?: T,
  validItemForEdit?: T,
  propertiesNotReturned?: Array<keyof T>,
  adminOnly?: boolean,
  idsAreUUIDs?: boolean
}) => {

  describe(`REST endpoint testing for ${path}`, () => {

    if (validItem) {
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
                supertest(app).delete(`${path}/${result.id}`)
              ));

            test('Returns a status of 200', () => {
              expect(response.status).toBe(200);
            });
          });
        }
      });
    }

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

    if (singleItemId) {
      describe('get single item', () => {
        let response: Response;
        let result: T;
        const singleItemPath = `${path}/${singleItemId}`;
        const supertestRequestGenerator = (
          pathToGet = singleItemPath
        ) => supertest(app).get(pathToGet);

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

        if (idsAreUUIDs) {
          describe('and the id is not valid', () => {
            let error: IBackendError;
            beforeAll(async () => {
              response = await attachAdminJwtToken(
                supertestRequestGenerator(
                  `${path}/invalid-uuid`
                )
              );
              error = response.body;
            });

            test('returns a status of 400', () => expect(response.status).toBe(400));

            test('returns an error', () => expect(error.message).toBe('Please provide a valid id'));
          });
        }
      });
    }

    if (validItemForEdit) {
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
        afterAll(async () =>
          await attachAdminJwtToken(
            supertest(app).delete(`${path}/${existingItem.id}`)
          ));

        const supertestRequestGenerator = () =>
          supertest(app).patch(path).send({
            ...validItemForEdit,
            id: existingItem.id
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
    }

    if (validItem) {
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

        const supertestRequestGenerator = (
          pathToUse = `${path}/${existingItem.id}`
        ) => supertest(app).delete(pathToUse);

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

          describe('when getting the delete item', () => {
            let deletedItemResponse: Response;
            beforeAll(async () => {
              deletedItemResponse = await attachAdminJwtToken(
                supertest(app).get(`${path}/${result.id}`)
              );
            });

            test('the item should be deleted from the database', () => {
              expect(deletedItemResponse.body.message).toBe('Not found');
            });

            test('the status code should be not found', () => {
              expect(deletedItemResponse.status).toBe(404);
            });
          });
        });

        if (!adminOnly) {
          describe('when logged in as an editor', () => {
            beforeAll(async () => {
              const existingItemResponse = await attachAdminJwtToken(
                supertest(app).post(path).send(validItem)
              );
              existingItem = existingItemResponse.body;
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

        if (idsAreUUIDs) {
          describe('and the id is not valid', () => {
            let error: IBackendError;
            beforeAll(async () => {
              response = await attachAdminJwtToken(
                supertestRequestGenerator(
                  `${path}/invalid-uuid`
                )
              );
              error = response.body;
            });

            test('returns a status of 400', () => expect(response.status).toBe(400));

            test('returns an error', () => expect(error.message).toBe('Please provide a valid id'));
          });
        }
      });
    }

  });
};
