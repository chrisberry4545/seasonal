import { deleteTranslationsCountryName } from './delete-translations-country-name';
import * as makeAuthorizedRequest from './make-authorized-request';
import { TRANSLATIONS_COUNTRY_NAME_URL } from '../config';
import { ITranslationsCountryName } from '@chrisb-dev/seasonal-shared-models';

describe('deleteTranslationsCountryName', () => {
  const response = {} as ITranslationsCountryName;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ITranslationsCountryName;
  const id = 'id';
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await deleteTranslationsCountryName(id);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      `${TRANSLATIONS_COUNTRY_NAME_URL}/${id}`,
      {
        method: 'DELETE'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
