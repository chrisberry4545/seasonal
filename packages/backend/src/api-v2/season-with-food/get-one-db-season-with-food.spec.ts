import { IHydratedSeason, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import * as getDbSeasonsWithFood from './get-db-seasons-with-food';
import { getOneDbSeasonWithFood } from './get-one-db-season-with-food';

describe('getOneSeasonWithFood', () => {
  let result: IHydratedSeason | undefined;
  const seasons = [{}] as IHydratedSeason[];
  beforeEach(async () => {
    jest.spyOn(getDbSeasonsWithFood, 'getDbSeasonsWithFood')
      .mockResolvedValue(seasons);
    result = await getOneDbSeasonWithFood(1, 'regionId', LANGUAGES.EN);
  });

  test('returns the season', () => expect(result).toBe(seasons[0]));

});
