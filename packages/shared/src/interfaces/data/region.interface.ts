import { ILatLng } from './lat-lng.interface';

export interface IRegion {
  name: string;
  code: string;
  latLng: ILatLng;
  countryId?: string;
  isDisabled?: boolean;
}
