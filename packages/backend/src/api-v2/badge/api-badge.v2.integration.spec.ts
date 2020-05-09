import {
  app
} from '../../app';
import supertest, { Response } from 'supertest';
import { BADGE_ID_VITAMIN_C } from '../../api-utils/test-utils/shared-test-ids';
import { ENDPOINT_V2_BADGE } from '../../config';

const makeSingleBadgeRequest = async (
  id: string = BADGE_ID_VITAMIN_C
) => supertest(app).get(`/${ENDPOINT_V2_BADGE}/${id}`);

describe('Get single badge item', () => {
  let response: Response;
  beforeAll(async () => {
    response = await makeSingleBadgeRequest();
  });

  test('Returns a status of 200', () => {
    expect(response.status).toBe(200);
  });
  test('Retrieves a single badge item', () => {
    expect(response.body).toMatchSnapshot();
  });

});
