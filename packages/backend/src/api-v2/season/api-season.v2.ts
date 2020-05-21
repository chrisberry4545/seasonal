import {
  Router,
  Request,
  Response,
  NextFunction
} from 'express';
import { getAllCachedSeasons } from './get-all-cached-seasons';
import { get500Error, getRegionIdFromQueryParams } from '../../api-utils';

export const apiSeasonV2 = (router = Router()) => {
  router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const regionId = getRegionIdFromQueryParams(req);
    try {
      const results = await getAllCachedSeasons()(regionId);
      return res.json(results);
    } catch (err) {
      return next(get500Error(err.message));
    }
  });
  return router;
};
