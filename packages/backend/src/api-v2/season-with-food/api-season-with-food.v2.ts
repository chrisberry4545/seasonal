import {
  Router,
  Request,
  Response,
  NextFunction
} from 'express';
import { getRegionIdFromQueryParams } from '../../api-utils/get-query-params';
import { get500Error, get404Error } from '../../api-utils';
import { getAllCachedSeasonsWithFood } from './get-all-cached-seasons-with-food';
import { getOneCachedSeasonWithFood } from './get-one-cached-season-with-food';

export const apiSeasonWithFood = (router = Router()) => {
  router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const regionId = getRegionIdFromQueryParams(req);
    try {
      const result = await getAllCachedSeasonsWithFood(regionId);
      return res.json(result);
    } catch (err) {
      return next(get500Error(err.message));
    }
  });
  router.get('/:seasonIndex', async (req: Request, res: Response, next: NextFunction) => {
    const { seasonIndex } = req.params;
    const regionId = getRegionIdFromQueryParams(req);
    try {
      const result = await getOneCachedSeasonWithFood(parseInt(seasonIndex, 10), regionId);
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
