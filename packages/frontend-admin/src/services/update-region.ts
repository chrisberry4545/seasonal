import { IDbRegion } from '@chrisb-dev/seasonal-shared-models';
import { makeAuthorizedRequest } from './make-authorized-request';
import { REGION_URL } from '../config';

export const updateRegion = async (region: IDbRegion): Promise<IDbRegion> =>
  makeAuthorizedRequest<IDbRegion>(REGION_URL, {
    body: JSON.stringify(region),
    method: 'PATCH'
  });
