import {
  Router,
  Request,
  Response,
  NextFunction
} from 'express';
import { getAllCachedCountries } from './get-all-cached-countries';
import { get500Error } from '../../api-utils';

export const apiCountryV2 = (router = Router()) => {
  router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await getAllCachedCountries();
      return res.json(result);
    } catch (err) {
      return next(get500Error(err.message));
    }
  });
  return router;
};
