import {
  Router,
  Request,
  Response,
  NextFunction
} from 'express';
import { getAllCachedSeasons } from './get-all-cached-seasons';
import { get500Error, getLanguageFromQueryParams } from '../../api-utils';

export const apiSeasonV2 = (router = Router()) => {
  router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const languages = getLanguageFromQueryParams(req);
      const results = await getAllCachedSeasons()(languages);
      return res.json(results);
    } catch (err) {
      return next(get500Error(err.message));
    }
  });
  return router;
};
