import {
  app
} from '../../app';
import supertest, { Response } from 'supertest';
import {
  ICountry, LANGUAGES
} from '@chrisb-dev/seasonal-shared-models';
import { ENDPOINT_V2_COUNTRY } from '../../config';

describe('Get countries', () => {
  let response: Response;
  let result: ICountry[];

  describe('when no language is specified', () => {
    beforeAll(async () => {
      response = await supertest(app).get(`/${ENDPOINT_V2_COUNTRY}`);
      result = response.body;
    });

    test('Returns a status of 200', () =>
      expect(response.status).toBe(200));

    test('Retrieves a list of countries', () =>
      expect(result).toMatchSnapshot());

    test('Does not return countries where all regions are set to disabled', () =>
      expect(
        result.find((country) => country.name === 'Country has no enabled regions')
      ).toBeUndefined());

  });

  describe('when a language is specified', () => {
    beforeAll(async () => {
      response = await supertest(app)
        .get(`/${ENDPOINT_V2_COUNTRY}?language=${LANGUAGES.EN_US}`);
      result = response.body;
    });

    test('Returns a status of 200', () =>
      expect(response.status).toBe(200));

    test('Retrieves a list of countries', () =>
      expect(result).toMatchSnapshot());

  });

});
