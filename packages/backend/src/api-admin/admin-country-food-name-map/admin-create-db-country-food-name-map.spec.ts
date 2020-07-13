import * as postgres from '../../postgres';
import { ICountryFoodNameMap, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { QueryResult } from 'pg';
import { adminCreateDbCountryFoodNameMap } from './admin-create-db-country-food-name-map';

describe('adminCreateDbCountryFoodNameMap', () => {
  let mockGetSqlQuery: jest.SpyInstance;
  let mockQueryPostgres: jest.SpyInstance;
  const countryFoodNameMap = {
    countryId: 'countryId',
    foodId: 'foodId',
    languages: [LANGUAGES.EN_GB],
    name: 'test'
  } as ICountryFoodNameMap;
  const sqlQuery = 'sql-query';
  const queryResult = {
    rows: [{}]
  } as QueryResult<ICountryFoodNameMap>;
  let result: ICountryFoodNameMap;

  beforeEach(async () => {
    mockGetSqlQuery = jest.spyOn(postgres, 'getSqlQuery')
      .mockResolvedValue(sqlQuery);
    mockGetSqlQuery.mockClear();
    mockQueryPostgres = jest.spyOn(postgres, 'queryPostgres')
      .mockResolvedValue(queryResult);
    mockQueryPostgres.mockClear();
    result = await adminCreateDbCountryFoodNameMap(countryFoodNameMap);
  });

  test('calls getSqlQuery with the correct value', () =>
    expect(mockGetSqlQuery).toHaveBeenCalledWith(`${__dirname}/admin-create-country-to-food-name-map.sql`));

  test('calls queryPostgres with the correct values', () =>
    expect(mockQueryPostgres).toHaveBeenCalledWith(
      sqlQuery,
      [
        countryFoodNameMap.name,
        countryFoodNameMap.countryId,
        countryFoodNameMap.foodId,
        countryFoodNameMap.languages
      ]
    ));

  test('returns the expected result', () => expect(result).toBe(queryResult.rows[0]));

});
