import {
  adminCreateDbBadge,
  adminGetAllDbBadges,
  adminGetOneDbBadge,
  adminEditDbBadge,
  adminDeleteDbBadge
} from '../data-access';

import { IBadge } from '@chrisb-dev/seasonal-shared-models';

export const adminCreateBadge = (
  item: IBadge
): Promise<IBadge> => adminCreateDbBadge(item);

export const adminGetAllBadges = (): Promise<IBadge[]> =>
  adminGetAllDbBadges();

export const adminGetOneBadge = (
  id: string
): Promise<IBadge | null> => adminGetOneDbBadge(id);

export const adminEditBadge = (
  item: IBadge
): Promise<IBadge> => adminEditDbBadge(item);

export const adminDeleteBadge = (
  id: string
): Promise<IBadge> => adminDeleteDbBadge(id);
