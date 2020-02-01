import {
  Router,
  Request,
  Response,
  NextFunction
} from 'express';

import { appPassport } from './auth/app-passport';
import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../../config';

export const loginApi = (router = Router()) => {
  router.post('/', (req: Request, res: Response, next: NextFunction) => {
    appPassport.authenticate('login', async (err, user) => {
      const sendAuthorizationError = (message: string) => {
        res.status(401).send(message);
        return;
      };
      try {
        if (err || !user) {
          return sendAuthorizationError('No user found');
        }
        req.login(user, { session: false }, (error) => {
          if (error) {
            return sendAuthorizationError('Login failed');
          }
          const body = { id : user.id, username : user.username };
          const token = jwt.sign({ user : body }, JWT_SECRET_KEY as string);
          return res.json({ token });
        });
      } catch (error) {
        return sendAuthorizationError('Login failed');
      }
    })(req, res, next);
  });
  return router;
};
