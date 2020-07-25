import { getOneTranslationsSeasonName } from './get-one-translations-season-name';
import * as makeAuthorizedRequest from './make-authorized-request';
import { TRANSLATIONS_SEASON_NAME_URL } from '../config';
import { ITranslationsSeasonName } from '@chrisb-dev/seasonal-shared-models';

describe('getOneTranslationsSeasonName', () => {
  const response = {} as ITranslationsSeasonName;
  const id = 'id';
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ITranslationsSeasonName;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await getOneTranslationsSeasonName(id);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      `${TRANSLATIONS_SEASON_NAME_URL}/${id}`
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
