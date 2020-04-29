import { IDbRegion } from '@chrisb-dev/seasonal-shared-models';
import { generateRestEndpointTests } from '../api/admin/test-utils/generate-rest-endpoint-tests';
import { ENDPOINT_ADMIN_REGION } from '../config';

generateRestEndpointTests<IDbRegion>({
  idsAreUUIDs: false,
  path: `/${ENDPOINT_ADMIN_REGION}`,
  singleItemId: 'usa-1',
  validItem: {
    code: 'test-region',
    countryId: 'd6e57673-eee8-444a-b7be-d9ab553052cf',
    id: 'test-region',
    isDisabled: false,
    lat: 10,
    lng: 15,
    name: 'Test region'
  } as IDbRegion,
  validItemForEdit: {
    code: 'test-region',
    countryId: 'd6e57673-eee8-444a-b7be-d9ab553052cf',
    isDisabled: true,
    lat: 15,
    lng: -5,
    name: 'Test region 2'
  } as IDbRegion
});
