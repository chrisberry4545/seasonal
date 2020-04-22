import {
  adminReportGetFoodWithNoRecipes
} from '../../../data-access';

import { generateRestApi } from '../generate-rest-api';

export const foodWithNoRecipes = () => generateRestApi({
  getAll: adminReportGetFoodWithNoRecipes
});
