import { IRecipe } from '@chrisb-dev/seasonal-shared';
import { generateRestEndpointTests } from './test-utils/generate-rest-endpoint-tests';

generateRestEndpointTests<IRecipe>({
  path: '/admin/recipe',
  singleItemId: 'fefc209f-ddaf-465d-941f-fe3fefa6b931',
  validItem: {
    imageUrlSmall: 'http://image.com',
    isVegan: true,
    isVegetarian: false,
    linkUrl: 'http://new.com',
    name: 'new-recipe',
    primaryFoodInRecipeIds: ['c6f78568-fe23-47e4-8e65-55934199a39f'],
    secondaryFoodInRecipeIds: ['dd9ba012-8f8e-48af-9775-0139374dd94c']
  } as IRecipe,
  validItemForEdit: {
    imageUrlSmall: 'http://image-edited.com',
    isVegan: false,
    isVegetarian: true,
    linkUrl: 'http://new-thing.com',
    name: 'new-recipe-edited',
    primaryFoodInRecipeIds: [
      'c6f78568-fe23-47e4-8e65-55934199a39f',
      'dd9ba012-8f8e-48af-9775-0139374dd94c'
    ],
    secondaryFoodInRecipeIds: [
      'dd9ba012-8f8e-48af-9775-0139374dd94c',
      'c6f78568-fe23-47e4-8e65-55934199a39f'
    ]
  } as IRecipe
});
