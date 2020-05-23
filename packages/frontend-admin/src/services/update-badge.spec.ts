import { updateBadge } from './update-badge';
import * as makeAuthorizedRequest from './make-authorized-request';
import { BADGE_URL } from '../config';
import { IBadge } from '@chrisb-dev/seasonal-shared-models';

describe('updateBadge', () => {
  const response = {} as IBadge;
  const item = {
    id: 'id'
  } as IBadge;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IBadge;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await updateBadge(item);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      BADGE_URL,
      {
        body: JSON.stringify(item),
        method: 'PATCH'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
