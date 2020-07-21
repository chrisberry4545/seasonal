import {
  app
} from '../../app';
import supertest, { Response } from 'supertest';
import { BADGE_ID_VITAMIN_C, BADGE_ID_VITAMIN_D } from '../../api-utils/test-utils/shared-test-ids';
import { ENDPOINT_V2_BADGE } from '../../config';
import { LANGUAGES } from '@chrisb-dev/seasonal-shared-models';

const makeSingleBadgeRequest = async (
  id: string = BADGE_ID_VITAMIN_C,
  language?: string
) => supertest(app).get(`/${ENDPOINT_V2_BADGE}/${id}${
  language ? `?language=${language}` : ''
}`);

describe('Get single badge item', () => {
  let response: Response;

  describe('when a language is not specified', () => {
    beforeAll(async () => {
      response = await makeSingleBadgeRequest();
    });

    test('Returns a status of 200', () =>
      expect(response.status).toBe(200));

    test('Retrieves a single badge item', () =>
      expect(response.body).toMatchSnapshot());

  });

  describe('when a language is specified', () => {
    beforeAll(async () => response = await makeSingleBadgeRequest(
      BADGE_ID_VITAMIN_D, LANGUAGES.EN_US
    ));

    test('Returns a status of 200', () =>
      expect(response.status).toBe(200));

    test('Retrieves the expected badge item', () =>
      expect(response.body).toMatchSnapshot());

  });

});
