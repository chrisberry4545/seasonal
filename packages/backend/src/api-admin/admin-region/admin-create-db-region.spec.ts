import * as postgres from '../../postgres';
import { IDbRegion } from '@chrisb-dev/seasonal-shared-models';
import { QueryResult } from 'pg';
import { adminCreateDbRegion } from './admin-create-db-region';

describe('adminCreateDbRegion', () => {
  let mockGetSqlQuery: jest.SpyInstance;
  let mockQueryPostgres: jest.SpyInstance;
  const region = {
    code: 'code',
    countryId: 'countryId',
    id: 'id',
    isDisable: true,
    lat: 50,
    lng: 25,
    name: 'name'
  } as IDbRegion;
  const sqlQuery = 'sql-query';
  const queryResult = {
    rows: [{}]
  } as QueryResult<IDbRegion>;
  let result: IDbRegion;

  beforeEach(async () => {
    mockGetSqlQuery = jest.spyOn(postgres, 'getSqlQuery')
      .mockResolvedValue(sqlQuery);
    mockGetSqlQuery.mockClear();
    mockQueryPostgres = jest.spyOn(postgres, 'queryPostgres')
      .mockResolvedValue(queryResult);
    mockQueryPostgres.mockClear();
    result = await adminCreateDbRegion(region);
  });

  test('calls getSqlQuery with the correct value', () =>
    expect(mockGetSqlQuery).toHaveBeenCalledWith(`${__dirname}/admin-create-region.sql`));

  test('calls queryPostgres with the correct values', () =>
    expect(mockQueryPostgres).toHaveBeenCalledWith(
      sqlQuery,
      [
        region.id,
        region.code,
        region.name,
        region.countryId,
        region.lat,
        region.lng,
        region.isDisabled
      ]
    ));

  test('returns the expected result', () => expect(result).toBe(queryResult.rows[0]));

});
