import { updateRegion } from './update-region';
import * as makeAuthorizedRequest from './make-authorized-request';
import { REGION_URL } from '../config';
import { IDbRegion } from '@chrisb-dev/seasonal-shared-models';

describe('updateRegion', () => {
  const response = {} as IDbRegion;
  const item = {
    id: 'id'
  } as IDbRegion;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IDbRegion;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await updateRegion(item);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      REGION_URL,
      {
        body: JSON.stringify(item),
        method: 'PATCH'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
