import { IRegion } from '@chrisb-dev/seasonal-shared';
import { REGION_URL } from '../config';
import { makeAuthorizedRequest } from './make-authorized-request';

export const getAllRegions = async (): Promise<IRegion[]> =>
  makeAuthorizedRequest<IRegion[]>(REGION_URL);
