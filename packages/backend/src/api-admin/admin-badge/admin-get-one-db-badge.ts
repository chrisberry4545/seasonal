import { IBadge } from '@chrisb-dev/seasonal-shared-models';
import { adminGetDbBadges } from './admin-get-db-badges';

export const adminGetOneDbBadge = async (
  id: string
): Promise<IBadge> => {
  const results = await adminGetDbBadges(id);
  return results && results[0];
};
