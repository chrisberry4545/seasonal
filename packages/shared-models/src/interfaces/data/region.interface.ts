import { ILatLng } from './lat-lng.interface';
import { IDbBaseRecord } from './db-base-record.interface';

export interface IRegion extends IDbBaseRecord {
  code: string;
  name: string;
  latLng: ILatLng;
  countryId?: string;
  isDisabled?: boolean;
}
