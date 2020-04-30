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
import { getAllCachedSeasonsWithRecipes } from './get-all-cached-seasons-with-recipes';
import { getOneCachedSeasonsWithFilteredRecipes } from './get-cached-season-with-filtered-recipes';

export const apiSeasonWithRecipes = (router = Router()) => {
  router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const regionId = getRegionIdFromQueryParams(req);
    try {
      const result = await getAllCachedSeasonsWithRecipes(regionId);
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
