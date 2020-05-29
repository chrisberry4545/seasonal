import { getOneRegion } from './get-one-region';
import * as makeAuthorizedRequest from './make-authorized-request';
import { REGION_URL } from '../config';
import { IDbRegion } from '@chrisb-dev/seasonal-shared-models';

describe('getOneRegion', () => {
  const response = {} as IDbRegion;
  const id = 'id';
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IDbRegion;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await getOneRegion(id);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      `${REGION_URL}/${id}`
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
