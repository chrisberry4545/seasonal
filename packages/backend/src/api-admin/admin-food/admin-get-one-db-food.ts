import { IFood } from '@chrisb-dev/seasonal-shared-models';
import { adminGetDbFood } from './admin-get-db-food';

export const adminGetOneDbFood = async (
  id: string
): Promise<IFood> => {
  const result = await adminGetDbFood(id);
  return result && result[0];
};
