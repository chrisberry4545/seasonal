import {
  IDbBaseRecord
} from './db-base-record.interface';

export interface IBaseSeason extends IDbBaseRecord {
  name: string;
  seasonIndex: number;
}
