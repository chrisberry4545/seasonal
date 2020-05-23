import { getAllBadges } from './get-all-badges';
import * as makeAuthorizedRequest from './make-authorized-request';
import { BADGE_URL } from '../config';
import { IBadge } from '@chrisb-dev/seasonal-shared-models';

describe('getAllBadges', () => {
  const response = [{}] as IBadge[];
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IBadge[];
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await getAllBadges();
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      BADGE_URL
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
