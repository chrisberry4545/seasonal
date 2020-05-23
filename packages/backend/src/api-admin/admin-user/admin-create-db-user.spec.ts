import * as postgres from '../../postgres';
import { IUser } from '@chrisb-dev/seasonal-shared-models';
import { QueryResult } from 'pg';
import { adminCreateDbUser } from './admin-create-db-user';
import * as hashPassword from './hash-password';

describe('adminCreateDbUser', () => {
  let mockGetSqlQuery: jest.SpyInstance;
  let mockQueryPostgres: jest.SpyInstance;
  let mockHashPassword: jest.SpyInstance;
  const hashedPassword = 'hashedPassword';
  const user = {
    password: '123',
    roles: ['admin'],
    username: 'test'
  } as IUser;
  const sqlQuery = 'sql-query';
  const queryResult = {
    rows: [{}]
  } as QueryResult<IUser>;
  let result: IUser;

  beforeEach(async () => {
    mockGetSqlQuery = jest.spyOn(postgres, 'getSqlQuery')
      .mockResolvedValue(sqlQuery);
    mockGetSqlQuery.mockClear();
    mockQueryPostgres = jest.spyOn(postgres, 'queryPostgres')
      .mockResolvedValue(queryResult);
    mockQueryPostgres.mockClear();
    mockHashPassword = jest.spyOn(hashPassword, 'hashPassword')
      .mockResolvedValue(hashedPassword);
    mockHashPassword.mockClear();
    result = await adminCreateDbUser(user);
  });

  test('hashes the users password', () =>
    expect(mockHashPassword).toHaveBeenCalledWith(user.password));

  test('calls getSqlQuery with the correct value', () =>
    expect(mockGetSqlQuery).toHaveBeenCalledWith(`${__dirname}/admin-create-user.sql`));

  test('calls queryPostgres with the correct values', () =>
    expect(mockQueryPostgres).toHaveBeenCalledWith(
      sqlQuery,
      [
        user.username,
        hashedPassword
      ]
    ));

  test('returns the expected result', () => expect(result).toBe(queryResult.rows[0]));

});
