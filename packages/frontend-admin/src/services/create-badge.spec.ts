import { createBadge } from './create-badge';
import * as makeAuthorizedRequest from './make-authorized-request';
import { BADGE_URL } from '../config';
import { IBadge } from '@chrisb-dev/seasonal-shared-models';

describe('createBadge', () => {
  const response = {} as IBadge;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IBadge;
  const item = {
    id: 'id'
  } as IBadge;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await createBadge(item);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      BADGE_URL,
      {
        body: JSON.stringify(item),
        method: 'POST'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
