import { deleteCountry } from './delete-country';
import * as makeAuthorizedRequest from './make-authorized-request';
import { COUNTRY_URL } from '../config';
import { ICountry } from '@chrisb-dev/seasonal-shared-models';

describe('deleteCountry', () => {
  const response = {} as ICountry;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ICountry;
  const id = 'id';
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await deleteCountry(id);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      `${COUNTRY_URL}/${id}`,
      {
        method: 'DELETE'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
