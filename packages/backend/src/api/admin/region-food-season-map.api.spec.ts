import { IRegionFoodSeasonMap } from '@chrisb-dev/seasonal-shared-models';
import { generateRestEndpointTests } from './test-utils/generate-rest-endpoint-tests';

generateRestEndpointTests<IRegionFoodSeasonMap>({
  path: '/admin/region-food-season-map',
  singleItemId: '22be80d3-5154-43e7-a750-f0d03e4ca91a',
  validItem: {
    foodId: 'dd9ba012-8f8e-48af-9775-0139374dd94c',
    regionId: 'gbr',
    seasonId: 'eec0b2bb-4fbd-46df-b905-8d2ee2fb991a'
  } as IRegionFoodSeasonMap,
  validItemForEdit: {
    foodId: 'd1df368e-6ed1-4a50-bb7d-6163c15df1d3',
    regionId: 'usa-1',
    seasonId: '41bcbb3a-5599-4f0c-8da9-3144cc5be6de'
  } as IRegionFoodSeasonMap
});
