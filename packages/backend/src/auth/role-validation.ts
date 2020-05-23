import { VerifiedCallback } from 'passport-jwt';
import { adminGetOneDbUser } from '../api-admin/admin-user/admin-get-one-db-user';
import { USER_ROLES } from '@chrisb-dev/seasonal-shared-models';

export const roleValidation = async (
  jwtPayload: { user: { id: string } },
  cb: VerifiedCallback,
  requiredRole: USER_ROLES
) => {
  const user = await adminGetOneDbUser(jwtPayload.user.id);
  if (user?.roles?.includes(requiredRole)) {
    return cb(null, jwtPayload.user);
  }
  return cb(null, null);
};
