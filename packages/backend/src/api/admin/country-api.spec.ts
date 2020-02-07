import { ICountry } from '@chrisb-dev/seasonal-shared';
import { generateRestEndpointTests } from './test-utils/generate-rest-endpoint-tests';

generateRestEndpointTests<ICountry>({
  path: '/admin/country',
  validItem: {
    name: 'test-1'
  } as ICountry,
  validItemForEdit: {
    name: 'test-2'
  } as ICountry
});
