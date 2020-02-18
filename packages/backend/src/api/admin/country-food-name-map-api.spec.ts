import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared';
import { generateRestEndpointTests } from './test-utils/generate-rest-endpoint-tests';

generateRestEndpointTests<ICountryFoodNameMap>({
  path: '/admin/country-food-name-map',
  singleItemId: 'd6e57673-eee8-444a-b7be-d9ab553052cf',
  validItem: {
    country: {
      id: 'country-id'
    },
    food: {
      id: 'food-id'
    },
    name: 'test-1'
  } as ICountryFoodNameMap,
  validItemForEdit: {
    country: {
      id: 'country-id-2'
    },
    food: {
      id: 'food-id-2'
    },
    name: 'test-2'
  } as ICountryFoodNameMap
});
