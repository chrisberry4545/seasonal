import {
  IDbBaseRecord
} from './db-base-record.interface';

export interface IRegionFoodSeasonMap extends IDbBaseRecord {
  regionId: string;
  foodId: string;
  seasonId: string;
}
