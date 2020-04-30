import { IDbRegion } from '@chrisb-dev/seasonal-shared-models';
import { adminGetDbRegions } from './admin-get-db-regions';

export const adminGetAllDbRegions = async (): Promise<IDbRegion[]> =>
  adminGetDbRegions(null);
