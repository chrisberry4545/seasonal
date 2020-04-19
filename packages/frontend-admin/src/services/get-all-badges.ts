import { IBadge } from '@chrisb-dev/seasonal-shared-models';
import { BADGE_URL } from '../config';
import { makeAuthorizedRequest } from './make-authorized-request';

export const getAllBadges = async (): Promise<IBadge[]> =>
  makeAuthorizedRequest<IBadge[]>(BADGE_URL);
