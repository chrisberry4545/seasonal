import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';
import { JWT_SECRET_KEY } from '../config';
import { USER_ROLES } from '@chrisb-dev/seasonal-shared-models';
import { roleValidation } from './role-validation';
import { appLogin } from './app-login';

const setupPassportForUser = (
  requiredRole: USER_ROLES
) => passport.use(requiredRole, new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET_KEY
}, async (jwtPayload, cb) => roleValidation(
  jwtPayload, cb, requiredRole
)));

Object.values(USER_ROLES).forEach((role) => setupPassportForUser(role));

passport.use('login', new LocalStrategy(appLogin));

export const appPassport = passport;
