import { ICountryRecipeNameMap, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { generateRestEndpointTests } from '../../api-utils/test-utils/generate-rest-endpoint-tests';
import { ENDPOINT_ADMIN_COUNTRY_RECIPE_NAME_MAP } from '../../config';

generateRestEndpointTests<ICountryRecipeNameMap>({
  path: `/${ENDPOINT_ADMIN_COUNTRY_RECIPE_NAME_MAP}`,
  singleItemId: '8651458c-3827-4172-b668-b43657f23f73',
  validItem: {
    countryId: '1fc52423-eb83-4cd9-9fdd-b6f9cb323c37',
    name: 'test-1',
    recipeId: '0f7fb18e-ac1d-4023-b315-91ca7e29ce4a'
  } as ICountryRecipeNameMap,
  validItemForEdit: {
    countryId: 'd6e57673-eee8-444a-b7be-d9ab553052cf',
    languages: [LANGUAGES.EN_GB],
    name: 'test-2',
    recipeId: '0f7fb18e-ac1d-4023-b315-91ca7e29ce4a'
  } as ICountryRecipeNameMap
});
