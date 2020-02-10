import { IFood } from '@chrisb-dev/seasonal-shared';
import { generateRestEndpointTests } from './test-utils/generate-rest-endpoint-tests';

generateRestEndpointTests<IFood>({
  path: '/admin/food',
  singleItemId: 'dd9ba012-8f8e-48af-9775-0139374dd94c',
  validItem: {
    description: 'This is food 1',
    imageUrlSmall: 'https://food-1-image.com',
    name: 'Food 1',
    substituteFoodIds: null
  } as IFood,
  validItemForEdit: {
    description: 'This is food 2',
    imageUrlSmall: 'https://food-2-image.com',
    name: 'Food 2',
    substituteFoodIds: null
  } as IFood
});
