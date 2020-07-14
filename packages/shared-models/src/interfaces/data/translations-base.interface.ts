import { IDbBaseRecord } from './db-base-record.interface';

export interface ITranslationsBase extends IDbBaseRecord {
  name: string;
  languages: string[];
}
