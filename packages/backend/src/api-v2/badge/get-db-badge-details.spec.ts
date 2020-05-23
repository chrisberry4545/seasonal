import {
  getDbBadgeDetails
} from './get-db-badge-details';
import * as postgres from '../../postgres';
import { IHydratedBadge } from '@chrisb-dev/seasonal-shared-models';
import { QueryResult } from 'pg';

describe('getDbBadgeDetails', () => {
  let result: IHydratedBadge | undefined;
  const badgeId = 'id';
  const regionId = 'regionId';

  let mockQueryPostgres: jest.SpyInstance;
  let mockGetSqlQuery: jest.SpyInstance;
  const sqlQueryResult = 'sql-query';

  beforeEach(async () => {
    mockGetSqlQuery = jest.spyOn(postgres, 'getSqlQuery')
      .mockResolvedValue(sqlQueryResult);
  });

  describe('when a badge is found', () => {
    const queryResult = {
      rows: [{}]
    } as QueryResult<IHydratedBadge[]>;

    beforeEach(async () => {
      mockQueryPostgres = jest.spyOn(postgres, 'queryPostgres')
        .mockResolvedValue(queryResult);
      result = await getDbBadgeDetails(badgeId, regionId);
    });

    test('calls getSqlQuery with the correct', () =>
      expect(mockGetSqlQuery).toHaveBeenCalledWith((`${__dirname}/get-db-badge-details.sql`)));

    test('calls queryPostgres with the correct values', () =>
      expect(mockQueryPostgres).toHaveBeenCalledWith(
        sqlQueryResult,
        [regionId, badgeId]
      ));

    test('returns the expected result', () => expect(result).toBe(queryResult.rows[0]));

  });

  describe('when no badge is found', () => {
    const queryResult = {
      rows: [] as any
    } as QueryResult<IHydratedBadge[]>;

    beforeEach(async () => {
      mockQueryPostgres = jest.spyOn(postgres, 'queryPostgres')
        .mockResolvedValue(queryResult);
      result = await getDbBadgeDetails(badgeId, regionId);
    });

    test('returns undefined', () => expect(result).toBeUndefined());

  });

});
