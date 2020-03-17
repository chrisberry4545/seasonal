import { IDbRegion } from '@chrisb-dev/seasonal-shared-models';
import {
  adminGetAllDbRegions,
  adminGetOneDbRegion,
  adminCreateDbRegion,
  adminDeleteDbRegion,
  adminEditDbRegion
} from '../data-access';

export const adminCreateRegion = (
  item: IDbRegion
): Promise<IDbRegion> => adminCreateDbRegion(item);

export const adminGetAllRegions = (): Promise<IDbRegion[]> =>
  adminGetAllDbRegions();

export const adminGetOneRegion = (
  id: string
): Promise<IDbRegion | null> => adminGetOneDbRegion(id);

export const adminEditRegion = (
  item: IDbRegion
): Promise<IDbRegion> => adminEditDbRegion(item);

export const adminDeleteRegion = (
  id: string
): Promise<IDbRegion> => adminDeleteDbRegion(id);
