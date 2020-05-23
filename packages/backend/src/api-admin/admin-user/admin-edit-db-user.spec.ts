import * as postgres from '../../postgres';
import { IUser } from '@chrisb-dev/seasonal-shared-models';
import { QueryResult } from 'pg';
import { adminEditDbUser } from './admin-edit-db-user';
import * as hashPassword from './hash-password';

describe('adminEditDbUser', () => {
  let mockGetSqlQuery: jest.SpyInstance;
  let mockQueryPostgres: jest.SpyInstance;
  let mockHashPassword: jest.SpyInstance;
  const user = {
    id: 'id',
    password: '123',
    roles: ['admin'],
    username: 'test'
  } as IUser;
  const hashedPassword = 'hashedPassword';
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
    result = await adminEditDbUser(user);
  });

  test('hashes the users password', () =>
    expect(mockHashPassword).toHaveBeenCalledWith(user.password));

  test('calls getSqlQuery with the correct value', () =>
    expect(mockGetSqlQuery).toHaveBeenCalledWith(`${__dirname}/admin-edit-user.sql`));

  test('calls queryPostgres with the correct values', () =>
    expect(mockQueryPostgres).toHaveBeenCalledWith(
      sqlQuery,
      [
        user.id,
        user.username,
        hashedPassword,
        user.roles
      ]
    ));

  test('returns the expected result', () => expect(result).toBe(queryResult.rows[0]));

});
