import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import * as getSeasonsWithFood from './get-seasons-with-food';
import { getOneSeasonWithFood } from './get-one-season-with-food';

describe('getOneSeasonWithFood', () => {
  let result: IHydratedSeason | undefined;
  const seasons = [{}] as IHydratedSeason[];
  beforeEach(async () => {
    jest.spyOn(getSeasonsWithFood, 'getSeasonsWithFood')
      .mockResolvedValue(seasons);
    result = await getOneSeasonWithFood(1, 'regionId');
  });

  test('returns the season', () => expect(result).toBe(seasons[0]));

});
