import { ITranslationsRegionName } from '@chrisb-dev/seasonal-shared-models';
import { generateRestEndpointTests } from '../../api-utils/test-utils/generate-rest-endpoint-tests';
import { ENDPOINT_ADMIN_TRANSLATIONS_REGION_NAME } from '../../config';

generateRestEndpointTests<ITranslationsRegionName>({
  path: `/${ENDPOINT_ADMIN_TRANSLATIONS_REGION_NAME}`,
  singleItemId: 'd15f8cd3-302b-4c95-8b32-757ebf412463',
  validItem: {
    languages: ['en-US'],
    name: 'US Region Translation',
    regionId: 'gbr'
  } as ITranslationsRegionName,
  validItemForEdit: {
    languages: ['en-GB'],
    name: 'GB Region Translation',
    regionId: 'gbr'
  } as ITranslationsRegionName
});
