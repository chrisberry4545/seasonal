import {
  Router,
  Request,
  Response,
  NextFunction
} from 'express';
import { get500Error, get404Error } from '../../api-utils';
import { getAllLanguages } from './get-all-languages';
import { logger } from '../../logger/logger';

export const apiLanguageV2 = (router = Router()) => {
  router.get('/', async (
    req: Request, res: Response, next: NextFunction
  ) => {
      try {
        const result = await getAllLanguages();
        logger.log('info', 'all languages', {
          result
        });
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
