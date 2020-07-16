import { ITranslationsSeasonName } from '@chrisb-dev/seasonal-shared-models';
import { generateRestEndpointTests } from '../../api-utils/test-utils/generate-rest-endpoint-tests';
import { ENDPOINT_ADMIN_TRANSLATIONS_SEASON_NAME } from '../../config';

generateRestEndpointTests<ITranslationsSeasonName>({
  path: `/${ENDPOINT_ADMIN_TRANSLATIONS_SEASON_NAME}`,
  singleItemId: '620e73ae-da4c-4caa-a726-2e021adbb235',
  validItem: {
    languages: ['en-US'],
    name: 'US Season Translation',
    seasonId: '41bcbb3a-5599-4f0c-8da9-3144cc5be6de'
  } as ITranslationsSeasonName,
  validItemForEdit: {
    languages: ['en-GB'],
    name: 'GB Season Translation',
    seasonId: '41bcbb3a-5599-4f0c-8da9-3144cc5be6de'
  } as ITranslationsSeasonName
});
