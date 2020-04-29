import { getSqlQueryV2, queryPostgres } from '../postgres';
import { IFood } from '@chrisb-dev/seasonal-shared-models';

export const adminReportGetAllFoodWithNoRecipes = async (): Promise<IFood[]> => {
  const query = await getSqlQueryV2(`${__dirname}/admin-report-food-with-no-recipes.sql`);
  const result = await queryPostgres<IFood>(
    query
  );
  return result.rows;
};
