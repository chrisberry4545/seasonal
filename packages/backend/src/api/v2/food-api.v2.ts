import {
  Router,
  Request,
  Response,
  NextFunction
} from 'express';
import { fetchFoodDataWithFilteredRecipes } from '../../fetch-data';
import {
  getIsVegetarianFromQueryParams,
  getIsVeganFromQueryParams,
  getCountryCodeFromQueryParams
} from '../utils/get-query-params';
import { get500Error, get404Error } from '../utils';

export const foodApi = (router = Router()) => {
  router.get('/:foodId', async (
    req: Request, res: Response, next: NextFunction
  ) => {
    const { foodId } = req.params;
    const isVegetarian = getIsVegetarianFromQueryParams(req);
    const isVegan = getIsVeganFromQueryParams(req);
    const countryCode = getCountryCodeFromQueryParams(req);
    try {
      const result = await fetchFoodDataWithFilteredRecipes(
        foodId, isVegetarian, isVegan, countryCode
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
