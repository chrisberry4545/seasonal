import { getSingleRegion } from './get-single-region';
import * as makeAuthorizedRequest from './make-authorized-request';
import { REGION_URL } from '../config';
import { IDbRegion } from '@chrisb-dev/seasonal-shared-models';

describe('getSingleRegion', () => {
  const response = {} as IDbRegion;
  const id = 'id';
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IDbRegion;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await getSingleRegion(id);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      `${REGION_URL}/${id}`
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
