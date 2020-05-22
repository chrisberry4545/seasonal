import { IFood } from '@chrisb-dev/seasonal-shared-models';
import * as adminGetDbFood from './admin-get-db-food';
import { adminGetAllDbFood } from './admin-get-all-db-food';

describe('adminGetAllDbFood', () => {
  let mockAdminGetDbFood: jest.SpyInstance;
  const mockFood = [{}] as IFood[];
  let result: IFood[];

  beforeEach(async () => {
    mockAdminGetDbFood = jest.spyOn(adminGetDbFood, 'adminGetDbFood')
      .mockResolvedValue(mockFood);
    mockAdminGetDbFood.mockClear();
    result = await adminGetAllDbFood();
  });

  test('calls adminGetDbFood', () =>
    expect(mockAdminGetDbFood).toHaveBeenCalledWith(null));

  test('returns the expected result', () => expect(result).toBe(mockFood));

});
