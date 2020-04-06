import {
    Router,
    Request,
    Response,
    NextFunction
  } from 'express';
import {
  fetchAllSeasonsWithRecipes,
  fetchFilteredSeasonsWithRecipes
} from '../../fetch-data';
import {
  getRegionIdFromQueryParams,
  getIsVegetarianFromQueryParams,
  getIsVeganFromQueryParams
} from '../utils/get-query-params';
import { get500Error, get404Error } from '../utils';

export const seasonWithRecipesApi = (router = Router()) => {
  router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const regionId = getRegionIdFromQueryParams(req);
    try {
      const result = await fetchAllSeasonsWithRecipes(regionId);
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
      const result = await fetchFilteredSeasonsWithRecipes(
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
