import { getPostgresInstance } from './get-postgres-instance';
import { Pool } from 'pg';
import * as postgresPool from './postgres-pool';

describe('getPostgresInstance', () => {
  test('calls connect on pool', async () => {
    const mockPool = {
      connect: jest.fn().mockResolvedValue(null) as any,
      end: jest.fn().mockResolvedValue(null) as any
    } as Pool;
    (postgresPool.pool as any) = mockPool;
    await getPostgresInstance();
    expect(mockPool.connect).toHaveBeenCalled();
  });
});
