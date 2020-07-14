import { getOneTranslationsRegionName } from './get-one-translations-region-name';
import * as makeAuthorizedRequest from './make-authorized-request';
import { TRANSLATIONS_REGION_NAME_URL } from '../config';
import { ITranslationsRegionName } from '@chrisb-dev/seasonal-shared-models';

describe('getOneTranslationsRegionName', () => {
  const response = {} as ITranslationsRegionName;
  const id = 'id';
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ITranslationsRegionName;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await getOneTranslationsRegionName(id);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      `${TRANSLATIONS_REGION_NAME_URL}/${id}`
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
