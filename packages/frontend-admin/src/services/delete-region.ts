import { IRegion } from '@chrisb-dev/seasonal-shared';
import { REGION_URL } from '../config';
import { makeAuthorizedRequest } from './make-authorized-request';

export const deleteRegion = async (id: string): Promise<IRegion> =>
  makeAuthorizedRequest<IRegion>(`${REGION_URL}/${id}`, {
    method: 'DELETE'
  });
