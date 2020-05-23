import { shutdownPostgresInstance } from './shutdown-postgres-instance';
import { Pool } from 'pg';
import * as postgresPool from './postgres-pool';

describe('shutdownPostgresInstance', () => {
  test('calls end on pool', async () => {
    const mockPool = {
      end: jest.fn().mockResolvedValue(null) as any
    } as Pool;
    (postgresPool.pool as any) = mockPool;
    await shutdownPostgresInstance();
    expect(mockPool.end).toHaveBeenCalled();
  });
});
