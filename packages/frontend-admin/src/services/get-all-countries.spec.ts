import { getAllCountries } from './get-all-countries';
import * as makeAuthorizedRequest from './make-authorized-request';
import { COUNTRY_URL } from '../config';
import { ICountry } from '@chrisb-dev/seasonal-shared-models';

describe('getAllCountries', () => {
  const response = [{}] as ICountry[];
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ICountry[];
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await getAllCountries();
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      COUNTRY_URL
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
