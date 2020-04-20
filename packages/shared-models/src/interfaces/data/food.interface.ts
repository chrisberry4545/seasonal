import {
  IDbBaseRecord
} from './db-base-record.interface';

export interface IFood extends IDbBaseRecord {
  name: string;
  imageUrlSmall: string;
  description?: string;
  substituteFoodIds?: string[] | null;
  badgeIds?: string[] | null;
}
