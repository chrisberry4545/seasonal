import {
  AirtableSort
} from './airtable-sort.interface';

export interface AirtableRequestOptions<T> {
  tableName: string;
  fields: Array<keyof T>;
  fieldsToIncludeInOutput?: Array<keyof T>;
  filterByFormula?: string;
  sort?: AirtableSort<T>[];
}
