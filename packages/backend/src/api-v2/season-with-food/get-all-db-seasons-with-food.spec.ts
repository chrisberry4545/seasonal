import { IHydratedSeason, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import * as getDbSeasonsWithFood from './get-db-seasons-with-food';
import { getAllDbSeasonsWithFood } from './get-all-db-seasons-with-food';

describe('getAllSeasonsWithFood', () => {
  let result: IHydratedSeason[];
  const seasons = [{}] as IHydratedSeason[];
  beforeEach(async () => {
    jest.spyOn(getDbSeasonsWithFood, 'getDbSeasonsWithFood')
      .mockResolvedValue(seasons);
    result = await getAllDbSeasonsWithFood('regionId', LANGUAGES.EN);
  });

  test('returns the seasons', () => expect(result).toBe(seasons));

});
