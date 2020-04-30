import { IFood } from '@chrisb-dev/seasonal-shared-models';
import { generateRestEndpointTests } from '../../api-utils/test-utils/generate-rest-endpoint-tests';
import { ENDPOINT_ADMIN_FOOD } from '../../config';

generateRestEndpointTests<IFood>({
  path: `/${ENDPOINT_ADMIN_FOOD}`,
  singleItemId: 'dd9ba012-8f8e-48af-9775-0139374dd94c',
  validItem: {
    badgeIds: null,
    description: 'This is food 1',
    imageUrlSmall: 'https://food-1-image.com',
    name: 'Food 1',
    substituteFoodIds: null
  } as IFood,
  validItemForEdit: {
    badgeIds: null,
    description: 'This is food 2',
    imageUrlSmall: 'https://food-2-image.com',
    name: 'Food 2',
    substituteFoodIds: null
  } as IFood
});
