import {
  Router,
  Request,
  Response,
  NextFunction
} from 'express';

import {
  fetchAllSeasonData
} from '../../fetch-data';
import { getRegionIdFromQueryParams } from '../utils/get-query-params';
import { get500Error } from '../utils';

export const seasonApi = (router = Router()) => {
  router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const regionId = getRegionIdFromQueryParams(req);
    try {
      const results = await fetchAllSeasonData(regionId);
      return res.json(results);
    } catch (err) {
      return next(get500Error(err.message));
    }
  });
  return router;
};
