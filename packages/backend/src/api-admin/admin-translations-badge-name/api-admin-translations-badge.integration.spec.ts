import { ITranslationsBadgeName } from '@chrisb-dev/seasonal-shared-models';
import { generateRestEndpointTests } from '../../api-utils/test-utils/generate-rest-endpoint-tests';
import { ENDPOINT_ADMIN_TRANSLATIONS_BADGE_NAME } from '../../config';

generateRestEndpointTests<ITranslationsBadgeName>({
  path: `/${ENDPOINT_ADMIN_TRANSLATIONS_BADGE_NAME}`,
  singleItemId: 'cdfc3518-27d1-44bc-bbab-7b95b039e333',
  validItem: {
    badgeId: 'a2c52423-eb83-4cd9-9fdd-b6f9cb323c37',
    languages: ['en-US'],
    name: 'US Badge Translation'
  } as ITranslationsBadgeName,
  validItemForEdit: {
    badgeId: 'a2c52423-eb83-4cd9-9fdd-b6f9cb323c37',
    languages: ['en-GB'],
    name: 'GB Badge Translation'
  } as ITranslationsBadgeName
});
