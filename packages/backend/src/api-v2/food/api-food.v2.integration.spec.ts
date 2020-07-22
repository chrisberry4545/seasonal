import {
  app
} from '../../app';
import supertest, { Response } from 'supertest';
import {
  FOOD_ID_BEETROOT,
  FOOD_ID_ONION,
  RECIPES_ID_APPLE_CHEESE_AND_ONION,
  FOOD_ID_APPLE_SUBSTITUTE
} from '../../api-utils/test-utils/shared-test-ids';
import { ENDPOINT_V2_FOOD } from '../../config';
import { LANGUAGES } from '@chrisb-dev/seasonal-shared-models';

const makeSingleFoodRequest = async (
  id: string = FOOD_ID_BEETROOT,
  isVegetarian?: boolean,
  isVegan?: boolean,
  language?: LANGUAGES
) => {
  const query = [
    isVegetarian && 'is-vegetarian=true',
    isVegan && 'is-vegan=true',
    language && `language=${language}`
  ].filter(Boolean).join('&');
  const queryString = query ? `?${query}` : '';
  return supertest(app).get(`/${ENDPOINT_V2_FOOD}/${id}${queryString}`);
};

describe('Get single food item', () => {
  let response: Response;
  beforeAll(async () =>
    response = await makeSingleFoodRequest());

  test('Returns a status of 200', () =>
    expect(response.status).toBe(200));

  test('Retrieves a single food item', () =>
    expect(response.body).toMatchSnapshot());

  describe('When the isVegetarian filter is applied', () => {
    beforeEach(async () => {
      response = await makeSingleFoodRequest(FOOD_ID_BEETROOT, true);
    });

    test('Returns a status of 200', () =>
      expect(response.status).toBe(200));

  });

  describe('When the isVegan filter is applied', () => {
    beforeEach(async () => {
      response = await makeSingleFoodRequest(FOOD_ID_BEETROOT, false, true);
    });

    test('Returns a status of 200', () =>
      expect(response.status).toBe(200));

  });

  describe('when the food is a secondary food item in recipes', () => {
    beforeAll(async () => {
      response = await makeSingleFoodRequest(
        FOOD_ID_ONION
      );
    });

    test('Returns a status of 200', () =>
      expect(response.status).toBe(200));

    test('Retrieves a single food item', () =>
      expect(response.body).toMatchSnapshot());

    describe('and the isVegan recipe is applied', () => {
      beforeAll(async () => {
        response = await makeSingleFoodRequest(
          FOOD_ID_ONION, false, true
        );
      });

      test('returns the expected result', () =>
        expect(response.body).toMatchSnapshot());

    });

    describe('and the isVegetarian recipe is applied', () => {
      beforeAll(async () => {
        response = await makeSingleFoodRequest(
          FOOD_ID_ONION, true
        );
      });

      test('returns the expected result', () =>
        expect(response.body).toMatchSnapshot());

    });
  });

  describe('when the food is a substitute food of another food', () => {
    beforeAll(async () => {
      response = await makeSingleFoodRequest(
        FOOD_ID_APPLE_SUBSTITUTE
      );
    });

    test('returns the expected result', () => expect(response.body).toMatchSnapshot());

    test('returns the recipes of the parent food', () =>
      expect(response.body.primaryFoodInRecipe.length).toBeGreaterThan(0));

    test('returns the recipes of the parent food', () =>
      expect(response.body.primaryFoodInRecipe[0].id)
        .toBe(RECIPES_ID_APPLE_CHEESE_AND_ONION));

  });

  describe('when a language is supplied', () => {
    beforeEach(async () => {
      response = await makeSingleFoodRequest(
        FOOD_ID_BEETROOT, false, false, LANGUAGES.EN_US
      );
    });

    test('Returns a status of 200', () =>
      expect(response.status).toBe(200));

    test('Returns the expected result', () =>
      expect(response.body).toMatchSnapshot());
  });

});
