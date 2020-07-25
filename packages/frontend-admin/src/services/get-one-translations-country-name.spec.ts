import { getOneTranslationsCountryName } from './get-one-translations-country-name';
import * as makeAuthorizedRequest from './make-authorized-request';
import { TRANSLATIONS_COUNTRY_NAME_URL } from '../config';
import { ITranslationsCountryName } from '@chrisb-dev/seasonal-shared-models';

describe('getOneTranslationsCountryName', () => {
  const response = {} as ITranslationsCountryName;
  const id = 'id';
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ITranslationsCountryName;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await getOneTranslationsCountryName(id);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      `${TRANSLATIONS_COUNTRY_NAME_URL}/${id}`
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
