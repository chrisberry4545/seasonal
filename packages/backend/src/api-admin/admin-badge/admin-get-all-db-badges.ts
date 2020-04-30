import { IBadge } from '@chrisb-dev/seasonal-shared-models';
import { adminGetDbBadges } from './admin-get-db-badges';

export const adminGetAllDbBadges = async (): Promise<IBadge[]> =>
  adminGetDbBadges(null);
