import { IFood } from '@chrisb-dev/seasonal-shared-models';
import * as adminGetDbFood from './admin-get-db-food';
import { adminGetOneDbFood } from './admin-get-one-db-food';

describe('adminGetOneDbFood', () => {
  let mockAdminGetDbFood: jest.SpyInstance;
  const mockFood = [{}] as IFood[];
  const foodId = 'foodId';
  let result: IFood | undefined;

  beforeEach(async () => {
    mockAdminGetDbFood = jest.spyOn(adminGetDbFood, 'adminGetDbFood')
      .mockResolvedValue(mockFood);
    mockAdminGetDbFood.mockClear();
    result = await adminGetOneDbFood(foodId);
  });

  test('calls adminGetDbFood', () =>
    expect(mockAdminGetDbFood).toHaveBeenCalledWith(foodId));

  test('returns the expected result', () => expect(result).toBe(mockFood[0]));

});
