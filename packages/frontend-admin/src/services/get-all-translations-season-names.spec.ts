import { getAllTranslationsSeasonNames } from './get-all-translations-season-names';
import * as makeAuthorizedRequest from './make-authorized-request';
import { TRANSLATIONS_SEASON_NAME_URL } from '../config';
import { ITranslationsRegionName } from '@chrisb-dev/seasonal-shared-models';

describe('getAllTranslationsSeasonNames', () => {
  const response = [{}] as ITranslationsRegionName[];
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ITranslationsRegionName[];
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await getAllTranslationsSeasonNames();
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      TRANSLATIONS_SEASON_NAME_URL
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
