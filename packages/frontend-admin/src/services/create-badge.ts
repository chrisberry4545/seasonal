import { IBadge } from '@chrisb-dev/seasonal-shared-models';
import { makeAuthorizedRequest } from './make-authorized-request';
import { BADGE_URL } from '../config';

export const createBadge = async (badge: IBadge): Promise<IBadge> =>
  makeAuthorizedRequest<IBadge>(BADGE_URL, {
    body: JSON.stringify(badge),
    method: 'POST'
  });
