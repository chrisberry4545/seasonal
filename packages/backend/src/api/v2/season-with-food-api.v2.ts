import {
  Router,
  Request,
  Response,
  NextFunction
} from 'express';
import { fetchAllSeasonsWithFood, fetchSeasonWithFood } from '../../fetch-data';
import { getRegionIdFromQueryParams } from '../utils/get-query-params';
import { get500Error, get404Error } from '../utils';

export const seasonWithFoodApi = (router = Router()) => {
  router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const regionId = getRegionIdFromQueryParams(req);
    try {
      const result = await fetchAllSeasonsWithFood(regionId);
      return res.json(result);
    } catch (err) {
      return next(get500Error(err.message));
    }
  });
  router.get('/:seasonIndex', async (req: Request, res: Response, next: NextFunction) => {
    const { seasonIndex } = req.params;
    const regionId = getRegionIdFromQueryParams(req);
    try {
      const result = await fetchSeasonWithFood(parseInt(seasonIndex, 10), regionId);
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
