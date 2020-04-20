import { IDbBaseRecord } from './db-base-record.interface';

export interface IBadge extends IDbBaseRecord {
  color: string;
  name: string;
}
