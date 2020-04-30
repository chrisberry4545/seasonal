import {
  adminReportGetAllFoodWithNoRecipes
} from './admin-report-get-all-food-with-no-recipes';
import { generateRestApi } from '../../../api-utils/generate-rest-api';

export const apiAdminReportFoodWithNoRecipes = () => generateRestApi({
  getAll: adminReportGetAllFoodWithNoRecipes
});
