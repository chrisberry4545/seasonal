import { IDbRegion } from '@chrisb-dev/seasonal-shared-models';
import { REGION_URL } from '../config';
import { makeAuthorizedRequest } from './make-authorized-request';

export const getOneRegion = async (id: string): Promise<IDbRegion> =>
  makeAuthorizedRequest<IDbRegion>(`${REGION_URL}/${id}`);
