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
  getRegionIdFromQueryParams
} from '../utils/get-query-params';
import { get500Error, get404Error } from '../utils';
import { uuidParamValidation } from '../../middleware/uuid-param-validation';

export const foodApi = (router = Router()) => {
  router.get(
    '/:id',
    uuidParamValidation(),
    async (
      req: Request, res: Response, next: NextFunction
    ) => {
      const { id } = req.params;
      const isVegetarian = getIsVegetarianFromQueryParams(req);
      const isVegan = getIsVeganFromQueryParams(req);
      const regionId = getRegionIdFromQueryParams(req);
      try {
        const result = await fetchFoodDataWithFilteredRecipes(
          id, isVegetarian, isVegan, regionId
        );
        if (!result) {
          return next(get404Error());
        }
        return res.json(result);
      } catch (err) {
        return next(get500Error(err.message));
      }
    }
  );
  return router;
};
