import fs from 'promise-fs';
import { getSqlQuery } from './get-sql-query';

describe('getSqlQuery', () => {
  const mockResult = 'test-file-contents';
  let mockReadFile: jest.SpyInstance;
  let result: string;

  beforeEach(async () => {
    mockReadFile = jest.spyOn(fs, 'readFile').mockResolvedValue(mockResult);
    result = await getSqlQuery('file');
  });

  test('gets the file contents', () =>
    expect(mockReadFile).toHaveBeenCalledWith('file', 'utf8'));

  test('returns the result of reading the file', () =>
    expect(result).toBe(mockResult));

});
