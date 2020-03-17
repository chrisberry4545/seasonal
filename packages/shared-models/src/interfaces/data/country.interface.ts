import { IRegion } from './region.interface';

export interface ICountry {
  id: string;
  name: string;
  regions: IRegion[];
}
