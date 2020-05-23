import { getSingleCountry } from './get-single-country';
import * as makeAuthorizedRequest from './make-authorized-request';
import { COUNTRY_URL } from '../config';
import { ICountry } from '@chrisb-dev/seasonal-shared-models';

describe('getSingleCountry', () => {
  const response = {} as ICountry;
  const id = 'id';
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ICountry;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await getSingleCountry(id);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      `${COUNTRY_URL}/${id}`
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
