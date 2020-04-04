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
        res.status(401).send({ message: 'Login failed' });
      try {
        if (err || !user) {
          sendAuthorizationError();
          return;
        }
        req.login(user, { session: false }, (error) => {
          if (error) {
            sendAuthorizationError();
            return;
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
          res.json({ success: true });
          return;
        });
      } catch (error) {
        sendAuthorizationError();
        return;
      }
    })(req, res, next);
  });
  return router;
};
