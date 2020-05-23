import { IDbRegion } from '@chrisb-dev/seasonal-shared-models';
import { adminGetDbRegions } from './admin-get-db-regions';

export const adminGetOneDbRegion = async (
  id: string
): Promise<IDbRegion | undefined> => {
  const result = await adminGetDbRegions(id);
  return result && result[0];
};
