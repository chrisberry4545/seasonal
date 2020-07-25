import { createTranslationsCountryName } from './create-translations-country-name';
import * as makeAuthorizedRequest from './make-authorized-request';
import { TRANSLATIONS_COUNTRY_NAME_URL } from '../config';
import { ITranslationsCountryName } from '@chrisb-dev/seasonal-shared-models';

describe('createTranslationsCountryName', () => {
  const response = {} as ITranslationsCountryName;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ITranslationsCountryName;
  const item = {
    id: 'id'
  } as ITranslationsCountryName;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await createTranslationsCountryName(item);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      TRANSLATIONS_COUNTRY_NAME_URL,
      {
        body: JSON.stringify(item),
        method: 'POST'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
