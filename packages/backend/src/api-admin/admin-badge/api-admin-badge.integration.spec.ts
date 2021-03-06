import { IBadge } from '@chrisb-dev/seasonal-shared-models';
import { generateRestEndpointTests } from '../../api-utils/test-utils/generate-rest-endpoint-tests';
import { ENDPOINT_ADMIN_BADGE } from '../../config';

generateRestEndpointTests<IBadge>({
  path: `/${ENDPOINT_ADMIN_BADGE}`,
  singleItemId: 'a2c52423-eb83-4cd9-9fdd-b6f9cb323c37',
  validItem: {
    name: 'test-1'
  } as IBadge,
  validItemForEdit: {
    name: 'test-2'
  } as IBadge
});
