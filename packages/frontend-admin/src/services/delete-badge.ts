import { IBadge } from '@chrisb-dev/seasonal-shared-models';
import { BADGE_URL } from '../config';
import { makeAuthorizedRequest } from './make-authorized-request';

export const deleteBadge = async (id: string): Promise<IBadge> =>
  makeAuthorizedRequest<IBadge>(`${BADGE_URL}/${id}`, {
    method: 'DELETE'
  });
