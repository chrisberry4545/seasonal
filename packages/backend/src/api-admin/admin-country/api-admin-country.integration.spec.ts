import { ICountry } from '@chrisb-dev/seasonal-shared-models';
import { generateRestEndpointTests } from '../../api-utils/test-utils/generate-rest-endpoint-tests';
import { ENDPOINT_ADMIN_COUNTRY } from '../../config';

generateRestEndpointTests<ICountry>({
  path: `/${ENDPOINT_ADMIN_COUNTRY}`,
  singleItemId: 'd6e57673-eee8-444a-b7be-d9ab553052cf',
  validItem: {
    name: 'test-1'
  } as ICountry,
  validItemForEdit: {
    name: 'test-2'
  } as ICountry
});
