import {
  Router,
  Request,
  Response,
  NextFunction
} from 'express';
import { getRegionIdFromQueryParams, getLanguageFromQueryParams } from '../../api-utils/get-query-params';
import { get500Error, get404Error } from '../../api-utils';
import { getAllCachedSeasonsWithFood } from './get-all-cached-seasons-with-food';
import { getOneCachedSeasonWithFood } from './get-one-cached-season-with-food';
import { logger } from '../../logger/logger';

export const apiSeasonWithFoodV2 = (router = Router()) => {
  router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const regionId = getRegionIdFromQueryParams(req);
    try {
      const language = getLanguageFromQueryParams(req);
      const result = await getAllCachedSeasonsWithFood()(regionId, language);
      logger.log('info', 'all seasons with food', {
        language,
        regionId,
        result
      });
      return res.json(result);
    } catch (err) {
      return next(get500Error(err.message));
    }
  });
  router.get('/:seasonIndex', async (req: Request, res: Response, next: NextFunction) => {
    const { seasonIndex } = req.params;
    try {
      const regionId = getRegionIdFromQueryParams(req);
      const language = getLanguageFromQueryParams(req);
      const result = await getOneCachedSeasonWithFood()(
        parseInt(seasonIndex, 10), regionId, language
      );
      logger.log('info', 'one season with food', {
        language,
        regionId,
        result,
        seasonIndex
      });
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
