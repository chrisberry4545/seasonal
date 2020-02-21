import { IAirtableBaseRecord } from '../airtable';

export interface IRegionFoodSeasonMap extends IAirtableBaseRecord {
  regionId: string;
  foodId: string;
  seasonId: string;
}
