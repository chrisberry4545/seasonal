import {
  app
} from '../../app';

import supertest, { Response } from 'supertest';
import { ENDPOINT_V2_SEASON_WITH_FOOD } from '../../config';
import {
  REGION_ID_USA,
  SEASON_INDEX_JANUARY,
  SEASON_INDEX_FEBRUARY,
  SEASON_INDEX_MARCH
} from '../../api-utils/test-utils/shared-test-ids';
import { LANGUAGES } from '@chrisb-dev/seasonal-shared-models';

describe('Get all seasons with food', () => {
  let response: Response;

  describe('when no language is included', () => {
    beforeAll(async () => {
      response = await supertest(app).get(`/${ENDPOINT_V2_SEASON_WITH_FOOD}`);
    });

    test('Returns a status of 200', () =>
      expect(response.status).toBe(200));

    test('Returns a full list of season data', () =>
      expect(response.body).toMatchSnapshot());
  });

  describe('when a language is set', () => {
    beforeAll(async () => {
      response = await supertest(app)
        .get(`/${ENDPOINT_V2_SEASON_WITH_FOOD}?language=${LANGUAGES.EN_US}`);
    });

    test('Returns a status of 200', () =>
      expect(response.status).toBe(200));

    test('Returns a full list of season data', () =>
      expect(response.body).toMatchSnapshot());
  });

});

describe('Get single season with food', () => {
  let response: Response;
  const makeSingleSeasonWithFoodRequest = (
    seasonIndex: string = SEASON_INDEX_JANUARY,
    regionId?: string,
    language?: LANGUAGES
  ) => {
    const queryString = [
      regionId && `region-id=${regionId}`,
      language && `language=${language}`
    ].filter(Boolean).join('&');
    return supertest(app).get(`/${ENDPOINT_V2_SEASON_WITH_FOOD}/${seasonIndex}${
      queryString
        ? `?${queryString}`
        : ''
    }`);
  };

  describe('when the requested season has no food', () => {
    beforeAll(async () => {
      response = await makeSingleSeasonWithFoodRequest(
        SEASON_INDEX_MARCH
      );
    });

    test('Returns a status of 200', () =>
      expect(response.status).toBe(200));

    test('Retrieves a single season', () =>
      expect(response.body).toMatchSnapshot());

    test('Returns an empty array for a seasons food if there is none', () =>
      expect(response.body.food).toHaveLength(0));

  });

  describe('when the requested season has food data', () => {
    beforeAll(async () => {
      response = await makeSingleSeasonWithFoodRequest(
        SEASON_INDEX_FEBRUARY, REGION_ID_USA
      );
    });

    test('Retrieves a single season with food data', () =>
      expect(response.body).toMatchSnapshot());

    test('Does not return any recipes', () =>
      expect(response.body.recipes).toBeUndefined());

  });

  describe('when a language is set', () => {
    beforeAll(async () => {
      response = await makeSingleSeasonWithFoodRequest(
        SEASON_INDEX_FEBRUARY,
        undefined,
        LANGUAGES.EN_US
      );
    });

    test('Returns a status of 200', () =>
      expect(response.status).toBe(200));

    test('Retrieves a single season', () =>
      expect(response.body).toMatchSnapshot());

  });

});
