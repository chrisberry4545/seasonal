import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import * as getDbSeasonsWithRecipes from './get-db-seasons-with-recipes';
import { getOneDbSeasonWithRecipes } from './get-one-db-season-with-recipes';

describe('getOneSeasonWithRecipes', () => {
  let result: IHydratedSeason | undefined;
  const seasons = [{}] as IHydratedSeason[];
  beforeEach(async () => {
    jest.spyOn(getDbSeasonsWithRecipes, 'getDbSeasonsWithRecipes')
      .mockResolvedValue(seasons);
    result = await getOneDbSeasonWithRecipes(1, 'regionId');
  });

  test('returns the season', () => expect(result).toBe(seasons[0]));

});
