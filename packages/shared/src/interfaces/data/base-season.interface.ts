import {
  IAirtableBaseRecord
} from '../airtable';

export interface IBaseSeason extends IAirtableBaseRecord {
  name: string;
  seasonIndex: number;
}
