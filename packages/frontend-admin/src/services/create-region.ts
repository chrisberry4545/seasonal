import { IDbRegion } from '@chrisb-dev/seasonal-shared';
import { makeAuthorizedRequest } from './make-authorized-request';
import { REGION_URL } from '../config';

export const createRegion = async (region: IDbRegion): Promise<IDbRegion> =>
  makeAuthorizedRequest<IDbRegion>(REGION_URL, {
    body: JSON.stringify(region),
    method: 'POST'
  });
