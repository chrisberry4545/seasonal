import { deleteTranslationsRegionName } from './delete-translations-region-name';
import * as makeAuthorizedRequest from './make-authorized-request';
import { TRANSLATIONS_REGION_NAME_URL } from '../config';
import { ITranslationsRegionName } from '@chrisb-dev/seasonal-shared-models';

describe('deleteTranslationsRegionName', () => {
  const response = {} as ITranslationsRegionName;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ITranslationsRegionName;
  const id = 'id';
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await deleteTranslationsRegionName(id);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      `${TRANSLATIONS_REGION_NAME_URL}/${id}`,
      {
        method: 'DELETE'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
