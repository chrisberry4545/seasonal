import {
  app
} from '../../app';
import supertest, { Response } from 'supertest';
import { ENDPOINT_V2_LANGUAGE } from '../../config';

const makeAllLanguagesRequest = async () =>
  supertest(app).get(`/${ENDPOINT_V2_LANGUAGE}`);

describe('Get all languages', () => {
  let response: Response;

  beforeAll(async () => response = await makeAllLanguagesRequest());

  test('Returns a status of 200', () =>
    expect(response.status).toBe(200));

  test('Retrieves the expected items', () =>
    expect(response.body).toMatchSnapshot());

});
