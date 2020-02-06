import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';
import { getUserLogin, adminGetOneUser } from '../../../fetch-data';
import { JWT_SECRET_KEY } from '../../../config';

passport.use('jwt-admin', new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET_KEY
}, async (jwtPayload, cb) => {
  const user = await adminGetOneUser(jwtPayload.user.id);
  const requiredRole = 'admin';
  if (user?.roles?.includes(requiredRole)) {
    return cb(null, jwtPayload.user);
  }
  return cb(null, null);
}));

passport.use('login', new LocalStrategy(
  async  (username, password, cb) => {
    try {
      const user = await getUserLogin(username, password);
      return cb(null, user);
    } catch (err) {
      return cb(null, null, { message: err });
    }
  }
));

export const appPassport = passport;
