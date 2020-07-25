import { updateTranslationsRegionName } from './update-translations-region-name';
import * as makeAuthorizedRequest from './make-authorized-request';
import { TRANSLATIONS_REGION_NAME_URL } from '../config';
import { ITranslationsRegionName } from '@chrisb-dev/seasonal-shared-models';

describe('updateTranslationsRegionName', () => {
  const response = {} as ITranslationsRegionName;
  const item = {
    id: 'id'
  } as ITranslationsRegionName;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ITranslationsRegionName;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await updateTranslationsRegionName(item);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      TRANSLATIONS_REGION_NAME_URL,
      {
        body: JSON.stringify(item),
        method: 'PATCH'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
