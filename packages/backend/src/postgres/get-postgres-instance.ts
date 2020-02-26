import { PoolClient } from 'pg';
import { pool } from './postgres-pool';
import { types } from 'pg';

// Handles numeric types coming back as strings
types.setTypeParser(1700, (val: string) => parseFloat(val));

export const getPostgresInstance = async (): Promise<PoolClient> =>
  pool.connect();
