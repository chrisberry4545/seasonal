import { IRegion } from './region.interface';

export interface ICountry {
  id: string;
  name: string;
  bounds: Array<[number, number]> | null;
  regions: IRegion[];
}
