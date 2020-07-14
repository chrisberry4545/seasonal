import { createTranslationsBadgeName } from './create-translations-badge-name';
import * as makeAuthorizedRequest from './make-authorized-request';
import { TRANSLATIONS_BADGE_NAME_URL } from '../config';
import { ITranslationsBadgeName } from '@chrisb-dev/seasonal-shared-models';

describe('createTranslationsBadgeName', () => {
  const response = {} as ITranslationsBadgeName;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ITranslationsBadgeName;
  const item = {
    id: 'id'
  } as ITranslationsBadgeName;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await createTranslationsBadgeName(item);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      TRANSLATIONS_BADGE_NAME_URL,
      {
        body: JSON.stringify(item),
        method: 'POST'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
