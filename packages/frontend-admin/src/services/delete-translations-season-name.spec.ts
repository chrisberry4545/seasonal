import { deleteTranslationsSeasonName } from './delete-translations-season-name';
import * as makeAuthorizedRequest from './make-authorized-request';
import { TRANSLATIONS_SEASON_NAME_URL } from '../config';
import { ITranslationsSeasonName } from '@chrisb-dev/seasonal-shared-models';

describe('deleteTranslationsSeasonName', () => {
  const response = {} as ITranslationsSeasonName;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ITranslationsSeasonName;
  const id = 'id';
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await deleteTranslationsSeasonName(id);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      `${TRANSLATIONS_SEASON_NAME_URL}/${id}`,
      {
        method: 'DELETE'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
