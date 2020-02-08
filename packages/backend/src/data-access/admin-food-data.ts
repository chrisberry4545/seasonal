import { queryPostgres, getSqlQuery } from '../postgres';
import { IFood } from '@chrisb-dev/seasonal-shared';

export const adminCreateDbFood = async (
  item: IFood
): Promise<IFood> => {
  const query = await getSqlQuery('admin-create-food.sql');
  const result = await queryPostgres<IFood>(
    query,
    [
      item.name,
      item.description,
      item.imageUrlSmall,
      item.substituteFoodIds
    ]
  );
  return result.rows && result.rows[0];
};

const getFoodQuery = (): Promise<string> =>
  getSqlQuery('admin-get-food.sql');

export const adminGetAllDbFood = async (): Promise<IFood[]> => {
  const query = await getFoodQuery();
  const result = await queryPostgres<IFood>(
    query,
    [null]
  );
  return result.rows;
};

export const adminGetOneDbFood = async (
  id: string
): Promise<IFood> => {
  const query = await getFoodQuery();
  const result = await queryPostgres<IFood>(
    query,
    [id]
  );
  return result.rows && result.rows[0];
};

export const adminEditDbFood = async (
  item: IFood
): Promise<IFood> => {
  const query = await getSqlQuery('admin-edit-food.sql');
  const result = await queryPostgres<IFood>(
    query,
    [
      item.id,
      item.name,
      item.description,
      item.imageUrlSmall,
      item.substituteFoodIds
    ]
  );
  return result.rows && result.rows[0];
};

export const adminDeleteDbFood = async (
  id: string
): Promise<IFood> => {
  const query = await getSqlQuery('admin-delete-food.sql');
  const result = await queryPostgres<IFood>(
    query,
    [id]
  );
  return result.rows && result.rows[0];
};
