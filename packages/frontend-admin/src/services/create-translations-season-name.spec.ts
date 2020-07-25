import { createTranslationsSeasonName } from './create-translations-season-name';
import * as makeAuthorizedRequest from './make-authorized-request';
import { TRANSLATIONS_SEASON_NAME_URL } from '../config';
import { ITranslationsSeasonName } from '@chrisb-dev/seasonal-shared-models';

describe('createTranslationsSeasonName', () => {
  const response = {} as ITranslationsSeasonName;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ITranslationsSeasonName;
  const item = {
    id: 'id'
  } as ITranslationsSeasonName;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await createTranslationsSeasonName(item);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      TRANSLATIONS_SEASON_NAME_URL,
      {
        body: JSON.stringify(item),
        method: 'POST'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
