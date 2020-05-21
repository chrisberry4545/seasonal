import {
    Router,
    Request,
    Response,
    NextFunction
  } from 'express';
import {
  getRegionIdFromQueryParams,
  getIsVegetarianFromQueryParams,
  getIsVeganFromQueryParams
} from '../../api-utils/get-query-params';
import { get500Error, get404Error } from '../../api-utils';
import { getOneCachedSeasonsWithFilteredRecipes } from './get-one-cached-season-with-filtered-recipes';
import { getAllCachedSeasonsWithFilteredRecipes } from './get-all-cached-seasons-with-filtered-recipes';

export const apiSeasonWithRecipesV2 = (router = Router()) => {
  router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const isVegetarian = getIsVegetarianFromQueryParams(req);
    const isVegan = getIsVeganFromQueryParams(req);
    const regionId = getRegionIdFromQueryParams(req);
    try {
      const result = await getAllCachedSeasonsWithFilteredRecipes(
        isVegetarian,
        isVegan,
        regionId
      );
      return res.json(result);
    } catch (err) {
      return next(get500Error(err.message));
    }
  });
  router.get('/:seasonIndex', async (req: Request, res: Response, next: NextFunction) => {
    const { seasonIndex } = req.params;
    const isVegetarian = getIsVegetarianFromQueryParams(req);
    const isVegan = getIsVeganFromQueryParams(req);
    const regionId = getRegionIdFromQueryParams(req);
    try {
      const result = await getOneCachedSeasonsWithFilteredRecipes(
        parseInt(seasonIndex, 10),
        isVegetarian,
        isVegan,
        regionId
      );
      if (!result) {
        return next(get404Error());
      }
      return res.json(result);
    } catch (err) {
      return next(get500Error(err.message));
    }
  });
  return router;
};
