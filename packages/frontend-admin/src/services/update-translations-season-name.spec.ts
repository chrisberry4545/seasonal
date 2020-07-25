import { updateTranslationsSeasonName } from './update-translations-season-name';
import * as makeAuthorizedRequest from './make-authorized-request';
import { TRANSLATIONS_SEASON_NAME_URL } from '../config';
import { ITranslationsSeasonName } from '@chrisb-dev/seasonal-shared-models';

describe('updateTranslationsSeasonName', () => {
  const response = {} as ITranslationsSeasonName;
  const item = {
    id: 'id'
  } as ITranslationsSeasonName;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ITranslationsSeasonName;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await updateTranslationsSeasonName(item);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      TRANSLATIONS_SEASON_NAME_URL,
      {
        body: JSON.stringify(item),
        method: 'PATCH'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
