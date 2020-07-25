import { updateTranslationsBadgeName } from './update-translations-badge-name';
import * as makeAuthorizedRequest from './make-authorized-request';
import { TRANSLATIONS_BADGE_NAME_URL } from '../config';
import { ITranslationsBadgeName } from '@chrisb-dev/seasonal-shared-models';

describe('updateTranslationsBadgeName', () => {
  const response = {} as ITranslationsBadgeName;
  const item = {
    id: 'id'
  } as ITranslationsBadgeName;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ITranslationsBadgeName;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await updateTranslationsBadgeName(item);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      TRANSLATIONS_BADGE_NAME_URL,
      {
        body: JSON.stringify(item),
        method: 'PATCH'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
