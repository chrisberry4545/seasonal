import { IDbRegion } from '@chrisb-dev/seasonal-shared-models';
import { generateRestEndpointTests } from './test-utils/generate-rest-endpoint-tests';

generateRestEndpointTests<IDbRegion>({
  path: '/admin/region',
  singleItemId: 'usa-1',
  validItem: {
    code: 'test-region',
    countryId: 'd6e57673-eee8-444a-b7be-d9ab553052cf',
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
