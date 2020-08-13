import {
  Router,
  Request,
  Response,
  NextFunction
} from 'express';
import { getAllCachedCountries } from './get-all-cached-countries';
import { get500Error, getLanguageFromQueryParams } from '../../api-utils';
import { logger } from '../../logger/logger';

export const apiCountryV2 = (router = Router()) => {
  router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const language = getLanguageFromQueryParams(req);
      const result = await getAllCachedCountries()(language);
      logger.log('info', 'get all countries', {
        language,
        result
      });
      return res.json(result);
    } catch (err) {
      return next(get500Error(err.message));
    }
  });
  return router;
};
