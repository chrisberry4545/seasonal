import { IFood } from '@chrisb-dev/seasonal-shared-models';
import { adminGetDbFood } from './admin-get-db-food';

export const adminGetAllDbFood = async (): Promise<IFood[]> =>
  adminGetDbFood(null);
