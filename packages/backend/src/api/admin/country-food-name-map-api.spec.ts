import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared-models';
import { generateRestEndpointTests } from './test-utils/generate-rest-endpoint-tests';

generateRestEndpointTests<ICountryFoodNameMap>({
  path: '/admin/country-food-name-map',
  singleItemId: 'dcec5b2c-403b-43ae-8745-ef368987552c',
  validItem: {
    countryId: '1fc52423-eb83-4cd9-9fdd-b6f9cb323c37',
    foodId: 'c6f78568-fe23-47e4-8e65-55934199a39f',
    name: 'c6f78568-fe23-47e4-8e65-55934199a39f'
  } as ICountryFoodNameMap,
  validItemForEdit: {
    countryId: 'd6e57673-eee8-444a-b7be-d9ab553052cf',
    foodId: 'c6f78568-fe23-47e4-8e65-55934199a39f',
    name: 'c6f78568-fe23-47e4-8e65-55934199a39f'
  } as ICountryFoodNameMap
});
