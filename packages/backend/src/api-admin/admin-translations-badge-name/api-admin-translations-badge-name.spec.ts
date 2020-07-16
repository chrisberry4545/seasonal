
import * as generateRestApi from '../../api-utils/generate-rest-api';
import { adminCreateDbTranslationsBadgeName } from './admin-create-db-translations-badge-name';
import { adminDeleteDbTranslationsBadgeName } from './admin-delete-db-translations-badge-name';
import { adminEditDbTranslationsBadgeName } from './admin-edit-db-translations-badge-name';
import { adminGetAllDbTranslationsBadgeNames } from './admin-get-all-db-translations-badge-name';
import { adminGetOneDbTranslationsBadgeName } from './admin-get-one-db-translations-badge-name';
import { apiAdminTranslationsBadgeName } from './api-admin-translations-badge-name';
import { Router } from 'express';

describe('apiAdminTranslationsBadgeName', () => {
  let mockGenerateRestApi: jest.SpyInstance;
  const mockResult = {} as Router;
  let result: Router;

  beforeEach(() => {
    mockGenerateRestApi = jest.spyOn(generateRestApi, 'generateRestApi')
      .mockReturnValue(mockResult);
    result = apiAdminTranslationsBadgeName();
  });

  test('generates the rest api', () =>
    expect(mockGenerateRestApi).toHaveBeenCalledWith({
      create: adminCreateDbTranslationsBadgeName,
      deleteOne: adminDeleteDbTranslationsBadgeName,
      edit: adminEditDbTranslationsBadgeName,
      getAll: adminGetAllDbTranslationsBadgeNames,
      getOne: adminGetOneDbTranslationsBadgeName
    }));

  test('returns the result of generating the api', () => expect(result).toBe(mockResult));

});
