import {
  app
} from '../../app';
import supertest, { Response } from 'supertest';
import { ENDPOINT_V2_TRANSLATION } from '../../config';
import { LANGUAGES } from '@chrisb-dev/seasonal-shared-models';

const makeSingleTranslationRequest = async (
  language: LANGUAGES
) => supertest(app).get(`/${ENDPOINT_V2_TRANSLATION}/${language}`);

describe('Get single translation', () => {
  let response: Response;

  beforeAll(async () => response = await makeSingleTranslationRequest(
    LANGUAGES.EN_US
  ));

  test('Returns a status of 200', () =>
    expect(response.status).toBe(200));

  test('Retrieves the expected translation item', () =>
    expect(response.body).toMatchSnapshot());

});
