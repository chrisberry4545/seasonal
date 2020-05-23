import { VerifyFunction } from 'passport-local';
import { getUserLogin } from '../api-admin/admin-user/get-user-login';

export const appLogin: VerifyFunction = async  (
  username, password, cb
) => {
  try {
    const user = await getUserLogin(username, password);
    return cb(null, user);
  } catch (err) {
    return cb(null, null, { message: err });
  }
};
