import { getSingleBadge } from './get-single-badge';
import * as makeAuthorizedRequest from './make-authorized-request';
import { BADGE_URL } from '../config';
import { IBadge } from '@chrisb-dev/seasonal-shared-models';

describe('getSingleBadge', () => {
  const response = {} as IBadge;
  const id = 'id';
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IBadge;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await getSingleBadge(id);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      `${BADGE_URL}/${id}`
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
