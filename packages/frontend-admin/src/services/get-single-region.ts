import { IDbRegion } from '@chrisb-dev/seasonal-shared';
import { REGION_URL } from '../config';
import { makeAuthorizedRequest } from './make-authorized-request';

export const getSingleRegion = async (id: string): Promise<IDbRegion> =>
  makeAuthorizedRequest<IDbRegion>(`${REGION_URL}/${id}`);
