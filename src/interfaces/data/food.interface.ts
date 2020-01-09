import {
  IAirtableBaseRecord
} from '../airtable';

export interface IFood extends IAirtableBaseRecord {
  name: string;
  imageUrlSmall: string;
  description?: string;
}
