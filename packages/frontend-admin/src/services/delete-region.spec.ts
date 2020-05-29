import { deleteRegion } from './delete-region';
import * as makeAuthorizedRequest from './make-authorized-request';
import { REGION_URL } from '../config';
import { IDbRegion } from '@chrisb-dev/seasonal-shared-models';

describe('deleteRegion', () => {
  const response = {} as IDbRegion;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IDbRegion;
  const id = 'id';
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await deleteRegion(id);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      `${REGION_URL}/${id}`,
      {
        method: 'DELETE'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
