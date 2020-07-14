import { updateTranslationsCountryName } from './update-translations-country-name';
import * as makeAuthorizedRequest from './make-authorized-request';
import { TRANSLATIONS_COUNTRY_NAME_URL } from '../config';
import { ITranslationsCountryName } from '@chrisb-dev/seasonal-shared-models';

describe('updateTranslationsCountryName', () => {
  const response = {} as ITranslationsCountryName;
  const item = {
    id: 'id'
  } as ITranslationsCountryName;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ITranslationsCountryName;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await updateTranslationsCountryName(item);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      TRANSLATIONS_COUNTRY_NAME_URL,
      {
        body: JSON.stringify(item),
        method: 'PATCH'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
