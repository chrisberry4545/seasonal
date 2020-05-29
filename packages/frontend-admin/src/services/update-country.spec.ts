import { updateCountry } from './update-country';
import * as makeAuthorizedRequest from './make-authorized-request';
import { COUNTRY_URL } from '../config';
import { ICountry } from '@chrisb-dev/seasonal-shared-models';

describe('updateCountry', () => {
  const response = {} as ICountry;
  const item = {
    id: 'id'
  } as ICountry;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ICountry;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await updateCountry(item);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      COUNTRY_URL,
      {
        body: JSON.stringify(item),
        method: 'PATCH'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
