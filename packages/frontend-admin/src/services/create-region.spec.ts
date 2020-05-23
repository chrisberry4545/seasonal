import { createRegion } from './create-region';
import * as makeAuthorizedRequest from './make-authorized-request';
import { REGION_URL } from '../config';
import { IDbRegion } from '@chrisb-dev/seasonal-shared-models';

describe('createRegion', () => {
  const response = {} as IDbRegion;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IDbRegion;
  const item = {
    id: 'id'
  } as IDbRegion;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await createRegion(item);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      REGION_URL,
      {
        body: JSON.stringify(item),
        method: 'POST'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
