import { getOneTranslationsBadgeName } from './get-one-translations-badge-name';
import * as makeAuthorizedRequest from './make-authorized-request';
import { TRANSLATIONS_BADGE_NAME_URL } from '../config';
import { ITranslationsBadgeName } from '@chrisb-dev/seasonal-shared-models';

describe('getOneTranslationsBadgeName', () => {
  const response = {} as ITranslationsBadgeName;
  const id = 'id';
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ITranslationsBadgeName;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await getOneTranslationsBadgeName(id);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      `${TRANSLATIONS_BADGE_NAME_URL}/${id}`
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
