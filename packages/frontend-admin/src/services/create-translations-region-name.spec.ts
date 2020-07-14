import { createTranslationsRegionName } from './create-translations-region-name';
import * as makeAuthorizedRequest from './make-authorized-request';
import { TRANSLATIONS_REGION_NAME_URL } from '../config';
import { ITranslationsRegionName } from '@chrisb-dev/seasonal-shared-models';

describe('createTranslationsRegionName', () => {
  const response = {} as ITranslationsRegionName;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ITranslationsRegionName;
  const item = {
    id: 'id'
  } as ITranslationsRegionName;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await createTranslationsRegionName(item);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      TRANSLATIONS_REGION_NAME_URL,
      {
        body: JSON.stringify(item),
        method: 'POST'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
