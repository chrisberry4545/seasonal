import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared';
import { generateRestEndpointTests } from './test-utils/generate-rest-endpoint-tests';

generateRestEndpointTests<ICountryFoodNameMap>({
  path: '/admin/country-food-name-map',
  singleItemId: 'd6e57673-eee8-444a-b7be-d9ab553052cf',
  validItem: {
    country: {
      id: '1fc52423-eb83-4cd9-9fdd-b6f9cb323c37',
      name: 'UK'
    },
    food: {
      id: 'c6f78568-fe23-47e4-8e65-55934199a39f',
      imageUrlSmall: 'https://pickled-beetroot.com/image',
      name: 'Pickled Beetroot'
    },
    name: 'c6f78568-fe23-47e4-8e65-55934199a39f'
  } as ICountryFoodNameMap,
  validItemForEdit: {
    country: {
      id: 'd6e57673-eee8-444a-b7be-d9ab553052cf',
      name: 'Australia'
    },
    food: {
      id: 'c6f78568-fe23-47e4-8e65-55934199a39f',
      imageUrlSmall: 'https://pickled-beetroot.com/image',
      name: 'Pickled Beetroot'
    },
    name: 'c6f78568-fe23-47e4-8e65-55934199a39f'
  } as ICountryFoodNameMap
});
