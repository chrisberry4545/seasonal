import { ICountry } from '@chrisb-dev/seasonal-shared';
import { generateRestEndpointTests } from './test-utils/generate-rest-endpoint-tests';

generateRestEndpointTests<ICountry>({
  path: '/admin/country',
  singleItemId: 'd6e57673-eee8-444a-b7be-d9ab553052cf',
  validItem: {
    name: 'test-1'
  } as ICountry,
  validItemForEdit: {
    name: 'test-2'
  } as ICountry
});
