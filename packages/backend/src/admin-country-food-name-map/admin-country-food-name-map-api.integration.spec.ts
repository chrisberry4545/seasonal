import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared-models';
import { generateRestEndpointTests } from '../api/admin/test-utils/generate-rest-endpoint-tests';
import { ENDPOINT_ADMIN_COUNTRY_FOOD_NAME_MAP } from '../config';

generateRestEndpointTests<ICountryFoodNameMap>({
  path: `/${ENDPOINT_ADMIN_COUNTRY_FOOD_NAME_MAP}`,
  singleItemId: 'dcec5b2c-403b-43ae-8745-ef368987552c',
  validItem: {
    countryId: '1fc52423-eb83-4cd9-9fdd-b6f9cb323c37',
    foodId: 'f6a680ee-6d6e-4c42-a99d-15e575c32c20',
    name: 'f6a680ee-6d6e-4c42-a99d-15e575c32c20'
  } as ICountryFoodNameMap,
  validItemForEdit: {
    countryId: 'd6e57673-eee8-444a-b7be-d9ab553052cf',
    foodId: 'f6a680ee-6d6e-4c42-a99d-15e575c32c20',
    name: 'f6a680ee-6d6e-4c42-a99d-15e575c32c20'
  } as ICountryFoodNameMap
});
