import { getAllTranslationsCountryNames } from './get-all-translations-country-names';
import * as makeAuthorizedRequest from './make-authorized-request';
import { TRANSLATIONS_COUNTRY_NAME_URL } from '../config';
import { ITranslationsCountryName } from '@chrisb-dev/seasonal-shared-models';

describe('getAllTranslationsCountryNames', () => {
  const response = [{}] as ITranslationsCountryName[];
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ITranslationsCountryName[];
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await getAllTranslationsCountryNames();
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      TRANSLATIONS_COUNTRY_NAME_URL
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
