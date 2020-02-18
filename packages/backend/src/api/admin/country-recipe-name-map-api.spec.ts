import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared';
import { generateRestEndpointTests } from './test-utils/generate-rest-endpoint-tests';

generateRestEndpointTests<ICountryRecipeNameMap>({
  path: '/admin/country-recipe-name-map',
  singleItemId: '8651458c-3827-4172-b668-b43657f23f73',
  validItem: {
    country: {
      id: 'country-id'
    },
    name: 'test-1',
    recipe: {
      id: 'food-id'
    }
  } as ICountryRecipeNameMap,
  validItemForEdit: {
    country: {
      id: 'country-id-2'
    },
    name: 'test-2',
    recipe: {
      id: 'food-id-2'
    }
  } as ICountryRecipeNameMap
});
