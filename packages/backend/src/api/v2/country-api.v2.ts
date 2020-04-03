import {
  Router,
  Request,
  Response,
  NextFunction
} from 'express';
import { fetchAllCountryData } from '../../fetch-data/fetch-country-data';
import { get500Error } from '../utils';

export const countryApi = (router = Router()) => {
  router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await fetchAllCountryData();
      return res.json(result);
    } catch (err) {
      return next(get500Error(err.message));
    }
  });
  return router;
};
