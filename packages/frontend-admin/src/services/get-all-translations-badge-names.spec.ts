import { getAllTranslationsBadgeNames } from './get-all-translations-badge-names';
import * as makeAuthorizedRequest from './make-authorized-request';
import { TRANSLATIONS_BADGE_NAME_URL } from '../config';
import { ITranslationsBadgeName } from '@chrisb-dev/seasonal-shared-models';

describe('getAllTranslationsBadgeNames', () => {
  const response = [{}] as ITranslationsBadgeName[];
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ITranslationsBadgeName[];
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await getAllTranslationsBadgeNames();
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      TRANSLATIONS_BADGE_NAME_URL
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
