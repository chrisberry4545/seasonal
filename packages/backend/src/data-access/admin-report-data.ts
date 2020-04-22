import { getSqlQuery, queryPostgres } from '../postgres';
import { IFood } from '@chrisb-dev/seasonal-shared-models';

export const adminReportGetFoodWithNoRecipes = async (): Promise<IFood[]> => {
  const query = await getSqlQuery('report-food-with-no-recipes.sql');
  const result = await queryPostgres<IFood>(
    query
  );
  return result.rows;
};
