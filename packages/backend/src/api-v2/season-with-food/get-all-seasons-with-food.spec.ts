import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import * as getSeasonsWithFood from './get-seasons-with-food';
import { getAllSeasonsWithFood } from './get-all-seasons-with-food';

describe('getAllSeasonsWithFood', () => {
  let result: IHydratedSeason[];
  const seasons = [{}] as IHydratedSeason[];
  beforeEach(async () => {
    jest.spyOn(getSeasonsWithFood, 'getSeasonsWithFood')
      .mockResolvedValue(seasons);
    result = await getAllSeasonsWithFood('regionId');
  });

  test('returns the seasons', () => expect(result).toBe(seasons));

});
