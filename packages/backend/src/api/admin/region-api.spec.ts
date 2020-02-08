import { IRegion } from '@chrisb-dev/seasonal-shared';
import { generateRestEndpointTests } from './test-utils/generate-rest-endpoint-tests';

generateRestEndpointTests<IRegion>({
  path: '/admin/region',
  singleItemId: 'aus-sydney',
  validItem: {
    code: 'test-region',
    countryId: 'd6e57673-eee8-444a-b7be-d9ab553052cf',
    isDisabled: false,
    latLng: {
      lat: 10,
      lng: 15
    },
    name: 'Test region'
  } as IRegion,
  validItemForEdit: {
    code: 'test-region',
    countryId: 'd6e57673-eee8-444a-b7be-d9ab553052cf',
    isDisabled: true,
    latLng: {
      lat: 15,
      lng: -5
    },
    name: 'Test region 2'
  } as IRegion
});
