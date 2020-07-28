import {
  Router,
  Request,
  Response,
  NextFunction
} from 'express';
import {
  getTranslation
} from './get-translation';
import { get500Error, get404Error } from '../../api-utils';
import { LANGUAGES } from '@chrisb-dev/seasonal-shared-models';

export const apiTranslationV2 = (router = Router()) => {
  router.get(
    '/:language',
    async (
      req: Request, res: Response, next: NextFunction
    ) => {
      try {
        const { language } = req.params;
        const result = await getTranslation(language as LANGUAGES);
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
