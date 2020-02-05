import supertest, { Response } from 'supertest';
import {
  attachAdminJwtToken
} from './test-utils/login-utils';
import { IRecipe } from '@chrisb-dev/seasonal-shared';
import { app } from '../../app';
import { testFailedAuthorzation } from './test-utils/authorization-tests';

const recipePath = '/admin/recipe';

describe('get all recipes', () => {
  let response: Response;
  let result: IRecipe[];
  const supertestRequestGenerator = () =>
    supertest(app).get(recipePath);

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
    test('Returns the expected recipe', () => {
      expect(result).toHaveLength(3);
    });
    test('Returns the expected result', () => {
      expect(result).toMatchSnapshot();
    });
  });
});

describe('get single recipe', () => {
  let response: Response;
  let result: IRecipe;
  const singleRecipePath = `${recipePath}/053c46cd-584e-46c5-a70d-b79b9ded3cca`;
  const supertestRequestGenerator = () =>
    supertest(app).get(singleRecipePath);

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

describe('create recipe', () => {
  let response: Response;
  let result: IRecipe;
  const validRecipe = {
    imageUrlSmall: 'http://image.com',
    isVegan: true,
    isVegetarian: false,
    linkUrl: 'http://new.com',
    name: 'new-recipe',
    primaryFoodInRecipeIds: ['c6f78568-fe23-47e4-8e65-55934199a39f'],
    secondaryFoodInRecipeIds: ['dd9ba012-8f8e-48af-9775-0139374dd94c']
  } as IRecipe;

  const supertestRequestGenerator = () =>
    supertest(app).post(recipePath).send(validRecipe);

  testFailedAuthorzation(supertestRequestGenerator);

  describe('when logged in as an admin', () => {

    describe('and the recipe is valid', () => {
      beforeAll(async () => {
        response = await attachAdminJwtToken(
          supertestRequestGenerator()
        );
        result = response.body;
      });
      afterAll(async () =>
        await attachAdminJwtToken(
          supertest(app).delete(`${recipePath}/${result.id}`)
        ));

      test('Returns a status of 200', () => {
        expect(response.status).toBe(200);
      });
      test('Returns the expected result', () => {
        const { id, ...nonIdProps } = result;
        expect(nonIdProps).toMatchSnapshot();
      });
      test('the recipe should be added to the database', async () => {
        const createdRecipeResponse = await attachAdminJwtToken(
          supertest(app).get(`${recipePath}/${result.id}`)
        );
        const createdRecipe: IRecipe = createdRecipeResponse.body;
        expect(createdRecipe.name).toBe(result.name);
      });
    });
  });
});

describe('delete recipes', () => {
  let response: Response;
  let result: IRecipe;
  let existingRecipe: IRecipe;
  beforeAll(async () => {
    const existingRecipeResponse = await attachAdminJwtToken(
      supertest(app).get(recipePath)
    );
    existingRecipe = existingRecipeResponse.body[
      existingRecipeResponse.body.length - 1
    ];
  });

  const supertestRequestGenerator = () =>
    supertest(app).delete(`${recipePath}/${existingRecipe.id}`);

  testFailedAuthorzation(supertestRequestGenerator);

  describe('when logged in as an admin', () => {
    beforeAll(async () => {
      response = await attachAdminJwtToken(
        supertestRequestGenerator()
      );
      result = response.body;
    });
    afterAll(async () =>
      await attachAdminJwtToken(
        supertest(app).post(recipePath).send(existingRecipe)
      ));

    test('Returns a status of 200', () => {
      expect(response.status).toBe(200);
    });
    test('Returns the expected result', () => {
      expect(result).toMatchSnapshot();
    });
    test('the recipe should be deleted from the database', async () => {
      const deletedRecipeResponse = await attachAdminJwtToken(
        supertest(app).get(`${recipePath}/${result.id}`)
      );
      expect(deletedRecipeResponse.body).toBe('');
    });
  });
});
