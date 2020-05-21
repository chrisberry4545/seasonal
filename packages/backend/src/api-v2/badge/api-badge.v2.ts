import {
  Router,
  Request,
  Response,
  NextFunction
} from 'express';
import {
  getCachedBadgeDetails
} from './get-cached-badge-details';
import {
  getIsVegetarianFromQueryParams,
  getIsVeganFromQueryParams,
  getRegionIdFromQueryParams
} from '../../api-utils/get-query-params';
import { get500Error, get404Error } from '../../api-utils';
import { uuidParamValidation } from '../../middleware/uuid-param-validation';

export const apiBadgeV2 = (router = Router()) => {
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
        const result = await getCachedBadgeDetails()(
          id, regionId, isVegetarian, isVegan
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
