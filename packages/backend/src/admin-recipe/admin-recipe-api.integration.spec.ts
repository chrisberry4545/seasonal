import { IRecipe } from '@chrisb-dev/seasonal-shared-models';
import { generateRestEndpointTests } from '../api/admin/test-utils/generate-rest-endpoint-tests';
import { ENDPOINT_ADMIN_RECIPE } from '../config';

generateRestEndpointTests<IRecipe>({
  path: `/${ENDPOINT_ADMIN_RECIPE}`,
  singleItemId: 'fefc209f-ddaf-465d-941f-fe3fefa6b931',
  validItem: {
    imageUrlSmall: 'http://image.com',
    isVegan: true,
    isVegetarian: false,
    linkUrl: 'http://new.com',
    name: 'new-recipe',
    primaryFoodInRecipeIds: ['f6a680ee-6d6e-4c42-a99d-15e575c32c20'],
    secondaryFoodInRecipeIds: ['dd9ba012-8f8e-48af-9775-0139374dd94c']
  } as IRecipe,
  validItemForEdit: {
    imageUrlSmall: 'http://image-edited.com',
    isVegan: false,
    isVegetarian: true,
    linkUrl: 'http://new-thing.com',
    name: 'new-recipe-edited',
    primaryFoodInRecipeIds: [
      'f6a680ee-6d6e-4c42-a99d-15e575c32c20',
      'dd9ba012-8f8e-48af-9775-0139374dd94c'
    ],
    secondaryFoodInRecipeIds: [
      'dd9ba012-8f8e-48af-9775-0139374dd94c',
      'f6a680ee-6d6e-4c42-a99d-15e575c32c20'
    ]
  } as IRecipe
});
