import { IDbRegion } from '@chrisb-dev/seasonal-shared-models';
import { REGION_URL } from '../config';
import { makeAuthorizedRequest } from './make-authorized-request';

export const getAllRegions = async (): Promise<IDbRegion[]> =>
  makeAuthorizedRequest<IDbRegion[]>(REGION_URL);
