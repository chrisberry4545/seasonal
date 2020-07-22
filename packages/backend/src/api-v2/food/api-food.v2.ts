import {
  Router,
  Request,
  Response,
  NextFunction
} from 'express';
import { getCachedFoodDetailsWithFilteredRecipes } from './get-cached-food-details-with-filtered-recipes';
import {
  getIsVegetarianFromQueryParams,
  getIsVeganFromQueryParams,
  getRegionIdFromQueryParams,
  getLanguageFromQueryParams
} from '../../api-utils/get-query-params';
import { get500Error, get404Error } from '../../api-utils';
import { uuidParamValidation } from '../../middleware/uuid-param-validation';

export const apiFoodV2 = (router = Router()) => {
  router.get(
    '/:id',
    uuidParamValidation(),
    async (
      req: Request, res: Response, next: NextFunction
    ) => {
      const { id } = req.params;
      try {
        const isVegetarian = getIsVegetarianFromQueryParams(req);
        const isVegan = getIsVeganFromQueryParams(req);
        const regionId = getRegionIdFromQueryParams(req);
        const language = getLanguageFromQueryParams(req);
        const result = await getCachedFoodDetailsWithFilteredRecipes(
          id, isVegetarian, isVegan, regionId, language
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
