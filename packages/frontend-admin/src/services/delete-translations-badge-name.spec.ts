import { deleteTranslationsBadgeName } from './delete-translations-badge-name';
import * as makeAuthorizedRequest from './make-authorized-request';
import { TRANSLATIONS_BADGE_NAME_URL } from '../config';
import { ITranslationsBadgeName } from '@chrisb-dev/seasonal-shared-models';

describe('deleteTranslationsBadgeName', () => {
  const response = {} as ITranslationsBadgeName;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ITranslationsBadgeName;
  const id = 'id';
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await deleteTranslationsBadgeName(id);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      `${TRANSLATIONS_BADGE_NAME_URL}/${id}`,
      {
        method: 'DELETE'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
