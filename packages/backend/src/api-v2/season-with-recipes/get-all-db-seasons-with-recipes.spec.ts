import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import * as getDbSeasonsWithRecipes from './get-db-seasons-with-recipes';
import { getAllDbSeasonsWithRecipes } from './get-all-db-seasons-with-recipes';

describe('getAllSeasonsWithRecipes', () => {
  let result: IHydratedSeason[];
  const seasons = [{}] as IHydratedSeason[];
  beforeEach(async () => {
    jest.spyOn(getDbSeasonsWithRecipes, 'getDbSeasonsWithRecipes')
      .mockResolvedValue(seasons);
    result = await getAllDbSeasonsWithRecipes('regionId');
  });

  test('returns the seasons', () => expect(result).toBe(seasons));

});
