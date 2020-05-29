import { getAllRegions } from './get-all-regions';
import * as makeAuthorizedRequest from './make-authorized-request';
import { REGION_URL } from '../config';
import { IDbRegion } from '@chrisb-dev/seasonal-shared-models';

describe('getAllRegions', () => {
  const response = [{}] as IDbRegion[];
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IDbRegion[];
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await getAllRegions();
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      REGION_URL
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
