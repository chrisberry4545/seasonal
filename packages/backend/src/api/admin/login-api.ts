import {
  Router,
  Request,
  Response,
  NextFunction
} from 'express';

import { appPassport } from './auth/app-passport';
import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY, ENV } from '../../config';

export const loginApi = (router = Router()) => {
  router.post('/', (req: Request, res: Response, next: NextFunction) => {
    appPassport.authenticate('login', async (err, user) => {
      const sendAuthorizationError = () =>
        next({ status: 401, message: 'Login failed' });
      try {
        if (err || !user) {
          return sendAuthorizationError();
        }
        req.login(user, { session: false }, (error) => {
          if (error) {
            return sendAuthorizationError();
          }
          const body = { id : user.id, username : user.username };
          const token = jwt.sign(
            { user : body },
            JWT_SECRET_KEY as string,
            { expiresIn: '30m' }
          );
          res.cookie('jwt', token, {
            httpOnly: true,
            ...(
              ENV === 'dev' ? {} : { secure: true }
            )
          });
          return res.json({ success: true });
        });
      } catch (error) {
        return sendAuthorizationError();
      }
    })(req, res, next);
  });
  return router;
};
