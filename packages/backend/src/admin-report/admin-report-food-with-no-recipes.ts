import {
  adminReportGetAllFoodWithNoRecipes
} from './admin-report-get-all-food-with-no-recipes';
import { generateRestApi } from '../api/admin/generate-rest-api';

export const adminReportFoodWithNoRecipes = () => generateRestApi({
  getAll: adminReportGetAllFoodWithNoRecipes
});
