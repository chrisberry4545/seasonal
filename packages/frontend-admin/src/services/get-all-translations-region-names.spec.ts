import { getAllTranslationsRegionNames } from './get-all-translations-region-names';
import * as makeAuthorizedRequest from './make-authorized-request';
import { TRANSLATIONS_REGION_NAME_URL } from '../config';
import { ITranslationsRegionName } from '@chrisb-dev/seasonal-shared-models';

describe('getAllTranslationsRegionNames', () => {
  const response = [{}] as ITranslationsRegionName[];
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ITranslationsRegionName[];
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await getAllTranslationsRegionNames();
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      TRANSLATIONS_REGION_NAME_URL
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
