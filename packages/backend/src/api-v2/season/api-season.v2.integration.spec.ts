import {
  app
} from '../../app';
import supertest, { Response } from 'supertest';
import { ENDPOINT_V2_SEASON } from '../../config';
import { LANGUAGES } from '@chrisb-dev/seasonal-shared-models';

describe('Get all seasons', () => {
  let response: Response;

  describe('with no query params', () => {
    beforeAll(async () =>
      response = await supertest(app).get(`/${ENDPOINT_V2_SEASON}`));

    test('Returns a status of 200', () =>
      expect(response.status).toBe(200));

    test('Returns a full list of season data', () =>
      expect(response.body).toMatchSnapshot());

  });

  describe('when a language is set', () => {
    beforeAll(async () =>
      response = await supertest(app).get(`/${ENDPOINT_V2_SEASON}?language=${LANGUAGES.EN_US}`));

    test('Returns a status of 200', () =>
      expect(response.status).toBe(200));

    test('Returns a full list of season data', () =>
      expect(response.body).toMatchSnapshot());

  });

});
