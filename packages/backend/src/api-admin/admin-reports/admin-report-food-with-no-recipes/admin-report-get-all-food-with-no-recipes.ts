import { getSqlQuery, queryPostgres } from '../../../postgres';
import { IFood } from '@chrisb-dev/seasonal-shared-models';

export const adminReportGetAllFoodWithNoRecipes = async (): Promise<IFood[]> => {
  const query = await getSqlQuery(`${__dirname}/admin-report-food-with-no-recipes.sql`);
  const result = await queryPostgres<IFood>(
    query
  );
  return result.rows;
};
