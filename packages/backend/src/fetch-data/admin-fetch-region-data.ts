import { IRegion } from '@chrisb-dev/seasonal-shared';
import {
  adminGetAllDbRegions,
  adminGetOneDbRegion,
  adminCreateDbRegion,
  adminDeleteDbRegion,
  adminEditDbRegion
} from '../data-access';

export const adminCreateRegion = (
  item: IRegion
): Promise<IRegion> => adminCreateDbRegion(item);

export const adminGetAllRegions = (): Promise<IRegion[]> =>
  adminGetAllDbRegions();

export const adminGetOneRegion = (
  id: string
): Promise<IRegion | null> => adminGetOneDbRegion(id);

export const adminEditRegion = (
  item: IRegion
): Promise<IRegion> => adminEditDbRegion(item);

export const adminDeleteRegion = (
  id: string
): Promise<IRegion> => adminDeleteDbRegion(id);
