import { IRegion } from '@chrisb-dev/seasonal-shared';
import { makeAuthorizedRequest } from './make-authorized-request';
import { REGION_URL } from '../config';

export const updateRegion = async (region: IRegion): Promise<IRegion> =>
  makeAuthorizedRequest<IRegion>(REGION_URL, {
    body: JSON.stringify(region),
    method: 'PATCH'
  });
