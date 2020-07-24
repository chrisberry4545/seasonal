import {
  app
} from '../../app';

import supertest, { Response } from 'supertest';
import { ENDPOINT_V2_SEASON_WITH_RECIPES } from '../../config';
import {
  SEASON_ID_JANUARY,
  SEASON_INDEX_JANUARY,
  SEASON_INDEX_FEBRUARY,
  SEASON_INDEX_MARCH
} from '../../api-utils/test-utils/shared-test-ids';
import { IHydratedSeason, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';

const getQueryString = (
  isVegetarian?: boolean,
  isVegan?: boolean,
  language?: LANGUAGES
) => {
  const query = [
    isVegetarian && 'is-vegetarian=true',
    isVegan && 'is-vegan=true',
    language && `language=${language}`
  ].filter(Boolean).join('&');
  return query ? `?${query}` : '';
};

describe('Get all seasons with recipes', () => {
  let response: Response;
  let seasonJanuary: IHydratedSeason | undefined;

  const makeAllSeasonsWithRecipesRequest = (
    isVegetarian?: boolean,
    isVegan?: boolean,
    language?: LANGUAGES
  ) => {
    const queryString = getQueryString(isVegetarian, isVegan, language);
    return supertest(app).get(`/${ENDPOINT_V2_SEASON_WITH_RECIPES}${queryString}`);
  };

  describe('when no filters are applied', () => {

    beforeEach(async () => {
      response = await makeAllSeasonsWithRecipesRequest();
    });

    test('Returns a status of 200', () =>
      expect(response.status).toBe(200));

    test('Returns a full list of season data', () =>
      expect(response.body).toMatchSnapshot());

  });

  describe('when an isVegetarian filter is applied', () => {
    beforeAll(async () => {
      response = await makeAllSeasonsWithRecipesRequest(
        true
      );
      const seasonData: IHydratedSeason[] = response.body;
      seasonJanuary = seasonData.find((season) => season.id === SEASON_ID_JANUARY);
    });

    test('Retrieves the expected data', () =>
      expect(response.body).toMatchSnapshot());

    test('Returns vegan or vegetarian recipes', () =>
      expect(
        seasonJanuary
        && seasonJanuary.recipes
        && seasonJanuary.recipes.every((recipe) =>
          recipe.isVegetarian === true
          || recipe.isVegan === true
        )
      ).toBe(true));

  });

  describe('when an isVegan filter is applied', () => {
    beforeAll(async () => {
      response = await makeAllSeasonsWithRecipesRequest(
        false, true
      );
      const seasonData: IHydratedSeason[] = response.body;
      seasonJanuary = seasonData.find((season) => season.id === SEASON_ID_JANUARY);
    });

    test('Retrieves the expected data', () =>
      expect(response.body).toMatchSnapshot());

    test('Returns only vegan recipes', () =>
      expect(
        seasonJanuary
        && seasonJanuary.recipes
        && seasonJanuary.recipes.every((recipe) => recipe.isVegan === true)
      ).toBe(true));

  });

  describe('when both isVegan and isVegetarian filter is applied', () => {
    beforeAll(async () => {
      response = await makeAllSeasonsWithRecipesRequest(
        true, true
      );
      const seasonData: IHydratedSeason[] = response.body;
      seasonJanuary = seasonData.find((season) => season.id === SEASON_ID_JANUARY);
    });

    test('Retrieves the expected data', () =>
      expect(response.body).toMatchSnapshot());

    test('Returns only vegan or vegetarian recipes', () =>
      expect(
        seasonJanuary
        && seasonJanuary.recipes
        && seasonJanuary.recipes.every((recipe) =>
          recipe.isVegan === true
          || recipe.isVegetarian
        )
      ).toBe(true));

  });

  describe('when a language is set', () => {
    beforeAll(async () =>
      response = await makeAllSeasonsWithRecipesRequest(
        false, false, LANGUAGES.EN_US
      ));

    test('Retrieves the expected data', () =>
      expect(response.body).toMatchSnapshot());

  });

});

describe('Get single season with recipes', () => {
  let response: Response;

  const makeSingleSeasonWithRecipesRequest = (
    seasonIndex: string = SEASON_INDEX_JANUARY,
    isVegetarian?: boolean,
    isVegan?: boolean,
    language?: LANGUAGES
  ) => {
    const queryString = getQueryString(isVegetarian, isVegan, language);
    return supertest(app).get(
      `/${ENDPOINT_V2_SEASON_WITH_RECIPES}/${seasonIndex}${queryString}`
    );
  };

  describe('when the season has no recipes', () => {
    beforeAll(async () => {
      response = await makeSingleSeasonWithRecipesRequest(SEASON_INDEX_MARCH);
    });

    test('Returns a status of 200', () =>
      expect(response.status).toBe(200));

    test('Retrieves a single season', () =>
      expect(response.body).toMatchSnapshot());

    test('Does not populate a seasons recipes if they do not exist', () =>
      expect(response.body.recipes).toHaveLength(0));

  });

  describe('when the season has recipes', () => {
    beforeAll(async () => {
      response = await makeSingleSeasonWithRecipesRequest(SEASON_INDEX_JANUARY);
    });

    test('Retrieves a single season with food and recipe data', () =>
      expect(response.body).toMatchSnapshot());

    test('Does not return any food', () =>
      expect(response.body.food).toBeUndefined());

  });

  describe('when an isVegetarian filter is applied', () => {
    beforeAll(async () => {
      response = await makeSingleSeasonWithRecipesRequest(
        SEASON_INDEX_JANUARY, true
      );
    });

    test('Retrieves the expected data', () =>
      expect(response.body).toMatchSnapshot());

  });

  describe('when an isVegan filter is applied', () => {
    beforeAll(async () => {
      response = await makeSingleSeasonWithRecipesRequest(
        SEASON_INDEX_FEBRUARY, false, true
      );
    });

    test('Retrieves the expected data', () =>
      expect(response.body).toMatchSnapshot());

  });

  describe('when both isVegan and isVegetarian filter is applied', () => {
    beforeAll(async () => {
      response = await makeSingleSeasonWithRecipesRequest(
        SEASON_INDEX_FEBRUARY, true, true
      );
    });

    test('Retrieves the expected data', () =>
      expect(response.body).toMatchSnapshot());

  });

  describe('when a language is included', () => {
    beforeAll(async () => {
      response = await makeSingleSeasonWithRecipesRequest(
        SEASON_INDEX_FEBRUARY, false, false, LANGUAGES.EN_US
      );
    });

    test('Retrieves the expected data', () =>
      expect(response.body).toMatchSnapshot());
  });

});
