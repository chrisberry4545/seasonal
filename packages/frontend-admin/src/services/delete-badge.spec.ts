import { deleteBadge } from './delete-badge';
import * as makeAuthorizedRequest from './make-authorized-request';
import { BADGE_URL } from '../config';
import { IBadge } from '@chrisb-dev/seasonal-shared-models';

describe('deleteBadge', () => {
  const response = {} as IBadge;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IBadge;
  const id = 'id';
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await deleteBadge(id);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      `${BADGE_URL}/${id}`,
      {
        method: 'DELETE'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
