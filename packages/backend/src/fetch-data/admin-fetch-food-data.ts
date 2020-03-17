import { IFood } from '@chrisb-dev/seasonal-shared-models';
import {
  adminGetAllDbFood,
  adminGetOneDbFood,
  adminCreateDbFood,
  adminDeleteDbFood,
  adminEditDbFood
} from '../data-access';

export const adminCreateFood = (
  item: IFood
): Promise<IFood> => adminCreateDbFood(item);

export const adminGetAllFood = (): Promise<IFood[]> =>
  adminGetAllDbFood();

export const adminGetOneFood = (
  id: string
): Promise<IFood | null> => adminGetOneDbFood(id);

export const adminEditFood = (
  item: IFood
): Promise<IFood> => adminEditDbFood(item);

export const adminDeleteFood = (
  id: string
): Promise<IFood> => adminDeleteDbFood(id);
